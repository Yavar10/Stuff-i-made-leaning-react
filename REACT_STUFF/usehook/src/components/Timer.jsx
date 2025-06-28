import React, { useEffect, useState } from 'react'
function Timer() {
    
    const[secs, setSeconds]=React.useState(0);
useEffect(() => {
    const interval=setInterval(()=>
    {
        setSeconds(prev=>prev+1)
    },1000
);
    return () => {
        clearInterval(interval)
    };
}, []);


  return (
    <div>
      {secs}
    </div>
  )
}

export default Timer
