import React from 'react'
import '../ScoreCard.css'

export const ScoreCard = ({score, name}) => {
  const startagain =()=>{
   window.location.reload();   
  }
  return (
    <>
    <div className='card' style={{display:'flex', flexDirection:'column'}}>
        <div className="score-container">
                <h4 className='name'>Name:{name}</h4>
                <h4 className='topic'>General Knowledge</h4>
                   <h2>SCORE:{score}/10</h2>
    
             </div>
      
    </div>
    <button style={{width:'100%', background:'green', marginTop:24}} onClick={startagain}>Start Again</button>
    </>
  )
}


