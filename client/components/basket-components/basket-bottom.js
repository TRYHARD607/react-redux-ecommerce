import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BasketBottom = () => {
  const list = useSelector((s) => s.products.list)
  const selection = useSelector((s) => s.products.selection)
  const base = useSelector((s) => s.products.base)
  const rates = useSelector((s) => s.products.rates)

  const findPrice = (id) => list.find((it) => it.id === id).price
  const basketSize = Object.values(selection).reduce((acc, rec) => {
    return acc + rec
  }, 0)
  const totalPrice = Object.entries(selection).reduce((acc, [id, quantity]) => {
    return acc + findPrice(id) * quantity
  }, 0)

  return (
    <div className="cart__bottom">
      <div className="cart__bottom-details">
        <span>
          {' '}
          Total products: <b>{basketSize}</b>{' '}
        </span>
        <span>
          {' '}
          Total Price:{' '}
          <b>
            {(totalPrice * rates[base]).toFixed(2)} {base}
          </b>{' '}
        </span>
      </div>
      <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Back to shop</span>
        </Link>
        <div className="button pay-btn">
          <span>Pay now</span>
        </div>
      </div>
    </div>
  )
}

BasketBottom.propTypes = {}

export default BasketBottom
