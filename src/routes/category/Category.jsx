import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/products/ProductCard'
import { selectProducts } from '../../store/products/products-selector'

import './category.style.scss'

const Category = () => {
  const { category } = useParams();
  const products = useSelector(selectProducts)

  const [categoryProducts, setCategoryProducts] = useState(products[category]);

  useEffect(() => {
    setCategoryProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container-1'>
        {categoryProducts &&
          categoryProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </Fragment>
  );
}

export default Category
