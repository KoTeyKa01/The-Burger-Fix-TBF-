import React from 'react'
import redburger from "../../assets/img/redBurgerr.png"
import vegy from "../../assets/img/veggi.png"
import classy from "../../assets/img/classic.png"
import './DealOftheDay.scss'

const DealOftheDay = () => {
  return (
    <div id='dealoftheday' className='dealoftheday'>
        <div className='dealofthedayText'>
            <h1>Deal of the day</h1>
        </div>
        <div className='imges'>
            <div className='red'>
              <img className='beastBurger' src={redburger} alt="" />
              <div className='text'>
                <h2 className='name'>Beast burger</h2>
                <p className='price'>$14.99</p>
                Enjoy a mouthwatering burger with juicy beef, crumbled blue cheese, caramelized onions, crispy bacon, and fresh arugula, all on a toasted brioche bun. <br /> <br/> <br />
                <span>01 - OUR BEST BURGER</span>
              </div>
              <p>
              </p>
            </div>
            <div className='yellow red'>
              <img className='classy beastBurger' src={classy} alt="" />
              <div className='text'>
              <h2 className='name'>Classic Deluxe</h2>
                <p className='price'>$12.99</p>
                  Savor a handcrafted burger with beef, melted cheddar cheese, lettuce, tomatoes, pickles, red onions, and a special sauce, on a soft sesame seed bun. <br /> <br/> <br />
                  <span>02 - A TRUE CLASSIC</span>
              </div>
            </div>
            <div className='green red'>
              <img className='vegy beastBurger' src={vegy} alt="" />
              <div className='text'>
              <h2 className='name'>Veggie Beast</h2>
                <p className='price'>$13.99</p>
                Indulge in a burger made with crispy quinoa and black bean patty, melted pepper jack cheese, avocado, roasted red peppers, sprouts, on a whole wheat bun.<br /> <br/> <br />
                <span>01 - OUR VEGAN OPTION</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DealOftheDay