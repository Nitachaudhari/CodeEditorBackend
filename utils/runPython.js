const fs = require('fs');
const { exec } = require('child_process');

const runPython = (code, input) => {
  return new Promise((resolve, reject) => {
    const filename = 'main.py';
    fs.writeFileSync(filename, code);

    const process = exec(`python3 ${filename}`, (err, stdout, stderr) => {
      if (err) return resolve({ error: stderr });
      return resolve({ output: stdout });
    });

    if (input) {
      process.stdin.write(input);
      process.stdin.end();
    }
  });
};

module.exports = runPython;
