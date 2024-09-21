




const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    question: { type: String, required: true },
    choices: { type: [String], required: true }, // Array of choices
    correctAnswer: { type: String, required: true } // Correct answer for the question
});

const Question = mongoose.model('Question', questionSchema); // Ensure collection name matches
module.exports = Question;