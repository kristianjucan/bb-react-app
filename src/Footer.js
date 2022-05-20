import React from 'react'
import { Link } from 'react-router-dom'
import betterBuy from '../src/images/better_buy-transparent.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <Link to='/'><img id='logo' src={betterBuy} alt='logo'/> </Link>
      <Link to='/contact' id='dissapear'>Contact</Link>
      <Link to='/about' id='dissapear'>About Us</Link>
    </div>
  )
}

export default Footer