import React from 'react'
import './Card.scss'

function Card({ item, onAddToCart }) {
  const handleAdd = () => {
    if (onAddToCart) onAddToCart(item)
  }

  return (
    <div className='general' onClick={handleAdd}>
      <div className="card">
        <p className="price">${item.price}</p>
        {item.spicy && <span className="spicy-badge">🔥</span>}
        <div
          className="img-wrapper"
          style={{ '--fallback-color': item.color }}
        >
          <img
            src={item.image}
            alt={item.name}
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('no-img')
            }}
          />
          <div className="img-fallback">{item.name[0]}</div>
        </div>
        <div className="add-btn">+ Add</div>
      </div>
      <h4>{item.name}</h4>
    </div>
  )
}

export default Card