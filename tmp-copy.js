const fs = require('fs');
const path = require('path');
const src = path.resolve('C:/Users/brint/Downloads/aero-logbook.png');
const destDir = path.resolve('d:/Gabin/Webify/artifacts/webify/public/images');
const dest = path.join(destDir, 'aero-logbook.png');
try {
  if (!fs.existsSync(src)) {
    console.error('SOURCE MISSING:', src);
    process.exit(1);
  }
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log('COPIED:', dest);
} catch (error) {
  console.error('ERROR:', error && error.message);
  process.exit(1);
}
