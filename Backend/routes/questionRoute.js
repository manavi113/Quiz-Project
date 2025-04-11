const express = require('express');
const router = express.Router();
const Question = require('../model/question');
 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
 
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    if (!questions.length) {
      return res.status(404).json({ message: 'No questions found' });
    }

    const shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, 10);

    res.json(selectedQuestions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

module.exports = router;
