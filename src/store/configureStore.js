import { combineReducers, createStore } from 'redux';
import shoppingcartReducer from '../reducers/shoppingcart';
import filtersReducer from '../reducers/productfilter';
import {loadState, saveState} from '../localStorage';

export default () => {
  const persistedState = loadState();  
  const store = createStore(
    combineReducers({
    cart: shoppingcartReducer,
    filters: filtersReducer,
  }),persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // save it to localstorage
  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};