import {ADD_PRODUCT, REMOVE_PRODUCT, INCREMENT_QUANTITY, SET_TEXT_FILTER} from './types';

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

export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
  });
  export const incrementQuantity = ({id}) => ({
    type: INCREMENT_QUANTITY,
    id
  });
  