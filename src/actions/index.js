import {ADD_PRODUCT, REMOVE_PRODUCT, SET_TEXT_FILTER, EMPTY_CART} from './types';

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

export function emptyCart() {
    return {
      type: EMPTY_CART
    }
} 

export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
  });
