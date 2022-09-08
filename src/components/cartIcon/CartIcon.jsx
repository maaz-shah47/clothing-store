import React, { useContext } from 'react'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart-context'
import './cartIcon.styles.scss'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
