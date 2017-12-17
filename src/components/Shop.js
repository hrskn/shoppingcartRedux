import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ProductList/>
      </div>
    );
  }
}
