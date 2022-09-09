import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import { setProducts } from '../../store/products/products-actions'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import Categories from '../categories/Categories'
import Category from '../category/Category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(setProducts(categoryMap))
    }
    getCategoriesMap()
  }, [dispatch])
  
  return(
    <Routes>
      <Route index element={<Categories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
export default Shop
