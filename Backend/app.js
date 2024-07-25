const express= require('express')
const app = express()
const cors = require('cors');
const questions = require('./question');
const port = 7000
app.use(cors());
app.use(express.json());

app.get('/api/question', (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});