const fs = require('fs');
const path = require('path');

const root = process.cwd();
const assetsDir = path.join(root, 'app', 'assets');

const ignoredDirs = new Set(['.git', 'node_modules', 'build', '.wrangler']);
const textExtensions = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.md', '.mdx', '.css', '.json', '.cjs', '.mjs', '.toml', '.html', '.txt', '.svg'
]);

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) continue;
      walk(fullPath, out);
      continue;
    }
    out.push(fullPath);
  }
  return out;
}

function readTextFiles(files) {
  const values = [];
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!textExtensions.has(ext)) continue;

    // Skip searching inside assets themselves to avoid self-matches.
    if (file.startsWith(assetsDir + path.sep)) continue;

    try {
      values.push(fs.readFileSync(file, 'utf8'));
    } catch {
      // Ignore unreadable files.
    }
  }
  return values.join('\n');
}

function getAssetFiles() {
  if (!fs.existsSync(assetsDir)) return [];
  return walk(assetsDir).filter(file => fs.statSync(file).isFile());
}

function toRelative(filePath) {
  return path.relative(root, filePath).split(path.sep).join('/');
}

const allFiles = walk(root);
const searchableText = readTextFiles(allFiles);
const assetFiles = getAssetFiles();

const unused = assetFiles.filter(file => !searchableText.includes(path.basename(file)));

console.log(`Total assets: ${assetFiles.length}`);
console.log(`Unused assets: ${unused.length}`);

if (unused.length) {
  console.log('\nUnused asset files:');
  for (const file of unused) {
    console.log(`- ${toRelative(file)}`);
  }
}

if (process.argv.includes('--delete') && unused.length) {
  for (const file of unused) {
    fs.unlinkSync(file);
  }
  console.log(`\nDeleted ${unused.length} unused assets.`);
}
