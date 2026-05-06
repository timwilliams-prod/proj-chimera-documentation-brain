// functions/api/save-md.ts
// POST /api/save-md
//   Body: { path: string, content: string, message?: string }
//   → { ok: true, commit_sha, html_url } on success
//
// Commits a markdown edit from picon's Save buttons back to the repo via a
// GitHub App. Replaces the localStorage-only flow described in WALKTHROUGH.md.
//
// Guardrail: only paths under "planning/" are allowed — protects every other
// path in the repo (project-charter, generated/, .claude/, functions/, etc.).
//
// Auth: zero npm deps. We do JWT signing ourselves with Web Crypto:
//   1. Build & sign an RS256 JWT with the App's private key (10-min TTL)
//   2. Exchange it for an installation token at GitHub's installations API
//   3. GET the file's current SHA (or skip on 404 — new file)
//   4. PUT the base64-encoded new content via the contents API
//
// Env (Cloudflare Pages → Settings → Environment variables):
//   GITHUB_APP_ID            App ID from GitHub App settings
//   GITHUB_INSTALLATION_ID   Installation ID after installing on the repo
//   GITHUB_PRIVATE_KEY       Full multi-line PEM contents (PKCS#1 or PKCS#8)
//   GITHUB_REPO_OWNER        timwilliams-prod
//   GITHUB_REPO_NAME         proj-chimera-documentation-brain
//   GITHUB_BRANCH            main
//
// Bundled with /api/clickup-sprint and /api/clickup-search per WALKTHROUGH.md.

interface Env {
  GITHUB_APP_ID: string;
  GITHUB_INSTALLATION_ID: string;
  GITHUB_PRIVATE_KEY: string;
  GITHUB_REPO_OWNER: string;
  GITHUB_REPO_NAME: string;
  GITHUB_BRANCH: string;
}

interface SaveRequest {
  path?: string;
  content?: string;
  message?: string;
}

const ALLOWED_PATH_PREFIX = "planning/";

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Validate env upfront so misconfig produces a clear 500, not a JWT crash.
  const missing = [
    "GITHUB_APP_ID", "GITHUB_INSTALLATION_ID", "GITHUB_PRIVATE_KEY",
    "GITHUB_REPO_OWNER", "GITHUB_REPO_NAME", "GITHUB_BRANCH"
  ].filter((k) => !env[k as keyof Env]);
  if (missing.length) {
    return jsonResponse({ error: `missing env vars: ${missing.join(", ")}` }, 500);
  }

  let body: SaveRequest;
  try {
    body = (await request.json()) as SaveRequest;
  } catch {
    return jsonResponse({ error: "invalid JSON body" }, 400);
  }

  const path = (body.path || "").trim();
  const content = body.content;
  const message = body.message?.trim() || `chore(picon): edit ${path}`;

  if (!path) return jsonResponse({ error: "path required" }, 400);
  if (typeof content !== "string") return jsonResponse({ error: "content required (string)" }, 400);

  // Guardrail: only writes inside planning/. Block path traversal too.
  if (!path.startsWith(ALLOWED_PATH_PREFIX) || path.includes("..")) {
    return jsonResponse({ error: `writes restricted to ${ALLOWED_PATH_PREFIX}` }, 400);
  }

  let installationToken: string;
  try {
    installationToken = await getInstallationToken(env);
  } catch (e) {
    return jsonResponse({ error: `auth failed: ${(e as Error).message}` }, 500);
  }

  const apiBase = `https://api.github.com/repos/${env.GITHUB_REPO_OWNER}/${env.GITHUB_REPO_NAME}/contents/${encodeContentsPath(path)}`;

  // GET current SHA — needed for in-place updates, omitted if file doesn't exist.
  let sha: string | undefined;
  const getRes = await fetch(`${apiBase}?ref=${encodeURIComponent(env.GITHUB_BRANCH)}`, {
    headers: ghHeaders(installationToken)
  });
  if (getRes.status === 200) {
    const j = (await getRes.json()) as { sha?: string };
    sha = j.sha;
  } else if (getRes.status !== 404) {
    return jsonResponse({ error: `github GET ${getRes.status}: ${await getRes.text()}` }, 502);
  }

  // PUT new content
  const putRes = await fetch(apiBase, {
    method: "PUT",
    headers: { ...ghHeaders(installationToken), "content-type": "application/json" },
    body: JSON.stringify({
      message,
      content: utf8ToBase64(content),
      branch: env.GITHUB_BRANCH,
      sha
    })
  });
  if (!putRes.ok) {
    return jsonResponse({ error: `github PUT ${putRes.status}: ${await putRes.text()}` }, 502);
  }

  const putBody = (await putRes.json()) as {
    commit?: { sha?: string; html_url?: string };
    content?: { html_url?: string };
  };

  return jsonResponse({
    ok: true,
    commit_sha: putBody.commit?.sha,
    commit_url: putBody.commit?.html_url,
    file_url: putBody.content?.html_url
  });
};

// ---------- GitHub auth ----------

async function getInstallationToken(env: Env): Promise<string> {
  const jwt = await signAppJwt(env.GITHUB_APP_ID, env.GITHUB_PRIVATE_KEY);
  const r = await fetch(
    `https://api.github.com/app/installations/${env.GITHUB_INSTALLATION_ID}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "lotus-picon"
      }
    }
  );
  if (!r.ok) {
    throw new Error(`installation_token ${r.status}: ${await r.text()}`);
  }
  const j = (await r.json()) as { token?: string };
  if (!j.token) throw new Error("installation_token response missing token");
  return j.token;
}

async function signAppJwt(appId: string, privateKeyPem: string): Promise<string> {
  // GitHub requires iat in the past and exp <= 10 min in the future. Pad iat
  // by 60s to tolerate clock skew between Cloudflare's edge and GitHub.
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = { iat: now - 60, exp: now + 9 * 60, iss: appId };

  const headerB64 = base64UrlEncode(new TextEncoder().encode(JSON.stringify(header)));
  const payloadB64 = base64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const signingInput = `${headerB64}.${payloadB64}`;

  const key = await importPrivateKey(privateKeyPem);
  const sigBuf = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(signingInput)
  );
  const sigB64 = base64UrlEncode(new Uint8Array(sigBuf));
  return `${signingInput}.${sigB64}`;
}

async function importPrivateKey(pem: string): Promise<CryptoKey> {
  const trimmed = pem.trim();
  // PKCS#8: -----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----
  // PKCS#1: -----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----
  let der: Uint8Array;
  if (trimmed.includes("BEGIN PRIVATE KEY")) {
    der = pemBodyToBytes(trimmed, "PRIVATE KEY");
  } else if (trimmed.includes("BEGIN RSA PRIVATE KEY")) {
    const pkcs1 = pemBodyToBytes(trimmed, "RSA PRIVATE KEY");
    der = pkcs1ToPkcs8(pkcs1);
  } else {
    throw new Error("private key is not PEM-encoded RSA");
  }
  return crypto.subtle.importKey(
    "pkcs8",
    der,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function pemBodyToBytes(pem: string, label: string): Uint8Array {
  const begin = `-----BEGIN ${label}-----`;
  const end = `-----END ${label}-----`;
  const start = pem.indexOf(begin);
  const stop = pem.indexOf(end);
  if (start < 0 || stop < 0) throw new Error(`malformed PEM: missing ${label} markers`);
  const b64 = pem.slice(start + begin.length, stop).replace(/\s+/g, "");
  return base64ToBytes(b64);
}

// Wrap a PKCS#1 RSAPrivateKey in a PKCS#8 PrivateKeyInfo envelope.
// This is a fixed DER prelude (version + rsaEncryption AlgorithmIdentifier)
// followed by an OCTET STRING wrapping the PKCS#1 bytes, all wrapped in a
// SEQUENCE. No need for a full ASN.1 encoder — only the length fields vary.
function pkcs1ToPkcs8(pkcs1: Uint8Array): Uint8Array {
  // version INTEGER (0)
  const version = new Uint8Array([0x02, 0x01, 0x00]);
  // AlgorithmIdentifier { OID 1.2.840.113549.1.1.1 (rsaEncryption), NULL }
  const algId = new Uint8Array([
    0x30, 0x0d,
    0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01,
    0x05, 0x00
  ]);
  const octetHeader = derTagAndLength(0x04, pkcs1.length);
  const inner = concatBytes(version, algId, octetHeader, pkcs1);
  const seqHeader = derTagAndLength(0x30, inner.length);
  return concatBytes(seqHeader, inner);
}

function derTagAndLength(tag: number, length: number): Uint8Array {
  if (length < 0x80) return new Uint8Array([tag, length]);
  if (length < 0x100) return new Uint8Array([tag, 0x81, length]);
  if (length < 0x10000) return new Uint8Array([tag, 0x82, (length >> 8) & 0xff, length & 0xff]);
  return new Uint8Array([
    tag, 0x83, (length >> 16) & 0xff, (length >> 8) & 0xff, length & 0xff
  ]);
}

function concatBytes(...arrs: Uint8Array[]): Uint8Array {
  const total = arrs.reduce((n, a) => n + a.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const a of arrs) {
    out.set(a, off);
    off += a.length;
  }
  return out;
}

// ---------- base64 helpers ----------

function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function bytesToBase64(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

function base64UrlEncode(bytes: Uint8Array): string {
  return bytesToBase64(bytes).replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function utf8ToBase64(s: string): string {
  return bytesToBase64(new TextEncoder().encode(s));
}

// ---------- misc ----------

function ghHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "lotus-picon",
    "X-GitHub-Api-Version": "2022-11-28"
  };
}

function encodeContentsPath(path: string): string {
  // Encode each segment separately so forward slashes survive
  return path.split("/").map(encodeURIComponent).join("/");
}

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...extraHeaders }
  });
}
