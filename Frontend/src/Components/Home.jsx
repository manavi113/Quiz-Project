import React, { useState } from 'react';

export const Home = ({startQuiz}) =>{
    const[name, setname] = useState('');
      const Handlesubmit=(e)=>{
       e.preventDefault(); 
        if(name){
        startQuiz(name);
      }
    }
     return(
    
<div className='container'>
<h1>Welcome to quiz Center</h1>
             <div className="intro">
                 
        <div className="form1">
         <form  onSubmit={Handlesubmit}>
            <h4>Enter Your Name</h4>
            <input type="text" onChange={(e) => setname(e.target.value)} value={name}/>
            <h4>Enter Your Preffered Topic For Quiz</h4>
            {/* <input type="text" /> */}
            <select>
                <option>General Knowledge</option>
                {/* <option>Geography</option> */}
            </select>
            <button type='submit'>Start Quiz</button>
        </form>
        
         </div>
         <div className='info'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/223/175/original/good-luck-flicker-exposure-colorful-text-on-black-background-free-video.jpg" alt="" />
    </div>
        <div className='image'>
        <img src="https://t4.ftcdn.net/jpg/03/10/40/41/360_F_310404162_SoQ3pGc5ctHO3B40f3YM2tnwWrV4XFlq.jpg" alt="" />
        </div>
    </div>
     
</div>
    )
}