 
 










const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const questionRoutes = require('./routes/questionRoute');

dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

 
connectDB();

app.use(cors());
app.use(express.json());

 
app.use('/api/question', questionRoutes);


app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
