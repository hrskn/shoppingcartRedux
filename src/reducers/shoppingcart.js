import { ADD_PRODUCT, REMOVE_PRODUCT, EMPTY_CART} from '../actions/types';
const productReducerDefaultState = [];

export default function(state = productReducerDefaultState, action) {
    switch(action.type) {
        case ADD_PRODUCT:
            return [ ...state, action.payload]

        case REMOVE_PRODUCT:
            return state.filter(({ id })  => id !== action.id);

        case EMPTY_CART: 
            return [];
        
        default:
            return state;
        }
};