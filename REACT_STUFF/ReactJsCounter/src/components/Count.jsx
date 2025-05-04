import React from 'react'
import './count.css'
const Count = () => {
    const [count, setCount] = React.useState(60)
      const audio = new Audio('../public/nice-sound-effect-95595.mp3');
      if(count==69){
        audio.play();
      }
  
  return (
    <div className="cont">
        THE COUNTER MACHINE 
        <div className="count">
            <div>
      <h1>You have clicked me {count} times</h1>
      </div>
      <div align="center">
      <button className='btn' onClick={()=>{
        setCount(count + 1)
      }} >Click Me</button>
    </div>
    </div>
    </div>
  )
}

export default Count
