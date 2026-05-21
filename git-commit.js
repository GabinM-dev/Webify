const { execSync } = require('child_process');
const fs = require('fs');
const cwd = 'd:/Gabin/Webify';
const outputPath = 'd:/Gabin/Webify/git-commit-output.txt';
try {
  const cmd = [`git add artifacts/webify/src/components/Portfolio.tsx`,
               `git add artifacts/webify/src/components/Counters.tsx`,
               `git add artifacts/webify/src/components/Testimonials.tsx`,
               `git commit -m "Update Webify content sections and remove old testimonials/services copy"`,
               `git push`].join(' && ');
  const result = execSync(cmd, { cwd, encoding: 'utf8' });
  fs.writeFileSync(outputPath, `SUCCESS\n${result}`, 'utf8');
} catch (error) {
  fs.writeFileSync(outputPath, `ERROR\n${error.message}\n${error.stdout || ''}\n${error.stderr || ''}`, 'utf8');
  process.exit(1);
}
