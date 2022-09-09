import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart-selecter'
import { setIsCartOpen } from '../../store/cart/cart-actions'

import './cartIcon.styles.scss'

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
