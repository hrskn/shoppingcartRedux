import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Shop from './components/Shop';
import reducers from './reducers';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>
  , document.querySelector('.container'));
