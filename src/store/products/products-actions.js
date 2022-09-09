import PRODUCT_ACTION_TYPES from "./products-types"
import { createAction } from '../../utils/reducer';

export const setProducts = (products) =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products)
