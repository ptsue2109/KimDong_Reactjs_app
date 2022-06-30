import React from 'react'
import CardProduct from '../../components/CardProduct'
import Category from '../../components/Category'
import Sliders from '../../components/Sliders'

const Home = () => {
  return (
    <>
      <Category />
      <Sliders />
      <CardProduct />
    </>
  )
}

export default Home