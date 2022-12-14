import { combineReducers } from 'redux'

import { userReducer } from './user/user-reducer'
import { productReducer } from './products/products-reducer'
import { cartReducer } from './cart/cart-reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer
})
