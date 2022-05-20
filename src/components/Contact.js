import React from 'react'

import './Contact.css'



export default function Contact() {
  return (
<div >



    <div className='title'>
    <h2>Contact Us</h2>
    </div>
    
    
    <div className='Contact'>
     
      
      <form>
      <div className='Form'>
        <label for='name'>Full Name: </label>
        <input type='text' id='name' size='20' />
        
        <label for='phone'>Phone Number: </label>
        <input type='text' id='phone' size='20' />

        <label for='message'>Your Message: </label>
        <input type='text' id='message' size='40' />
        

        <button>Submit</button>
        </div>
      </form>
      <div className='contactMap'>

<iframe title ='business-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1366.2492189681234!2d23.60039365828679!3d46.77478199478455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b8b%3A0xbbc601c331f148b!2sCluj-Napoca!5e0!3m2!1sro!2sro!4v1650967076664!5m2!1sro!2sro"></iframe>
</div>
      
      </div>
    </div>
  )
}
