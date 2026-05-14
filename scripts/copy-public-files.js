#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../.open-next/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

console.log('Skipping static sitemap/robots copy. Dynamic app routes are the source of truth.');
