



import React, { useState } from 'react'
import { Quiz } from './Quiz';
import { Home } from './Home';

const QuizApp = () => {
  
  const[Quizstarted, setQuiz] = useState(false);
const[name, setname] = useState('');
 

const startQuiz = (enteredname) =>{
setname(enteredname);
setQuiz(true);

};


  return (
    Quizstarted?(<Quiz name={name}/> ):(<Home startQuiz ={startQuiz}/>)
  );
};

export default QuizApp
