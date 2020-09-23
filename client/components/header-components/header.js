import React from 'react'
import { Link } from 'react-router-dom'

import CurrencyButtons from './currency-buttons'
import HeaderCart from './header-cart'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" id="brand-name" className="header__logo">
          <svg height="75" viewBox="0 0 128 128" width="75" xmlns="http://www.w3.org/2000/svg">
            <g id="Circle_Grid" data-name="Circle Grid">
              <circle cx="64" cy="64" fill="#ea8953" r="64" />
            </g>
            <g id="icon">
              <path
                d="m101.376 37.526v49.21h-74.752v-49.21a3.262 3.262 0 0 1 3.262-3.262h68.228a3.262 3.262 0 0 1 3.262 3.262z"
                fill="#62667c"
              />
              <path
                d="m22 83.474h84a0 0 0 0 1 0 0v6.262a4 4 0 0 1 -4 4h-76a4 4 0 0 1 -4-4v-6.262a0 0 0 0 1 0 0z"
                fill="#62667c"
              />
              <path d="m31.039 38.483h65.922v44.99h-65.922z" fill="#69b0ee" />
              <path d="m70.983 86.736h-13.966l-1.886-3.262h17.738z" fill="#828a9e" />
              <path
                d="m77.374 77.124h-26.748a.8.8 0 0 1 -.791-.94l.8-4.628.345-2.009 2.772-15.993a.805.805 0 0 1 .791-.667h18.91a.805.805 0 0 1 .791.667l2.772 15.993.345 2.009.8 4.628a.8.8 0 0 1 -.787.94z"
                fill="#f6c863"
              />
              <circle cx="70.026" cy="56.703" fill="#eab54e" r="1.598" />
              <circle cx="57.974" cy="56.703" fill="#eab54e" r="1.598" />
              <path
                d="m70.026 57.305a.6.6 0 0 1 -.6-.6v-5.243a5.423 5.423 0 0 0 -10.847 0v5.238a.6.6 0 0 1 -1.205 0v-5.238a6.629 6.629 0 0 1 13.257 0v5.238a.6.6 0 0 1 -.605.605z"
                fill="#eeefee"
              />
            </g>
          </svg>
          <h1>My Brand Here</h1>
        </Link>
        <CurrencyButtons className="m-4" />
        <HeaderCart />
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
