import React from 'react'
import '../ScoreCard.css'

export const ScoreCard = ({score, name}) => {
  return (
    <div className='card'>
        <div className="score-container">
                <h4>Name:{name}</h4>
                <h4 className='topic'>General Knowledge</h4>
                   <h2>SCORE:{score}</h2>
    
             </div>
      
    </div>
  )
}


