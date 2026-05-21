const { execSync } = require('child_process');
const fs = require('fs');
const cwd = 'd:/Gabin/Webify';
const out = 'd:/Gabin/Webify/git-push-helper-output.txt';
try {
  const cmds = [
    'git status --short --branch',
    'git add artifacts/webify/vite.config.ts',
    'git commit -m "Disable sourcemaps for Vercel"',
    'git push',
  ];
  const result = execSync(cmds.join(' && '), { cwd, encoding: 'utf8' });
  fs.writeFileSync(out, `SUCCESS\n${result}`, 'utf8');
} catch (err) {
  const msg = err.message + '\n' + (err.stdout || '') + '\n' + (err.stderr || '');
  fs.writeFileSync(out, `ERROR\n${msg}`, 'utf8');
  process.exit(1);
}
