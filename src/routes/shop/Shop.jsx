import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import { fetchProductsAsync } from '../../store/products/products-actions'
import Categories from '../categories/Categories'
import Category from '../category/Category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch])

  return(
    <Routes>
      <Route index element={<Categories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
export default Shop
