const { copyFileSync, writeFileSync } = require('fs');
const src = 'C:\Users\brint\Downloads\aero-logbook.png';
const dst = 'd:\Gabin\Webify\artifacts\webify\public\images\aero-logbook.png';
const logPath = 'd:\Gabin\Webify\copy-aero-logbook.log';
try {
  copyFileSync(src, dst);
  writeFileSync(logPath, `COPIED ${dst}\n`, 'utf8');
  console.log('COPIED', dst);
} catch (error) {
  writeFileSync(logPath, `COPY_FAILED ${error && error.message}\n`, 'utf8');
  console.error('COPY_FAILED', error && error.message);
  process.exit(1);
}
