import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart-actions'
import { selectCartItems } from '../../store/cart/cart-selecter'

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const {id, name,imageUrl, quantity, price} = cartItem

  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemToCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
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
