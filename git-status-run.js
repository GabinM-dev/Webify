const { execSync } = require('child_process');
const fs = require('fs');
const cwd = 'd:/Gabin/Webify';
const out = 'd:/Gabin/Webify/git-status.txt';
try {
  const status = execSync('git status --short --branch', { cwd, encoding: 'utf8' });
  fs.writeFileSync(out, status, 'utf8');
  console.log('DONE');
} catch (err) {
  fs.writeFileSync(out, err.message + '\n' + (err.stdout || '') + '\n' + (err.stderr || ''), 'utf8');
  console.error('ERROR');
  process.exit(1);
}
