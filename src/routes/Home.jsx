import React from 'react'
import { Outlet } from 'react-router-dom'
import Categories from '../components/categories/Categories'

import './Home.styles.scss'

const Home = () => {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  )
}

export default Home
