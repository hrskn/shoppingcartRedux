import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import SearchFilter from './SearchFilter';

class Header extends Component {
    render() {
        return (
            
            <div>
            <div className="nav">
                <h2>SHOPPING CART</h2>
                <SearchFilter/>
            </div>
            <ShoppingCart/> 
            </div>
        )
    }
}

  export default Header;