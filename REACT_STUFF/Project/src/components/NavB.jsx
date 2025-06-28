import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavB.css'
const NavB = () => {
  return (
    <div className="flex flex-row justify-between px-[5px] w-[100vh] ">
        <div>GOON BAR</div>
      <div className='flex flex-row justify-between px-[5px] w-[50vh]'>
    <div><NavLink to="/">Home</NavLink>
</div>
    <div><NavLink to="/PSlice">Paste</NavLink>
</div>
    <div><NavLink to="/PSlice/:id">View Paste</NavLink>
</div>
      </div>
      
    </div>
  )
}

export default NavB
