import React from 'react'
import './Delivery.scss'
import yandexEats from '../../assets/img/yandexEats.png'
import doorDash from "../../assets/img/DoorDash.png"
import express24 from '../../assets/img/express24.png'

const Delivery = () => {
  return (
    <div className='delivery'>
        <h2>
            Filling Lazy? <br /> We Deliver To You
        </h2>
        <div className='delApps'>
        <a href=""> <img src={yandexEats} alt="" /></a>
          <a href=""><img src={doorDash} alt="" /></a>
          <a href=""><img src={express24} alt="" /></a>
        </div>
    </div>
  )
}

export default Delivery