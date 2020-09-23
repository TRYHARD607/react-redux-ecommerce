import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeSortedParam, changeSortedDirection } from '../redux/reducers/products'
import upArrow from '../assets/images/up-arrow.png'
import downArrow from '../assets/images/drop-down-arrow.png'

const ContentTop = () => {
  const sortParam = useSelector((s) => s.products.sortedParam)
  const sortDirection = useSelector((s) => s.products.sortedDirection)
  const dispatch = useDispatch()
  const [showPopUp, setShowPopUp] = useState(false)
  return (
    <div className="content__top">
      <div className="sort">
        <div className="sort__label">
          <b>Sorted by:</b>
          <button
            type="button"
            className="outline-none"
            onClick={() => {
              if (showPopUp) {
                setShowPopUp(false)
              } else {
                setShowPopUp(true)
              }
            }}
          >
            {sortParam === 'title' ? 'Name' : 'Price'}
          </button>
          <button
            type="button"
            className="sort__button"
            onClick={() => {
              if (sortDirection === 'asc') {
                dispatch(changeSortedDirection('desc'))
              } else {
                dispatch(changeSortedDirection('asc'))
              }
            }}
          >
            <img src={sortDirection === 'asc' ? upArrow : downArrow} alt="arrow" />
          </button>
        </div>
        <div className={showPopUp ? 'sort__popup' : 'hidden'}>
          <ul>
            <li className={sortParam === 'title' ? 'active' : ''}>
              <button
                type="button"
                onClick={() => {
                  dispatch(changeSortedParam('title'))
                  setShowPopUp(false)
                }}
              >
                Name
              </button>
            </li>
            <li className={sortParam === 'price' ? 'active' : ''}>
              <button
                type="button"
                onClick={() => {
                  dispatch(changeSortedParam('price'))
                  setShowPopUp(false)
                }}
              >
                Price
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentTop.propTypes = {}

export default ContentTop
