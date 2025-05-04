import React from 'react'
import './login.css';

const login = (props) => {
  return (
    <div>
      <button className="btn" onClick={() => props.whatlog(true)}>Login</button>
    </div>
  )
}

export default login
