import React from 'react'
import { Link } from 'react-router-dom'

import emptyCard from '../../assets/images/empty-cart.png'

const BasketEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty.{' '}
        <span role="img" aria-label="hhh">
          😕
        </span>
      </h2>
      <p>
        Most likely you haven&apost ordered anything yet.
        <br />
        To order, go to the main page.
      </p>
      <img src={emptyCard} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Back to shop</span>
      </Link>
    </div>
  )
}

BasketEmpty.propTypes = {}

export default BasketEmpty
