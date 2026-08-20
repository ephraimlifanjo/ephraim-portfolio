const API_ROOT = "https://api.github.com";

function config() {
  return {
    token: process.env.GITHUB_CONTENT_TOKEN,
    repo: process.env.GITHUB_CONTENT_REPO,
    branch: process.env.GITHUB_CONTENT_BRANCH || "main",
  };
}

export function hasGitHubPersistence() {
  const { token, repo } = config();
  return Boolean(token && repo);
}

async function githubRequest(url, options = {}) {
  const { token } = config();
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub content API failed (${response.status}): ${body.slice(0, 300)}`);
  }

  return response.status === 204 ? null : response.json();
}

export async function commitFileToGitHub({ filePath, contentBase64, message }) {
  const { repo, branch } = config();
  const encodedPath = filePath.split("/").map(encodeURIComponent).join("/");
  const endpoint = `${API_ROOT}/repos/${repo}/contents/${encodedPath}`;
  let sha;

  try {
    const current = await githubRequest(`${endpoint}?ref=${encodeURIComponent(branch)}`);
    sha = current.sha;
  } catch (error) {
    if (!String(error.message).includes("(404)")) throw error;
  }

  const body = {
    message,
    content: contentBase64,
    branch,
  };
  if (sha) body.sha = sha;

  return githubRequest(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export async function commitJsonContent(content) {
  const encoded = Buffer.from(`${JSON.stringify(content, null, 2)}\n`, "utf8").toString("base64");
  return commitFileToGitHub({
    filePath: "data/content.json",
    contentBase64: encoded,
    message: "content: update portfolio from admin CMS",
  });
}
