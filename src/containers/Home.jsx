import React from 'react'

import CategoryItem from '../components/categories/categoryItem';
import './Home.styles.scss'

const Home = ({ categories }) => {
  return (
    <div className='categories-container'>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
  )
}

export default Home
