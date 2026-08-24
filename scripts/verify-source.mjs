import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function read(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function collectFiles(directory) {
  const absolute = path.join(root, directory);
  const entries = await readdir(absolute, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(relative)));
    else files.push(relative);
  }

  return files;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const srcFiles = (await collectFiles("src")).filter((file) => /\.(jsx|js|css)$/.test(file));
const src = (await Promise.all(srcFiles.map(read))).join("\n");
const index = await read("index.html");
const privacy = await read("public/privacy.html");
const footer = await read("src/components/Footer.jsx");
const navbar = await read("src/components/Navbar.jsx");

for (const id of ["top", "about", "academics", "admissions", "campus-life", "contact"]) {
  assert(src.includes(`id=\"${id}\"`), `Missing navigation target: #${id}`);
}

assert(!src.includes("framer-motion"), "framer-motion import found; use motion/react only.");
assert(src.includes('from "motion/react"'), "motion/react is not used in the application.");
assert(src.includes("prefers-reduced-motion"), "Reduced-motion CSS handling is missing.");
assert(!src.includes("Sample family testimonial"), "Sample family testimonial text found.");
assert(!src.includes("Sample student testimonial"), "Sample student testimonial text found.");
assert(!src.includes("Privacy policy — to be added"), "Placeholder privacy-policy text found.");
assert(!/href=\"#\"/.test(src), "Empty hash link found.");

assert(index.includes('name="robots" content="noindex, nofollow, noarchive"'), "Preview noindex directive is missing.");
assert(index.includes('"@type": "School"'), "School structured data is missing.");
assert(index.includes("mkjchildrenschool@gmail.com"), "Verified school email is missing from metadata.");

assert(footer.includes('href="/privacy.html"'), "Footer privacy-policy link is missing.");
assert(privacy.includes("MKJ Children Upper Primary School"), "Privacy policy school identity is missing.");
assert(privacy.includes("does not store" ) || privacy.includes("does not send information"), "Privacy policy does not explain enquiry handling.");

assert(navbar.includes('event.key === "Escape"'), "Mobile navigation Escape handling is missing.");
assert(navbar.includes('aria-modal="true"'), "Mobile navigation modal semantics are missing.");

console.log(`Source verification passed across ${srcFiles.length} source files.`);
