import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'

import './cartDropdown.styles.scss'

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button>Checkout</Button>
    </div>
  )
}

export default CartDropDown