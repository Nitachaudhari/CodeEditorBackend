const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const codeRoutes = require('./routes/codeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/run', codeRoutes);
app.get('/test', (req, res) => {
    res.json({ message: 'CORS test success' });
  });
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
