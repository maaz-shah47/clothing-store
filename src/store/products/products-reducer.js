import PRODUCT_ACTION_TYPES from "./products-types"

export const INITIAL_STATE = {
  products: {},
  isLoading: false,
  error: null
}

export const productReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch(type) {
    case PRODUCT_ACTION_TYPES.GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true
      }
    case PRODUCT_ACTION_TYPES.GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        products: payload,
        isLoading: false
      }
    case PRODUCT_ACTION_TYPES.GET_PRODUCTS_FAILED:
      return{
        ...state,
        error: payload,
        isLoading: false
      }
    default:
      return state
  }
}
