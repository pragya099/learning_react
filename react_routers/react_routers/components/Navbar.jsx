import React from 'react'
import Home from './Home'
import { NavLink } from 'react-router-dom'

import Dashboard from './Dashboard'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/'  className={({isActive})=> isActive? "active-link":""}     >Home </NavLink>
            {/* <a href='/'>Home</a> */}
        </li>
        <li>   
             <NavLink to='/about' className={({isActive})=> isActive? "active-link":""}    >About </NavLink>     
            {/* <a href='/about'>About</a> */}
        </li>
        <li>
              <NavLink to='/dashboard' className={({isActive})=> isActive? "active-link":""}    >Dashboard</NavLink>
            {/* <a href='./dashboard'>Dashboard</a> */}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
