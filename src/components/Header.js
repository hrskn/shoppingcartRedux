import React, { Component } from 'react';
import { Link } from 'react-router';
import ShoppingCart from './ShoppingCart';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
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