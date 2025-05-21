const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/run', (req, res) => {
  const { code, input } = req.body;
  const filename = 'main.py';

  // Save code to file
  fs.writeFileSync(filename, code);

  // Run code with input using child_process
  const process = exec(`python3 ${filename}`, (err, stdout, stderr) => {
    if (err) return res.json({ error: stderr });
    res.json({ output: stdout });
  });

  // Pass user input
  if (input) {
    process.stdin.write(input);
    process.stdin.end();
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
