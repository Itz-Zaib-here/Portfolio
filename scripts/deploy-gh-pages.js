const path = require('path');
const { spawnSync } = require('child_process');

function canRunGit(env) {
  const result = spawnSync('git', ['--version'], {
    stdio: 'ignore',
    shell: false,
    env,
  });
  return result.status === 0;
}

function withGitOnPath() {
  const env = { ...process.env };

  if (canRunGit(env)) return env;

  // Common Git for Windows install locations.
  const programFiles = env.ProgramFiles || 'C:\\Program Files';
  const programFilesX86 = env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';

  const candidateDirs = [
    path.join(programFiles, 'Git', 'cmd'),
    path.join(programFiles, 'Git', 'bin'),
    path.join(programFilesX86, 'Git', 'cmd'),
    path.join(programFilesX86, 'Git', 'bin'),
  ];

  const sep = process.platform === 'win32' ? ';' : ':';
  env.PATH = `${candidateDirs.join(sep)}${sep}${env.PATH || ''}`;

  return env;
}

const dir = path.join('dist', 'my-angular-app', 'browser');
const env = withGitOnPath();

// Make sure ALL child processes (including those spawned inside gh-pages)
// inherit the corrected PATH.
process.env.PATH = env.PATH;
process.env.Path = env.PATH;

const ghpages = require('gh-pages');

if (!canRunGit(env)) {
  console.error('Git is required for deployment, but was not found on PATH.');
  console.error('Install Git for Windows, or ensure this folder is on PATH: C\\Program Files\\Git\\cmd');
  process.exit(1);
}

ghpages.publish(
  dir,
  {
    dotfiles: true,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Deployed to GitHub Pages successfully.');
  }
);
