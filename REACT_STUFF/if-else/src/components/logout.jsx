import React from 'react'
import './login.css';
const logout = (props) => {
  return (
    <div className='container'>
      <button className='btn' onClick={()=>props.whatlog(false)}>Logout</button>
    </div>
  )
}

export default logout
