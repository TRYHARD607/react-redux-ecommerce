import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addToSelection } from '../redux/reducers/products'

import ContentTop from './content-top'

const Content = () => {
  const products = useSelector((s) => s.products.list)
  const sortedParam = useSelector((s) => s.products.sortedParam)
  const sortedDirection = useSelector((s) => s.products.sortedDirection)
  const selection = useSelector((s) => s.products.selection)
  const base = useSelector((s) => s.products.base)
  const rates = useSelector((s) => s.products.rates)

  const dispatch = useDispatch()

  return (
    <div className="content">
      <div className="container">
        <ContentTop />
        <div className="content__items">
          {products
            .sort((a, b) => {
              if (sortedParam === 'title') {
                return sortedDirection === 'asc'
                  ? a.title.localeCompare(b.title)
                  : b.title.localeCompare(a.title)
              }
              return sortedDirection === 'asc' ? a.price - b.price : b.price - a.price
            })
            .map((it) => {
              return (
                <div key={it.id} className="product-card">
                  <div className="product-card__image">
                    <img src={it.image} alt="product" />
                  </div>
                  <div className="product-card__footer">
                    {' '}
                    <h4 className="product-card__title">{it.title}</h4>
                    <div className="product-card__bottom">
                      <div className="product-card__price">
                        {(it.price * rates[base]).toFixed(2)}
                        {` ${base}`}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(addToSelection(it.id))
                        }}
                        className="button button--outline button--add"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                          />
                        </svg>
                        <span>Add</span>
                        <i>{selection[it.id] || 0}</i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {}

export default Content
