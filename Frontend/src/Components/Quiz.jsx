
// import { useEffect, useState } from 'react';
// import '../Quiz.css';
// import { ScoreCard } from './ScoreCard';
// // import questions from '../../../Backend/question';
// // import '../ScoreCard.css'
// export const Quiz = ({name}) =>{


//   // const questions = [
//   //   { id: 1, question: "What is the capital of France?", choices: ["A. Paris", "B. New York", "C. London", "D. Rome"], correctAnswer: "A" },
//   //   { id: 2, question: "What is the capital of Germany?", choices: ["A. Berlin", "B. Madrid", "C. Vienna", "D. Warsaw"], correctAnswer: "A" },
//   //   { id: 3, question: "What is the capital of Italy?", choices: ["A. Paris", "B. Rome", "C. Madrid", "D. Athens"], correctAnswer: "B" },
//   //   { id: 4, question: "What is the capital of Spain?", choices: ["A. Lisbon", "B. Madrid", "C. Berlin", "D. Rome"], correctAnswer: "B" },
//   // ];

//   const [questions, setQuestions] = useState([]);
// const[userans, setans] = useState([]);
// const [quesindex, setindex] = useState(0);
//     const[quizstarts, setquiz] = useState(false);
//     const[timeleft, settimeleft] = useState(70);
//     const[scorecard, setscorecard] = useState(false);
//     const[score, setscore] = useState(0);
    
//     useEffect(() => {
//       fetch('http://localhost:7000/api/question')
//           .then(response => response.json())
//           .then(data => {
//               setQuestions(data);
//               setans(Array(data.length).fill(null));
//           })
//           .catch(error => console.error('Error fetching questions:', error));
//   }, []);
//     const calscore=()=>{
//       let newscore =0;
//       userans.forEach((ans, index)=>{
//         if(ans == questions[index].correctAnswer){
//           newscore+=1;
//         }

//       });
//       setscore(newscore);
//       return score
//     }

//       const letstart=()=>{
//         setquiz(true);
//         settimeleft(70);
//         setscorecard(false);
//         setindex(0);
//         setans(Array(questions.length).fill(null));
//         setscore(0); 

//       }
      

//      useEffect(()=>{
//       let timer;
//       if(quizstarts && timeleft > 0){
//         timer = setInterval(() => {
//           settimeleft((prevtime)=> prevtime-1);
//         }, 1000);
//       } else {
//         if(timeleft ==0){
//           setquiz(false);
//           setscorecard(true);
//           calscore(setscore)
//         }
//       }
//       return()=>clearInterval(timer);
//      },[quizstarts,timeleft])

//      const SubmitHandle=()=>{
//       setquiz(false);
       
//       setscorecard(true);
//       calscore();
//      }
//      const answerchnge=(e)=>{
//       const newans = [...userans];
//       newans[quesindex] = e.target.value;
//       setans(newans);
//      }

//      const nextques = ()=>{
//        if(quesindex<questions.length-1){
//         setindex(prev=>prev+1);
//        } else {
//         SubmitHandle();
//        }
//      };
//     return(
//           <div>
//             {!scorecard &&(
//               <>
             
//             <div className="head">
            
//         <h1>Let's Test Your Knowledge!</h1>
//         </div>
//         <div className="info">
//           <p>NAME: {name}</p>
           
//         </div>
//         <div className='Rules'>
//            <ul>
//             <li>
//             <h5>Test will be of 10 marks</h5>
//             </li>
//             <li>
//           <h5>There will be Total 10 MCQs Questions</h5>
//           </li>
//           <li>
//           <h5>You will be given 60 seconds for the test</h5>
//           </li>
//           <li>
//           <h5>There is no Negative marking</h5>
//           </li>
//           <li>
//           <h5>You will Awarded 1 marks for correct marks and 0 for wrong answers</h5>
//           </li>
//           <li>
//           <h5>There is only one correct answer for each question</h5>
//             </li>
//            </ul>
//         </div>

//         { (!quizstarts && !scorecard) &&
//        ( <button className="start" onClick={letstart}><b>Get Started!!</b></button>)}

// <div>
// {questions[quesindex] && quizstarts && (
//             <div>
//               <h2 className='question'>{questions[quesindex].question}</h2>
//               {questions[quesindex].choices.map(choice => (
//                 <div key={choice} className='choices'>
//                   <input
//                     type="radio"
//                     name="answer"
//                     value={choice.charAt(0)}
//                     onChange={answerchnge}
//                   />
//                   <label>{choice}</label>
//                 </div>
//               ))}
//             </div>
//           )}
// </div> 

//        {/* Questions to be printed */}

//           { (quizstarts && !scorecard) && (
//             <div>
//             <h4 className='time'>TIMER:{timeleft} seconds</h4>
//             <button className='next ques' onClick={nextques}>Next-Question</button>
//             <button className='sum' onClick={SubmitHandle}>SUBMIT</button>
//             </div>  
//           )}
//           </> 
//           )}
          
//              {scorecard && <ScoreCard name={name} score={score}/>}


          
// </div>
        
//     )
// }

import { useEffect, useState } from 'react';
import '../Quiz.css';
import { ScoreCard } from './ScoreCard';

export const Quiz = ({ name }) => {
    const [questions, setQuestions] = useState([]);
    const [userans, setUserans] = useState([]);
    const [quesIndex, setQuesIndex] = useState(0);
    const [quizStarts, setQuizStarts] = useState(false);
    const [timeLeft, setTimeLeft] = useState(70);
    const [scoreCard, setScoreCard] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('http://localhost:7000/api/question')
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
                setUserans(Array(data.length).fill(null));
            })
            .catch(error => console.error('Error fetching questions:', error));
    }, []);

    const calculateScore = () => {
        let newScore = 0;
        userans.forEach((ans, index) => {
            if (ans === questions[index].correctAnswer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        return newScore; // Return the new score if needed elsewhere
    };

    const startQuiz = () => {
        setQuizStarts(true);
        setTimeLeft(70);
        setScoreCard(false);
        setQuesIndex(0);
        setUserans(Array(questions.length).fill(null));
        setScore(0);
    };

    useEffect(() => {
        let timer;
        if (quizStarts && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else {
            if (timeLeft === 0) {
                setQuizStarts(false);
                setScoreCard(true);
                calculateScore(); // Calculate score when time is up
            }
        }
        return () => clearInterval(timer);
    }, [quizStarts, timeLeft]);

    const handleSubmit = () => {
        setQuizStarts(false);
        setScoreCard(true);
        calculateScore();
    };

    const handleAnswerChange = (e) => {
        const newAns = [...userans];
        newAns[quesIndex] = e.target.value;
        setUserans(newAns);
    };

    const nextQuestion = () => {
        if (quesIndex < questions.length - 1) {
            setQuesIndex(prev => prev + 1);
        } else {
            handleSubmit(); // If it's the last question, submit directly
        }
    };

    return (
        <div>
            {!scoreCard && (
                <>
                    <div className="head">
                        <h1>Let's Test Your Knowledge!</h1>
                    </div>
                    <div className="info">
                        <p>NAME: {name}</p>
                    </div>
                    <div className='Rules'>
                        <ul>
                            <li><h5>Test will be of 10 marks</h5></li>
                            <li><h5>There will be Total 10 MCQs Questions</h5></li>
                            <li><h5>You will be given 60 seconds for the test</h5></li>
                            <li><h5>There is no Negative marking</h5></li>
                            <li><h5>You will be Awarded 1 mark for correct answers and 0 for wrong answers</h5></li>
                            <li><h5>There is only one correct answer for each question</h5></li>
                        </ul>
                    </div>

                    {!quizStarts && !scoreCard && (
                        <button className="start" onClick={startQuiz}><b>Get Started!!</b></button>
                    )}

                    <div>
                        {questions[quesIndex] && quizStarts && (
                            <div>
                                <h2 className='question'>{questions[quesIndex].question}</h2>
                                {questions[quesIndex].choices.map(choice => (
                                    <div key={choice} className='choices'>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={choice.charAt(0)} // Ensure this matches with correctAnswer format
                                            onChange={handleAnswerChange}
                                        />
                                        <label>{choice}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {quizStarts && !scoreCard && (
                        <div>
                            <h4 className='time'>TIMER: {timeLeft} seconds</h4>
                            <button className='next ques' onClick={nextQuestion}>Next Question</button>
                            <button className='sum' onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    )}
                </>
            )}
            {scoreCard && <ScoreCard name={name} score={score} />}
        </div>
    );
};
