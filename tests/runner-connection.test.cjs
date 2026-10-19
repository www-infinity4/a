const { execSync } = require('child_process');

// Simple sanity check that the runner can execute a Node command.
execSync('node -e "console.log(\'runner ok\')"', { stdio: 'inherit' });
process.exit(0);
