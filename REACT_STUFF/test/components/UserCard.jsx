import React from 'react'
import './UserCard.css'
import doogy from '../src/assets/1_rIkmavUeqyRySwlQdA9kKg.jpg';
const UserCard = (props) => {
  return (
    <div id='userCard'>
    <p>{props.name}</p>
    <img className="img" src={doogy} alt="dog" />
    </div>
  )
}

export default UserCard
