import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from './header-components/header'
import Content from './content'

import '../assets/scss/app.scss'

import { getProducts, getRates } from '../redux/reducers/products'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getRates())
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Content />
    </div>
  )
}

Home.propTypes = {}

export default Home
