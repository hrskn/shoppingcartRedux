import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
export default class Shop extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ProductList/>
        <Footer/>
      </div>
    );
  }
}
