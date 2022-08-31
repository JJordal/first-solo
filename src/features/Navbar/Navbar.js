import React from 'react'
import './Navbar.css'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <Link className='logo' to='/'>
          <h2>Josh Jordal</h2>
        </Link>
        <div className='links'>
          <NavLink className='link' to='/'><FontAwesomeIcon icon={faHome} /></NavLink>
          <NavLink className='link' to='projects'><FontAwesomeIcon icon={faCode} /></NavLink>
          <NavLink className='link' to='contact'><FontAwesomeIcon icon={faEnvelope} /></NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}


