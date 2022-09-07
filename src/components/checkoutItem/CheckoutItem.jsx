import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
  const {id, name,imageUrl, quantity, price} = cartItem
  const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)

  const addItemToCartHandler = () => addItemToCart(cartItem)
  const removeItemToCartHandler = () => removeItemFromCart(cartItem)
  const clearItemFromCartHandler = () => clearItemFromCart(cartItem)
  return (
    <div key={id} className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemToCartHandler} >&#10094;</div>
        <span className='value'>
          {quantity}
        </span>
        <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemFromCartHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem
