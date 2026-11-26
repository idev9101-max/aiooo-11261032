const fs = require('node:fs');
const path = require('node:path');

const entry = Object.freeze("I'm out of office, finally touching grass. Turns out I can only touch its embedding.");
const length = Array.from(entry).length;

if (
  length === 0 ||
  length > 160 ||
  /[\r\n]/.test(entry) ||
  entry.trim().length === 0 ||
  Buffer.from(entry, 'utf8').toString('utf8') !== entry
) {
  throw new Error('invalid entry');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), entry, 'utf8');
