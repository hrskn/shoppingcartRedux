import {ADD_PRODUCT, REMOVE_PRODUCT, INCREMENT_QUANTITY, SET_TEXT_FILTER, EMPTY_CART} from './types';

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = ({ id } = {}) => ({
    type: REMOVE_PRODUCT,
    id
  });
export function emptyCart(cart) {
    return {
      type: EMPTY_CART,
      cart
    }
} 

export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
  });
