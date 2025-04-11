




const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    question: { type: String, required: true },
    choices: { type: [String], required: true },  
    correctAnswer: { type: String, required: true } 
});

const Question = mongoose.model('Question', questionSchema); 
module.exports = Question;