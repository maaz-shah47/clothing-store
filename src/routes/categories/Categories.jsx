import { Fragment, useContext } from 'react'
import CategoryPreview from '../../components/categoryPreview/CategoryPreview'
import {ProductsContext} from '../../contexts/products-context'

import './categories.styles.scss'

const Categories = () => {
  const {products} = useContext(ProductsContext)

  return(
    <Fragment>
      {Object.keys(products).map((title) => {
        const categoryProducts = products[title]
        return (
          <CategoryPreview key={title} title={title} products={categoryProducts} />
        )
      })}
    </Fragment>
  )
}

export default Categories
