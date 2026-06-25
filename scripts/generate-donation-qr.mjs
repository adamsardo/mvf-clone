import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import QRCode from "qrcode";

const donationUrl =
  process.env.DONATION_URL || process.env.NEXT_PUBLIC_DONATION_URL || "https://www.mooneevalleyfoundation.org.au/support-us";
const outputPath = resolve(process.cwd(), "public/seo/mvf-donation-qr.svg");

await mkdir(dirname(outputPath), { recursive: true });
await QRCode.toFile(outputPath, donationUrl, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 2,
  color: {
    dark: "#281a39",
    light: "#ffffff",
  },
});

console.log(`Generated ${outputPath} for ${donationUrl}`);
