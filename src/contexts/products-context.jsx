import React, {createContext, useState, useEffect} from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase'

import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
  products: {},
})

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState({})
  const value = {products}

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setProducts(categoryMap)
    }
    getCategoriesMap()
  }, [])
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
