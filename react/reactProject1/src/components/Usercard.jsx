import React from 'react'

const Usercard = (props) => {
  return (
    <div>
    <h1>
      Hell YEAH
      {props.name}
      <br />
      {props.dih}
      <br />
      <img height="250" width="450" src="src\assets\chainsaw-man-anime-himeno-voice-actor.jpg" alt="" />
    </h1>
   </div>
  )
}

export default Usercard
