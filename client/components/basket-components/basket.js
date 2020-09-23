import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../header-components/header'
import BasketTop from './basket-top'
import BasketBottom from './basket-bottom'
import BasketView from './basket-view'
import BasketEmpty from './basket-empty'

const Basket = () => {
  const list = useSelector((s) => s.products.list)
  const selection = useSelector((s) => s.products.selection)
  const findProduct = (id) => list.find((it) => it.id === id)
  const doBasket = () =>
    Object.keys(selection).reduce((acc, rec) => {
      return [...acc, findProduct(rec)]
    }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container container--cart">
          {Object.keys(selection).length ? (
            <div className="cart">
              <BasketTop />
              <BasketView doBasket={doBasket} />
              <BasketBottom doBasket={doBasket} />
            </div>
          ) : (
            <BasketEmpty />
          )}
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default Basket
