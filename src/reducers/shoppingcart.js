import { ADD_PRODUCT, REMOVE_PRODUCT, INCREMENT_QUANTITY} from '../actions/types';
const productReducerDefaultState = [];

export default function(state = productReducerDefaultState, action) {
    switch(action.type) {
        case ADD_PRODUCT:
            return [ ...state, action.payload]

        case REMOVE_PRODUCT:
            return state.filter(({ id })  => id !== action.id);
        
        case INCREMENT_QUANTITY:
            return state.map(({id}) => {
                console.log(id);
              if (id === action.id) {
                  console.log("halleluja")
                return 
                  {}
                  
               
              } else {
                return product
              };
            });
          default:
            return state;
        }
};