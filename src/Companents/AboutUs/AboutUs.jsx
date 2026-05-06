import React from 'react'
import './AboutUs.scss'
import greenStars from "../../assets/img/greenStars.svg"
import redUnderLine from "../../assets/img/radline.svg"
import blueLines from "../../assets/img/blueLines.svg"
import yellowLinesWith from "../../assets/img/yellowlineWith.svg"

const AboutUs = () => {
  return (
    <div className='aboutUsContainer' id='aboutUs'>
        <img src={yellowLinesWith} alt="" className='yellowLinesWith'/>
        <img src={greenStars} className='doubleStars' alt="" />
      <div className="FAQ">
        <img src={blueLines} alt="" className='bueLines'/>
        <div className='heading'>
          <h2>About our burgers</h2>
          <img src={redUnderLine} alt=""  className='redUnderLine'/>
        </div>
        <div className='paragraph'>
          <p>
          We're passionate about serving up the juiciest, most delicious burgers you've ever tasted. We use only fresh, never-frozen beef that's handcrafted and cooked to perfection on a flat-top grill. We also offer vegetarian and vegan options that are just as tasty and satisfying as our meat-based burgers. We top our burgers with only the freshest and most flavorful ingredients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs