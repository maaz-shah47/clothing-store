import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/products/ProductCard'
import { ProductsContext } from '../../contexts/products-context'

import './category.style.scss'

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
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
            console.log(product)
            return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </Fragment>
  );
}

export default Category
