import PRODUCT_ACTION_TYPES from "./products-types"
import { createAction } from '../../utils/reducer';

import { getCategoriesAndDocuments } from "../../utils/firebase";

export const getProductStart = () =>
  createAction(PRODUCT_ACTION_TYPES.GET_PRODUCTS_START)

export const getProductSuccess = (products) =>
createAction(PRODUCT_ACTION_TYPES.GET_PRODUCTS_SUCCESS, products)

export const getProductFailed = (error) =>
  createAction(PRODUCT_ACTION_TYPES.GET_PRODUCTS_FAILED, error)

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(getProductStart)
  try {
    const categoryMap = await getCategoriesAndDocuments()
    dispatch(getProductSuccess(categoryMap))
  } catch (error) {
    dispatch(getProductFailed(error))
  }
}
