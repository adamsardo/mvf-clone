import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const extractionPath = path.join(root, "docs/research/mvf-extraction.json");
const imageDir = path.join(root, "public/images/mvf");
const manifestPath = path.join(root, "docs/research/mvf-assets.json");

const extraction = JSON.parse(await fs.readFile(extractionPath, "utf8"));

function extensionFor(url, contentType) {
  const pathname = new URL(url).pathname;
  const last = pathname.split("/").pop() || "";
  const match = last.match(/\.(jpe?g|png|webp|gif|svg|ico)$/i);
  if (match) return match[0].toLowerCase().replace(".jpeg", ".jpg");
  if (contentType?.includes("jpeg")) return ".jpg";
  if (contentType?.includes("png")) return ".png";
  if (contentType?.includes("webp")) return ".webp";
  if (contentType?.includes("gif")) return ".gif";
  if (contentType?.includes("svg")) return ".svg";
  if (contentType?.includes("icon")) return ".ico";
  return ".bin";
}

function safeName(value) {
  return value
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

const candidates = [
  ...extraction.global.assets.map((asset) => ({
    type: "image",
    src: asset.src,
    alt: asset.alt,
    page: asset.page,
    width: asset.width,
    height: asset.height,
  })),
  ...extraction.global.favicons.map((favicon) => ({
    type: "favicon",
    src: favicon.href,
    alt: "favicon",
    page: "global",
  })),
];

const unique = [...new Map(candidates.filter((item) => item.src).map((item) => [item.src, item])).values()];
await fs.mkdir(imageDir, { recursive: true });

const manifest = [];

for (let index = 0; index < unique.length; index += 1) {
  const item = unique[index];
  try {
    const response = await fetch(item.src, {
      headers: {
        "user-agent": "Mozilla/5.0 MVF clone asset downloader",
      },
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const contentType = response.headers.get("content-type") || "";
    const ext = extensionFor(item.src, contentType);
    const filename = `${String(index + 1).padStart(3, "0")}-${safeName(item.alt || item.page || item.src)}${ext}`;
    const absolutePath = path.join(imageDir, filename);
    const bytes = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(absolutePath, bytes);
    manifest.push({
      ...item,
      contentType,
      bytes: bytes.length,
      localPath: `/images/mvf/${filename}`,
    });
    console.log(`downloaded ${filename}`);
  } catch (error) {
    manifest.push({
      ...item,
      error: error instanceof Error ? error.message : String(error),
    });
    console.warn(`failed ${item.src}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`saved ${manifest.length} asset records`);
