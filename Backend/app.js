// const express= require('express')
// const app = express()
// const cors = require('cors');
// const questions = require('./question');
// const port = 7000
// app.use(cors());
// app.use(express.json());

// app.get('/api/question', (req, res) => {
//   res.json(questions);
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
const express = require('express');
const cors = require('cors');
const questions = require('./question');
const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

app.get('/api/question', (req, res) => {
    const shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, 10); // Select only the first 10 questions
    res.json(selectedQuestions);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const questions = require('./question');
// const app = express();
// const port = 7000;

// app.use(cors());
// app.use(express.json());

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// app.get('/api/question', (req, res) => {
//     const shuffledQuestions = [...questions];
//     shuffleArray(shuffledQuestions);
//     const selectedQuestions = shuffledQuestions.slice(0, 10); // Select only the first 10 questions
//     res.json(selectedQuestions);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });