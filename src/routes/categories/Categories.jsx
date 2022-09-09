import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/categoryPreview/CategoryPreview'
import { selectProducts } from '../../store/products/products-selector'

import './categories.styles.scss'

const Categories = () => {
  const products = useSelector(selectProducts)

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
