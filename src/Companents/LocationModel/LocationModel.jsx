import React from 'react'
import './LocationModel.scss'
import { createPortal } from 'react-dom'

const LocationModel = ({ onClose }) => {
  return createPortal(
    <div className="model-overlay" onClick={onClose}>
      <div className="model-box" onClick={e => e.stopPropagation()}>
        <button className="model-close" onClick={onClose}>✕</button>
        <h2>📍 Find Us</h2>
        <p className="model-address">123 Burger Street, Food City, FC 10001</p>
        <div className="model-map">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.985!3d40.758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjgiTiA3M8KwNTknMDYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="model-info">
          <div className="model-info-item">
            <span>🕐</span>
            <div>
              <strong>Hours</strong>
              <p>Mon–Fri: 10am – 10pm</p>
              <p>Sat–Sun: 11am – 11pm</p>
            </div>
          </div>
          <div className="model-info-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+* (***) ***-****</p>
            </div>
          </div>
        </div>
      </div>
    </div> , 
    document.body  // renders directly on body, escapes all stacking contexts, making it outside normal DOM
    )
}

export default LocationModel