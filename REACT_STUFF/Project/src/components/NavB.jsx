import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavB.css'
const NavB = () => {
  return (
    
      <div className=' flex flex-row justify-between min-w-[650px] px-[5px] w-[50vh]'>
    <div><a href="/">
    <h1>
    Home
    </h1>
    </a>
</div>
    <div><NavLink to="/PSlice">
    <h1>
    Paste
    </h1>
    </NavLink>
</div>
  {/*   <div><NavLink to="/PSlice/:id">View Paste</NavLink>
</div> */}
      </div>
      

  )
}

export default NavB
