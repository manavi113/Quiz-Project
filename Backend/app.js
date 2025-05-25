 
 










const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const questionRoutes = require('./routes/questionRoute');
 const path = require('path');
 

 


dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

 
connectDB();

app.use(cors());
app.use(express.json());

 
app.use('/api/question', questionRoutes);
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// React/SPA ke liye fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});


app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
