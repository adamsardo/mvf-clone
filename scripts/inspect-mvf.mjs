import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const baseUrl = "https://www.mooneevalleyfoundation.org.au";

const targets = [
  { kind: "page", slug: "home", path: "/" },
  { kind: "page", slug: "grants", path: "/grants" },
  { kind: "page", slug: "news", path: "/news" },
  { kind: "page", slug: "contact", path: "/contact" },
  { kind: "page", slug: "alumni", path: "/alumni" },
  { kind: "page", slug: "past-winners", path: "/past-winners" },
  { kind: "page", slug: "apply", path: "/apply" },
  { kind: "page", slug: "about", path: "/about" },
  { kind: "page", slug: "faqs", path: "/faqs" },
  { kind: "page", slug: "support-us", path: "/support-us" },
  { kind: "post", slug: "pursuing-pleasure-with-piera", path: "/post/pursuing-pleasure-with-piera" },
  { kind: "post", slug: "congratulations-to-our-2022-awardees", path: "/post/congratulations-to-our-2022-awardees" },
  { kind: "post", slug: "congratulations-to-our-award-winners-for-2022", path: "/post/congratulations-to-our-award-winners-for-2022" },
  { kind: "post", slug: "this-musical-world-interview-with-erica-rasmussen", path: "/post/this-musical-world-interview-with-erica-rasmussen" },
];

const designDir = path.join(root, "docs/design-references/mooneevalleyfoundation");
const researchDir = path.join(root, "docs/research");

function uniqBy(items, key) {
  return [...new Map(items.map((item) => [key(item), item])).values()];
}

async function prepare(page) {
  await page.waitForLoadState("domcontentloaded", { timeout: 45_000 }).catch(() => {});
  await page.waitForTimeout(3_000);
  await page
    .evaluate(async () => {
      await document.fonts?.ready?.catch?.(() => {});
      await Promise.all(
        [...document.images].map((img) => {
          if (img.complete) return true;
          return new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
            setTimeout(resolve, 3_000);
          });
        }),
      );
    })
    .catch(() => {});
}

async function inspectDesktop(page) {
  return page.evaluate(() => {
    const props = [
      "fontSize",
      "fontWeight",
      "fontFamily",
      "lineHeight",
      "letterSpacing",
      "color",
      "backgroundColor",
      "background",
      "padding",
      "margin",
      "width",
      "height",
      "display",
      "flexDirection",
      "justifyContent",
      "alignItems",
      "gap",
      "borderRadius",
      "border",
      "boxShadow",
      "position",
      "top",
      "left",
      "zIndex",
      "opacity",
      "transform",
      "transition",
    ];

    const pickStyles = (el) => {
      const cs = getComputedStyle(el);
      const out = {};
      for (const prop of props) {
        const value = cs[prop];
        if (
          value &&
          value !== "none" &&
          value !== "normal" &&
          value !== "auto" &&
          value !== "0px" &&
          value !== "rgba(0, 0, 0, 0)"
        ) {
          out[prop] = value;
        }
      }
      return out;
    };

    const rectFor = (el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: Math.round(rect.x),
        y: Math.round(rect.y + scrollY),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
      };
    };

    const textNodes = [
      ...document.body.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,a,button,label,input,textarea"),
    ]
      .map((el, index) => ({
        index,
        tag: el.tagName.toLowerCase(),
        id: el.id || "",
        classes: String(el.className || "")
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 5),
        text:
          el.tagName === "INPUT" || el.tagName === "TEXTAREA"
            ? el.placeholder || el.value || el.getAttribute("aria-label") || ""
            : el.textContent || "",
        href: el.href || "",
        styles: pickStyles(el),
      }))
      .filter((node) => node.text.trim())
      .slice(0, 620);

    const links = [...document.querySelectorAll("a")]
      .map((link) => ({
        text: link.textContent?.trim() || link.getAttribute("aria-label") || "",
        href: link.href || "",
        target: link.target || "",
      }))
      .filter((link) => link.text || link.href);

    const images = [...document.querySelectorAll("img")]
      .map((img, index) => ({
        index,
        src: img.currentSrc || img.src || "",
        rawSrc: img.getAttribute("src") || "",
        alt: img.alt || "",
        width: img.naturalWidth || null,
        height: img.naturalHeight || null,
        rendered: rectFor(img),
        parentId: img.parentElement?.id || "",
        parentClasses: String(img.parentElement?.className || "")
          .split(/\s+/)
          .slice(0, 5),
        styles: pickStyles(img),
      }))
      .filter((image) => image.src);

    const backgrounds = [...document.querySelectorAll("*")]
      .map((el, index) => {
        const backgroundImage = getComputedStyle(el).backgroundImage;
        if (!backgroundImage || backgroundImage === "none" || !backgroundImage.includes("url(")) return null;
        return {
          index,
          tag: el.tagName.toLowerCase(),
          id: el.id || "",
          classes: String(el.className || "")
            .split(/\s+/)
            .slice(0, 5),
          backgroundImage,
          rendered: rectFor(el),
        };
      })
      .filter(Boolean)
      .slice(0, 180);

    const fontCounts = {};
    const colorCounts = {};
    [...document.querySelectorAll("*")].slice(0, 1000).forEach((el) => {
      const cs = getComputedStyle(el);
      fontCounts[cs.fontFamily] = (fontCounts[cs.fontFamily] || 0) + 1;
      colorCounts[cs.color] = (colorCounts[cs.color] || 0) + 1;
      if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") {
        colorCounts[cs.backgroundColor] = (colorCounts[cs.backgroundColor] || 0) + 1;
      }
    });

    const keyStyles = ["body", "#SITE_HEADER", "#SITE_FOOTER", "header", "main", "h1", "h2", "a", "button", "input", "textarea"]
      .map((selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        return {
          selector,
          text: (el.textContent || "").trim().slice(0, 300),
          rect: rectFor(el),
          styles: pickStyles(el),
        };
      })
      .filter(Boolean);

    const sectionCandidates = [...document.querySelectorAll('section,main > div,[id^="comp-"],article')]
      .map((el, index) => ({
        index,
        tag: el.tagName.toLowerCase(),
        id: el.id || "",
        classes: String(el.className || "")
          .split(/\s+/)
          .slice(0, 6),
        rect: rectFor(el),
        text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 700),
        styles: pickStyles(el),
      }))
      .filter((section) => section.rect.w > 100 && section.rect.h > 20 && section.text)
      .slice(0, 140);

    return {
      title: document.title,
      metaDescription:
        document.querySelector('meta[name="description"]')?.content ||
        document.querySelector('meta[property="og:description"]')?.content ||
        "",
      h1: [...document.querySelectorAll("h1")].map((h) => h.textContent?.trim()).filter(Boolean),
      allText: document.body.innerText,
      textNodes,
      links,
      images,
      backgrounds,
      fontCounts,
      colorCounts,
      keyStyles,
      sectionCandidates,
      favicons: [...document.querySelectorAll('link[rel*="icon"],link[rel="apple-touch-icon"]')].map((link) => ({
        href: link.href,
        rel: link.rel,
        sizes: link.sizes?.toString?.() || "",
      })),
      htmlClasses: document.documentElement.className,
      bodyClasses: document.body.className,
      scrollHeight: document.documentElement.scrollHeight,
    };
  });
}

async function inspectMobile(page) {
  return page.evaluate(() => ({
    title: document.title,
    h1: [...document.querySelectorAll("h1")].map((h) => h.textContent?.trim()).filter(Boolean),
    textPreview: document.body.innerText.slice(0, 2500),
    scrollHeight: document.documentElement.scrollHeight,
    visibleButtons: [...document.querySelectorAll("button,a")]
      .map((el) => ({ text: (el.textContent || el.getAttribute("aria-label") || "").trim(), href: el.href || "" }))
      .filter((item) => item.text)
      .slice(0, 80),
  }));
}

await fs.mkdir(designDir, { recursive: true });
await fs.mkdir(path.join(researchDir, "components"), { recursive: true });

const browser = await chromium.launch({ headless: true });
const extraction = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  scope: {
    pages: targets.map((target) => target.path),
    notes: [
      "Sitemap pages and sitemap blog posts only.",
      "Home contact widget removed in clone baseline.",
      "Contact and newsletter forms visual-only for baseline.",
      "Canonical service-area wording for redesign pass: Melbourne’s north-west.",
    ],
  },
  pages: [],
  global: { assets: [], fonts: {}, colors: {}, backgrounds: [], favicons: [] },
};

for (const target of targets) {
  const url = `${baseUrl}${target.path}`;

  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await prepare(desktopPage);
  await desktopPage.screenshot({ path: path.join(designDir, `${target.slug}-desktop.png`), fullPage: true });
  const desktop = await inspectDesktop(desktopPage);

  await desktopPage.evaluate(() => scrollTo(0, 300)).catch(() => {});
  await desktopPage.waitForTimeout(500);
  const headerScrolled = await desktopPage.evaluate(() => {
    const el = document.querySelector("#SITE_HEADER") || document.querySelector("header");
    if (!el) return null;
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      rect: {
        x: Math.round(rect.x),
        y: Math.round(rect.y + scrollY),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
      },
      backgroundColor: cs.backgroundColor,
      boxShadow: cs.boxShadow,
      position: cs.position,
      transform: cs.transform,
      transition: cs.transition,
    };
  });
  await desktopContext.close();

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 1000 },
    isMobile: true,
    deviceScaleFactor: 2,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await prepare(mobilePage);
  await mobilePage.screenshot({ path: path.join(designDir, `${target.slug}-mobile.png`), fullPage: true });
  const mobile = await inspectMobile(mobilePage);
  await mobileContext.close();

  extraction.pages.push({ ...target, url, desktop, mobile, behavior: { headerScrolled } });
  extraction.global.assets.push(
    ...desktop.images.map((image) => ({
      page: target.slug,
      type: "image",
      src: image.src,
      alt: image.alt,
      width: image.width,
      height: image.height,
    })),
  );
  extraction.global.backgrounds.push(...desktop.backgrounds.map((background) => ({ page: target.slug, ...background })));
  for (const [font, count] of Object.entries(desktop.fontCounts)) {
    extraction.global.fonts[font] = (extraction.global.fonts[font] || 0) + count;
  }
  for (const [color, count] of Object.entries(desktop.colorCounts)) {
    extraction.global.colors[color] = (extraction.global.colors[color] || 0) + count;
  }
  extraction.global.favicons.push(...desktop.favicons);
  console.log(`inspected ${target.slug}`);
}

await browser.close();

extraction.global.assets = uniqBy(extraction.global.assets, (asset) => asset.src);
extraction.global.favicons = uniqBy(extraction.global.favicons, (favicon) => favicon.href);
await fs.writeFile(path.join(researchDir, "mvf-extraction.json"), `${JSON.stringify(extraction, null, 2)}\n`);

console.log(`saved ${extraction.pages.length} pages`);
console.log(`saved ${extraction.global.assets.length} unique image records`);
