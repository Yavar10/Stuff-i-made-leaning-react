


import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function clk()
  {
    setCount(count+1)
  }
  return (
   <div>
    <button onClick={clk}>
      GOOON
    </button>
    <div className='counter'>
    The Goon counter:{count}
    </div>
   </div>
  )
}

export default App
