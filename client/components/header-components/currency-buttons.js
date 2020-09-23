import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateBase } from '../../redux/reducers/products'

const CurrencyButtons = () => {
  const base = useSelector((s) => s.products.base)
  const dispatch = useDispatch()
  return (
    <div>
      {['USD', 'EUR', 'CAD'].map((it) => {
        return (
          <button
            key={it}
            type="button"
            className={`button button--header ${base === it ? 'button--active' : ''}`}
            onClick={() => {
              dispatch(updateBase(it))
            }}
          >
            {it}
          </button>
        )
      })}
    </div>
  )
}

CurrencyButtons.propTypes = {}

export default CurrencyButtons
