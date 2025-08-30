// scripts/banner.js
// Prepend a preserved license banner with the current version.
// Usage: node scripts/banner.js src.css > build.css

const fs = require('fs');
const path = require('path');

const pkg = require(path.join(process.cwd(), 'package.json'));
const version = pkg.version;

const srcPath = process.argv[2];
if (!srcPath) {
  console.error('Usage: node scripts/banner.js <src.css>');
  process.exit(1);
}

const src = fs.readFileSync(srcPath, 'utf8');

// /*! ... */ is a preserved comment in most minifiers (incl. Lightning CSS).
const banner = `/*! defaults.css ${version} | (c) Harry Roberts, csswizardry.com | MIT */\n`;

process.stdout.write(banner + src);
