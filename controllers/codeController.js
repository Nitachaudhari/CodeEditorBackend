const runPython = require('../utils/runPython');

const runPythonCode = async (req, res) => {
  const { code, input } = req.body;
  try {
    const result = await runPython(code, input);
    res.json(result);
  } catch (err) {
    res.json({ error: 'Execution failed' });
  }
};

module.exports = { runPythonCode };
