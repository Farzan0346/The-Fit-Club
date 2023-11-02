import React from 'react'
import logo from '../../Documents/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img className="logo" src={logo} alt=''/>
      <div className="nav-links">
        <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
      </div>
      <button className='btn'>Join Now</button>
    </div>
  )
}

export default Header
