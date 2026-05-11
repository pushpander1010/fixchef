#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const assetsDir = path.join(__dirname, '../.open-next/assets');

// Files to copy from public to .open-next/assets
const filesToCopy = ['sitemap.xml', 'robots.txt'];

// Ensure assets directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Copy files
filesToCopy.forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(assetsDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file} to .open-next/assets`);
  } else {
    console.warn(`⚠ ${file} not found in public directory`);
  }
});

console.log('✓ Public files copied successfully');
