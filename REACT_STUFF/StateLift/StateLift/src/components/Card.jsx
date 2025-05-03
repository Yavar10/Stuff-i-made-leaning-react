import React from 'react'

const Card = (props) => {
return (
    <div>
        <div>
            <p>Inside card hu {props.name} in {props.title}</p>
            <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        </div>
    </div>
)
}

export default Card