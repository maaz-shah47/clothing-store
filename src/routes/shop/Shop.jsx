import { useContext } from 'react'
import ProductCard from '../../components/products/ProductCard'
import {ProductsContext} from '../../contexts/products-context'

import './shop.styles.scss'

const Shop = () => {
  const {products} = useContext(ProductsContext)

  return(
    <div className='shop-container'>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
export default Shop
