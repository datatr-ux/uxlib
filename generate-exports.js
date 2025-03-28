import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

const pkgPath = path.resolve('package.json');
const distPath = 'dist';
const sourcePath = 'src/components/ui';

const packageJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

// Start with base exports (keep yours)
const baseExports = {
  ".": {
    "import": "./dist/index.js",
    "require": "./dist/index.umd.cjs"
  },
  "./style.css": "./dist/style.css"
};

// Generate file-based exports
const componentFiles = glob.sync(`${sourcePath}/*.tsx`);

for (const file of componentFiles) {
  const filename = path.basename(file, path.extname(file)); // "select"
  const exportPath = `./components/${filename}`;
  const filePath = `./${path
    .join(distPath, 'components/ui', `${filename}.js`)
    .replace(/\\/g, '/')}`; // for Windows support

  baseExports[exportPath] = { import: filePath };
}

// Optional: also include hooks
const hookFiles = glob.sync('src/hooks/*.ts');

for (const file of hookFiles) {
  const filename = path.basename(file, path.extname(file)); // "use-toast"
  const exportPath = `./hooks/${filename}`;
  const filePath = `./${path
    .join(distPath, 'hooks', `${filename}.js`)
    .replace(/\\/g, '/')}`;

  baseExports[exportPath] = { import: filePath };
}

// Write it back
packageJson.exports = baseExports;

fs.writeFileSync(pkgPath, JSON.stringify(packageJson, null, 2));

console.log('✅ package.json exports updated!');
