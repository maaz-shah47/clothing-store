import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart-context'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'

import './cartDropdown.styles.scss'

const CartDropDown = () => {
  const navigate = useNavigate()
  const {cartItems} = useContext(CartContext)

  const navigateCheckoutPageHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={navigateCheckoutPageHandler}>Checkout</Button>
    </div>
  )
}

export default CartDropDown
