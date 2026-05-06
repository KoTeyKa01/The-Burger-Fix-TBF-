import React, { useState } from 'react'
import './OrderModel.scss'

const formatCard = (val) => {
  return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
}

const formatExpiry = (val) => {
  const digits = val.replace(/\D/g, '').slice(0, 4)
  if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2)
  return digits
}

const OrderModel = ({ onClose }) => {
  const [form, setForm] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleCardNumber = (e) => {
    const raw = e.target.value.replace(/\D/g, '')
    if (e.target.value !== e.target.value.replace(/[^0-9 ]/g, '')) {
      setErrors(prev => ({ ...prev, cardNumber: '⚠️ Numbers only!' }))
    } else {
      setErrors(prev => ({ ...prev, cardNumber: '' }))
    }
    setForm(prev => ({ ...prev, cardNumber: formatCard(e.target.value) }))
  }

  const handleExpiry = (e) => {
    const raw = e.target.value.replace(/\D/g, '')
    if (e.target.value.replace(/[^0-9/]/g, '') !== e.target.value) {
      setErrors(prev => ({ ...prev, expiry: '⚠️ Numbers only!' }))
    } else {
      setErrors(prev => ({ ...prev, expiry: '' }))
    }
    setForm(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))
  }

  const handleCvv = (e) => {
    if (/\D/.test(e.target.value.slice(-1))) {
      setErrors(prev => ({ ...prev, cvv: '⚠️ Numbers only!' }))
      return
    }
    setErrors(prev => ({ ...prev, cvv: '' }))
    setForm(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) }))
  }

  const handleName = (e) => {
    setForm(prev => ({ ...prev, name: e.target.value }))
  }

  const handleSubmit = () => {
    const newErrors = {}
    if (form.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = '⚠️ Enter full 16-digit card number'
    if (form.expiry.length < 5) newErrors.expiry = '⚠️ Enter valid expiry date'
    if (form.cvv.length < 3) newErrors.cvv = '⚠️ Enter 3-digit CVV'
    if (!form.name.trim()) newErrors.name = '⚠️ Enter cardholder name'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSuccess(true)
  }

  return (
    <div className="order-overlay" onClick={onClose}>
      <div className="order-modal" onClick={e => e.stopPropagation()}>
        <button className="order-close" onClick={onClose}>✕</button>

        {success ? (
          <div className="order-success">
            <div className="success-icon">✅</div>
            <h2>Order Placed!</h2>
            <p>Your burgers are on the way 🍔</p>
            <button className="submit-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2>Payment Details</h2>
            <p className="order-subtitle">Enter your card info to complete the order</p>

            <div className="card-preview">
              <div className="card-preview-top">
                <span className="card-chip">▬▬</span>
                <span className="card-type">VISA</span>
              </div>
              <div className="card-number-preview">
                {form.cardNumber || '•••• •••• •••• ••••'}
              </div>
              <div className="card-preview-bottom">
                <div>
                  <div className="card-label">Card Holder</div>
                  <div className="card-value">{form.name || 'FULL NAME'}</div>
                </div>
                <div>
                  <div className="card-label">Expires</div>
                  <div className="card-value">{form.expiry || 'MM/YY'}</div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={form.cardNumber}
                onChange={handleCardNumber}
                className={errors.cardNumber ? 'input-error' : ''}
                inputMode="numeric"
              />
              {errors.cardNumber && <span className="error-msg">{errors.cardNumber}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={form.expiry}
                  onChange={handleExpiry}
                  className={errors.expiry ? 'input-error' : ''}
                  inputMode="numeric"
                />
                {errors.expiry && <span className="error-msg">{errors.expiry}</span>}
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="password"
                  placeholder="•••"
                  value={form.cvv}
                  onChange={handleCvv}
                  className={errors.cvv ? 'input-error' : ''}
                  inputMode="numeric"
                  maxLength={3}
                />
                {errors.cvv && <span className="error-msg">{errors.cvv}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Cardholder Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleName}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Pay Now 🍔
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderModel