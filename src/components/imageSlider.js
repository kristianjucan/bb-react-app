import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './imageSlider.css'
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import banner3 from '../images/banner3.png'

export default function ImageSlider () {

    const slideImages = [
        {
          url: `${banner3}` ,
          caption: 'Slide 1'
        },
        {
          url: `${banner2}`,
          caption: 'Slide 2'
        },
        {
          url: `${banner1}`,
          caption: 'Slide 3'
        },
      ];


  return (
    <div className="slideContainer">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}
