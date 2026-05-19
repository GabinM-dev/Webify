const fs = require('fs');
const path = require('path');
const src = path.resolve('d:/Gabin/Webify/artifacts/webify/public/images/mockup-boutique.png');
const dest = path.resolve('d:/Gabin/Webify/artifacts/webify/public/images/aero-logbook.png');
const resultFile = path.resolve('d:/Gabin/Webify/.tmp-copy4-result.json');
const result = { src, dest, srcExists: false, destExists: false, copied: false, error: null };
try {
  result.srcExists = fs.existsSync(src);
  if (!result.srcExists) throw new Error('SOURCE_MISSING');
  fs.copyFileSync(src, dest);
  result.destExists = fs.existsSync(dest);
  result.copied = result.destExists;
} catch (err) {
  result.error = err.message;
}
fs.writeFileSync(resultFile, JSON.stringify(result, null, 2));
