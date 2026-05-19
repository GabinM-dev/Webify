const fs = require('fs');
const path = require('path');
const src = path.resolve('C:/Users/brint/Downloads/aero-logbook.png');
const destDir = path.resolve('d:/Gabin/Webify/artifacts/webify/public/images');
const dest = path.join(destDir, 'aero-logbook.png');
try {
  if (!fs.existsSync(src)) {
    console.error('SOURCE_MISSING');
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('COPIED');
  console.log(fs.existsSync(dest) ? 'DEST_EXISTS' : 'DEST_MISSING');
} catch (err) {
  console.error('ERROR', err.message);
  process.exit(1);
}
