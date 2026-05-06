import React, { useState } from 'react'
import Card from "../../Companents/Card/Card"
import Header from '../../Companents/Header/Header'
import { menuItems } from '../../data/menuData.js'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Menu.scss'
import OrderModel from '../../Companents/OrderModel/OrderModel';

const CATEGORIES = ['all', 'burger', 'chicken', 'sides']
const LAYOUTS = ['all', 'single', 'double']

const Menu = () => {
  const [filters, setFilters] = useState({
    spicy: 'all',      // 'all' | 'spicy' | 'mild'
    category: 'all',
    layout: 'all',
    maxPrice: 20,
  })
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const [showOrder, setShowOrder] = useState(false)


  const handleAddToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const handleRemove = (id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const handleQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0)
    )
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  const filtered = menuItems.filter(item => {
    if (filters.spicy === 'spicy' && !item.spicy) return false
    if (filters.spicy === 'mild' && item.spicy) return false
    if (filters.category !== 'all' && item.category !== filters.category) return false
    if (filters.layout !== 'all' && item.layout !== filters.layout) return false
    if (item.price > filters.maxPrice) return false
    return true
  })

  const setFilter = (key, val) => setFilters(f => ({ ...f, [key]: val }))

  return (
    <>
    <div className="grnrral">
      <Header />

      <div className="page-body">

        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Filter</h3>

          <div className="filter-group">
            <label>🔥 Spice Level</label>
            <div className="pills">
              {['all', 'spicy', 'mild'].map(v => (
                <button
                  key={v}
                  className={`pill ${filters.spicy === v ? 'active' : ''}`}
                  onClick={() => setFilter('spicy', v)}
                >
                  {v === 'all' ? 'All' : v === 'spicy' ? '🌶 Spicy' : '❄️ Mild'}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>🍔 Category</label>
            <div className="pills">
              {CATEGORIES.map(v => (
                <button
                  key={v}
                  className={`pill ${filters.category === v ? 'active' : ''}`}
                  onClick={() => setFilter('category', v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>🥩 Size</label>
            <div className="pills">
              {LAYOUTS.map(v => (
                <button
                  key={v}
                  className={`pill ${filters.layout === v ? 'active' : ''}`}
                  onClick={() => setFilter('layout', v)}
                >
                  {v === 'all' ? 'All' : v === 'single' ? 'Single' : 'Double'}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>💵 Max Price: ${filters.maxPrice}</label>
            <input
              type="range"
              min={5}
              max={20}
              value={filters.maxPrice}
              onChange={e => setFilter('maxPrice', Number(e.target.value))}
              className="price-range"
            />
            <div className="range-labels"><span>$5</span><span>$20</span></div>
          </div>

          <div className="results-count">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''} found
          </div>
        </aside>

        {/* ── GRID ── */}
        <div className="menu">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <span>😢</span>
              <p>No items match your filters</p>
            </div>
          ) : (
            filtered.map(item => (
              <Card key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))
          )}
        </div>
      </div>

      {/* ── CART BUTTON ── */}
      <button className="cart-fab" onClick={() => setCartOpen(o => !o)}>
      <ShoppingCartIcon></ShoppingCartIcon>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>
 
      {/* ── CART DRAWER ── */}
      {cartOpen && (
        <div className="cart-drawer">
          <div className="cart-header">
            <h3>Your Order</h3>
            <button className="close-btn" onClick={() => setCartOpen(false)}>✕</button>
          </div>

          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty 🫙</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="ci-info">
                      <span className="ci-name">{item.name}</span>
                      <span className="ci-price">${item.price * item.qty}</span>
                    </div>
                    <div className="ci-controls">
                      <button onClick={() => handleQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleQty(item.id, 1)}>+</button>
                      <button className="ci-remove" onClick={() => handleRemove(item.id)}>🗑</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button className="checkout-btn" onClick={() => setShowOrder(true)}>Checkout →</button>
            </>
          )}
        </div>
      )}
    </div>

    {showOrder    && <OrderModel    onClose={() => setShowOrder(false)} />}
    </>
  )
}

export default Menu