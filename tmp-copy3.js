const fs = require('fs');
const path = require('path');
const src = path.resolve('C:/Users/brint/Downloads/aero-logbook.png');
const destDir = path.resolve('d:/Gabin/Webify/artifacts/webify/public/images');
const dest = path.join(destDir, 'aero-logbook.png');
const resultFile = path.resolve('d:/Gabin/Webify/.tmp-copy3-result.json');
const result = { src, dest, srcExists: false, destDirExists: false, copied: false, error: null };
try {
  result.srcExists = fs.existsSync(src);
  result.destDirExists = fs.existsSync(destDir);
  if (!result.destDirExists) {
    fs.mkdirSync(destDir, { recursive: true });
    result.destDirExists = true;
  }
  if (result.srcExists) {
    fs.copyFileSync(src, dest);
    result.copied = fs.existsSync(dest);
  }
} catch (error) {
  result.error = error.message;
}
fs.writeFileSync(resultFile, JSON.stringify(result, null, 2));
