import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart-selecter'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'

import './cartDropdown.styles.scss'

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()

  const navigateCheckoutPageHandler = () => {
    navigate('/checkout')
  }
  const isEmpty = cartItems.length <= 0

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {isEmpty ? <span>Cart Is Empty</span> : cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={navigateCheckoutPageHandler}>Checkout</Button>
    </div>
  )
}

export default CartDropDown
