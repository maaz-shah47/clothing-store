import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: null,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount : 0
})

const addToCart = (cartItems, product) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id)
  if(existingCartItem) {
    return cartItems.map(item => item.id === product.id
      ? {...item, quantity: item.quantity + 1}
      : item
    )
  }
  return [...cartItems, {...product, quantity: 1}]
}
export const CartProvider = ({children}) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(addToCart(cartItems, product))
  }

  const value = {cartIsOpen, setCartIsOpen, cartItems, addItemToCart, cartCount}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
