import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'

const createRootReducer = (history) =>
  combineReducers({
    products,
    router: connectRouter(history)
  })

export default createRootReducer
