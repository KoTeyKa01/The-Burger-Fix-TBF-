import React from 'react'
import './FirstBurgers.scss'
import burger from '../../assets/img/burger.png'
// import burger from '../../assets/img/ultimate.png'
import { useEffect, useState } from 'react'


const FirstBurgers = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Scale between 1 and 2 based on scroll
      const newScale = Math.min(2, 1 + scrollTop / 500);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='firstBurger'>
        <div className='firstBurgerText'>
        <h1>The
          <span className='span1'>
           Ultimate
          </span>
           Burger Experience Awaits 
           <span className='span2'>
           You
           </span>
           </h1>
        </div>
        <img className='burgersimg' src={burger} alt="" style={{ transform: `scale(${scale})`}}/>
    </div>
  )
}

export default FirstBurgers