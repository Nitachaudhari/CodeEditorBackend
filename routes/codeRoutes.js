const express = require('express');
const { runPythonCode } = require('../controllers/codeController');
const router = express.Router();

router.post('/', runPythonCode);

module.exports = router;
