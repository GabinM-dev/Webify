const { execSync } = require('child_process');
const fs = require('fs');
const cwd = 'd:/Gabin/Webify';
const out = 'd:/Gabin/Webify/git-push-result.txt';
let result = '';
try {
  result += 'GIT STATUS:\n';
  result += execSync('git status --short --branch', { cwd, encoding: 'utf8' });
  result += '\n===ADD===\n';
  result += execSync('git add .', { cwd, encoding: 'utf8' });
  result += '\n===COMMIT===\n';
  try {
    result += execSync('git commit -m "Disable sourcemaps for Vercel"', { cwd, encoding: 'utf8' });
  } catch (err) {
    result += 'COMMIT FAILED:\n' + (err.message || '') + '\n' + (err.stdout || '') + (err.stderr || '');
  }
  result += '\n===PUSH===\n';
  try {
    result += execSync('git push', { cwd, encoding: 'utf8' });
  } catch (err) {
    result += 'PUSH FAILED:\n' + (err.message || '') + '\n' + (err.stdout || '') + (err.stderr || '');
  }
  fs.writeFileSync(out, result, 'utf8');
  console.log('DONE');
} catch (err) {
  fs.writeFileSync(out, 'SCRIPT FAILED:\n' + (err.message || '') + '\n' + (err.stdout || '') + (err.stderr || ''), 'utf8');
  console.error('ERROR');
  process.exit(1);
}
