import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: null,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount : 0,
  cartTotal: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {}
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

const removeFromCart = (cartItems, product) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id)
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== product.id)
  }
  return cartItems.map(item => item.id === product.id
    ? {...item, quantity: item.quantity - 1}
    : item
    )
}
const clearItem = (cartItems, product) => cartItems.filter(item => item.id !== product.id)

export const CartProvider = ({children}) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(addToCart(cartItems, product))
  }

  const removeItemFromCart = (product) => {
    setCartItems(removeFromCart(cartItems, product))
  }
  const clearItemFromCart = (product) => {
    setCartItems(clearItem(cartItems, product))
  }
  const value = {cartIsOpen, setCartIsOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
