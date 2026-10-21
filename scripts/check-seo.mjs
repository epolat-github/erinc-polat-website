import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Run against a running dev/production server: npm run test:seo -- http://localhost:3000
const base = new URL(process.argv[2] ?? "http://localhost:3000");
const origin = "https://www.erincpolat.com";
const locales = ["en", "tr"];
const slugsFor = (locale) => [...readFileSync(new URL(`../src/data/projects.${locale}.ts`, import.meta.url), "utf8")
    .matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const slugs = slugsFor("en");
assert.deepEqual(slugsFor("tr"), slugs, "Project translations must have matching slugs");
const paths = locales.flatMap((locale) => ["", "/projects", ...slugs.map((slug) => `/projects/${slug}`)]
    .map((path) => `/${locale}${path}`));

function decode(value) {
    return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
        const named = { "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">" };
        if (named[entity]) return named[entity];
        return String.fromCodePoint(entity.startsWith("&#x")
            ? Number.parseInt(entity.slice(3, -1), 16) : Number(entity.slice(2, -1)));
    });
}

function attributes(tag) {
    return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)]
        .map((match) => [match[1].toLowerCase(), decode(match[2])]));
}

async function get(path) {
    return fetch(new URL(path, base), {
        headers: { "User-Agent": "Googlebot" },
        redirect: "manual",
        signal: AbortSignal.timeout(60000),
    });
}

const titles = new Set();
const descriptions = new Set();
const images = new Set();
for (const path of paths) {
    const response = await get(path);
    assert.equal(response.status, 200, `${path}: HTTP`);
    assert(!/hreflang=/i.test(response.headers.get("link") ?? ""), `${path}: conflicting HTTP hreflang`);
    const html = (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
    const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const meta = (key) => metas.find((tag) => (tag.name ?? tag.property) === key)?.content;
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const anchors = [...html.matchAll(/<a\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const [locale, ...rest] = path.slice(1).split("/");
    const suffix = rest.length ? `/${rest.join("/")}` : "";
    const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    assert(title && !titles.has(title), `${path}: unique title`);
    titles.add(title);
    assert(meta("description") && !descriptions.has(meta("description")), `${path}: unique description`);
    descriptions.add(meta("description"));
    assert.equal(attributes(html.match(/<html\b[^>]*>/i)?.[0] ?? "").lang, locale, `${path}: lang`);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${path}: single H1`);
    assert.equal((html.match(/<main\b/gi) ?? []).length, 1, `${path}: single main`);
    assert(!/noindex/.test(meta("robots") ?? ""), `${path}: indexable`);
    assert.deepEqual(links.filter((link) => link.rel === "canonical").map((link) => link.href),
        [origin + path], `${path}: canonical`);
    const variants = links.filter((link) => link.hreflang);
    assert.equal(variants.length, 3, `${path}: language variant count`);
    for (const lang of [...locales, "x-default"]) {
        assert.equal(variants.find((link) => link.hreflang === lang)?.href,
            `${origin}/${lang === "x-default" ? "en" : lang}${suffix}`, `${path}: ${lang} target`);
    }
    for (const key of ["og:title", "twitter:title"]) assert.equal(meta(key), title, `${path}: ${key}`);
    for (const key of ["og:description", "twitter:description"])
        assert.equal(meta(key), meta("description"), `${path}: ${key}`);
    assert.equal(meta("og:url"), origin + path, `${path}: OG URL`);
    assert.equal(meta("og:locale"), locale === "tr" ? "tr_TR" : "en_US", `${path}: OG locale`);
    assert.equal(meta("og:type"), "website", `${path}: OG type`);
    assert.equal(meta("twitter:card"), "summary_large_image", `${path}: Twitter card`);
    assert.equal(meta("og:image"), meta("twitter:image"), `${path}: matching share images`);
    assert(meta("og:image:alt"), `${path}: image alt`);
    assert(Number(meta("og:image:width")) > 0 && Number(meta("og:image:height")) > 0, `${path}: image dimensions`);
    const image = new URL(meta("og:image"));
    assert.equal(image.origin, origin, `${path}: absolute production image URL`);
    if (rest.length > 1) assert(image.pathname.startsWith(`/projects/`), `${path}: project-specific image`);
    images.add(image.pathname + image.search);
    assert(anchors.some((link) => link.href === `/${locale}`), `${path}: native home link`);
    const targetLocale = locale === "en" ? "tr" : "en";
    assert(anchors.some((link) => link.href === `/${targetLocale}${suffix}` && link.hreflang === targetLocale),
        `${path}: native language link retains pathname`);
    if (!suffix) {
        for (const target of ["/erinc-polat-resume.pdf", "https://github.com/epolat-github",
            "https://www.instagram.com/erincpolat", "https://www.linkedin.com/in/erinç-polat-4bb7bb192"]) {
            assert(anchors.some((link) => decodeURI(link.href) === target), `${path}: native contact link ${target}`);
        }
    }
}

const sitemap = await get("/sitemap.xml");
assert.equal(sitemap.status, 200, "Sitemap HTTP");
const xml = await sitemap.text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
assert.deepEqual(entries.map((entry) => entry.match(/<loc>([^<]+)<\/loc>/)?.[1]).sort(),
    paths.map((path) => origin + path).sort(), "Sitemap contains exactly the portfolio canonical URLs");
for (const entry of entries) {
    const path = new URL(entry.match(/<loc>([^<]+)<\/loc>/)[1]).pathname;
    const suffix = path.replace(/^\/(en|tr)/, "");
    const alternates = [...entry.matchAll(/<xhtml:link\b[^>]*>/g)].map((match) => attributes(match[0]));
    for (const lang of [...locales, "x-default"]) {
        assert.equal(alternates.find((link) => link.hreflang === lang)?.href,
            `${origin}/${lang === "x-default" ? "en" : lang}${suffix}`, `${path}: sitemap ${lang}`);
    }
}
const robots = await get("/robots.txt");
assert.equal(robots.status, 200, "Robots HTTP");
const robotsText = await robots.text();
assert(robotsText.includes(`Sitemap: ${origin}/sitemap.xml`), "Robots declares sitemap");
assert(!/^Disallow:\s*\/\s*$/m.test(robotsText), "Robots does not block the site");
for (const image of images) {
    const response = await get(image);
    assert.equal(response.status, 200, `Share image exists: ${image}`);
    assert(response.headers.get("content-type")?.startsWith("image/"), `Share image MIME: ${image}`);
    await response.arrayBuffer();
}
for (const locale of locales) {
    const response = await get(`/${locale}/projects/seo-check-nonexistent`);
    assert.equal(response.status, 404, `${locale}: missing project stays 404`);
    assert(/name="robots" content="noindex"/.test(await response.text()), `${locale}: 404 noindex`);
}
console.log(`SEO checks passed: ${paths.length} pages, ${images.size} share images, sitemap, robots and missing projects.`);
