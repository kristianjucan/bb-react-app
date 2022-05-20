import React from 'react'
import './About.css'
import aboutUs from '../images/aboutUs.jpg'
import { Link } from 'react-router-dom'
import betterBuy from '../images/better_buy-transparent.png'



export default function About(props) {
  
  
  return (

    <div>
      
      
  
    <div className='aboutUs'>


      <div className='aboutText'>
        <h3>About us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta ante neque, sit amet imperdiet dolor facilisis vel. Praesent a convallis ipsum, non cursus magna. Morbi a lectus at ante congue consectetur et sit amet tellus. Curabitur faucibus mauris nec mauris aliquam, vitae consequat elit accumsan. Sed et viverra magna. Curabitur tellus lorem, congue in ipsum et, tincidunt porta ex. Phasellus vitae nunc risus. Sed accumsan risus at porta laoreet. Donec eu metus iaculis, suscipit metus a, interdum nisi. Nam consequat tincidunt risus a finibus. Sed vitae nibh lectus. Ut nec metus eu urna finibus elementum vitae non arcu. Nunc iaculis interdum nisl sed sollicitudin. Maecenas pharetra id leo id luctus. </p>
      </div>

      <div className='aboutImage'>
        <img alt='message bubble' src={aboutUs}/>
      </div>
    </div>
    </div>
  )
}
