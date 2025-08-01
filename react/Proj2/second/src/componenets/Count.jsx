import React, { useState } from 'react'
import './Count.css'


const Count = () => {
    const[count, setCount] = useState(0)
  return (
    <div className='count'>
      <p id='para'>
        You have clicked the button {count} times
      </p>
      <button id='btn' onClick={()=>{
        setCount(count + 1)
      }} >Cllick Me</button>
    </div>
  )
}

export default Count

