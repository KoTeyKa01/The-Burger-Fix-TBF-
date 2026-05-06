import React, { useState } from 'react'
import burgerLogo from '../../assets/img/burgerLogo.png'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import LocationModel from '../LocationModel/LocationModel'


const Header = () => {
  const navigate = useNavigate()
  const [showLocation, setShowLocation] = useState(false)

  

  return (
    <div className='header'>
      <div>
        <img className='burgerlogo' onClick={() => navigate("/")} src={burgerLogo} alt="" />
      </div>
      <ul>
        <li><a onClick={() => navigate('/menu')}>Menu</a></li>
        <li><a onClick={() => navigate('/')} href="#aboutUs">About</a> </li>
        <li><a onClick={(e) => { e.preventDefault(); setShowLocation(true) }} href="#">Location</a></li>
        <li><a href="#footer">Contacts</a></li>
      </ul>
      <button id='btn' onClick={() => navigate('/menu')}>Order Online</button>
    
      {showLocation && <LocationModel onClose={() => setShowLocation(false)} />}
    </div>
  )
}


export default Header