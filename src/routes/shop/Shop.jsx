import {Routes, Route} from 'react-router-dom'
import Categories from '../categories/Categories'
import Category from '../category/Category'

const Shop = () => {
  return(
    <Routes>
      <Route index element={<Categories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
export default Shop
