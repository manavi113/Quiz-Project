



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Question = require('./question'); // Import the Question model
const app = express();
const port = 7000;

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Quizes', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
// })
mongoose.connect('mongodb+srv://srivastavamanavi168:ManaviS@cluster0.tdq1t.mongodb.net/Quizes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use(cors());
app.use(express.json());

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get questions from MongoDB
app.get('/api/question', async (req, res) => {
    try {
        const questions = await Question.find(); // Fetch all questions
        if (!questions.length) {
            return res.status(404).json({ message: 'No questions found' });
        }
        const shuffledQuestions = [...questions];
        shuffleArray(shuffledQuestions);
        const selectedQuestions = shuffledQuestions.slice(0, 10); // Select only the first 10 questions
        console.log(selectedQuestions);
        res.json(selectedQuestions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Error fetching questions' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
 