import React, { useEffect, useState } from 'react'
import '../ScoreCard.css'
import {facts} from '../Facts'
export const ScoreCard = ({ score, name }) => {
  const startagain = () => {
    window.location.reload();
  };

  const [fact, setFact] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  }, []);




  const getMessage = () => {
    if (score <= 4) {
      return "😢 Better luck next time!";
    } else if (score <= 7) {
      return "🙂 Nice try!";
    } else {
      return "🎉 Woohoo! Awesome job!";
    }
  };

  return (
    <>
      <div className='card' style={{ display: 'flex', flexDirection: 'column' }}>

      <div className="did-you-know">
            <h4>💡 Did You Know?</h4>
            <p>{fact}</p>
          </div>

        <div className="score-container">
          <h4 className='name'>Name: {name}</h4>
          <h4 className='topic'>General Knowledge</h4>
           
          <h2>SCORE: {score}/10</h2>
          <h3>{getMessage()}</h3>
          <br />
          <div className="progress-bar-container">
  <div className="progress-bar" style={{ width: `${score * 10}%` }}></div>
</div>
           
        </div>
      </div>
      <button style={{ width: '50%', height: 50 ,background: 'green', marginTop: 24 }} onClick={startagain}>
        Start Again
      </button>
    </>
  );
};

