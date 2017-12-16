import React, { Component } from 'react';
import { Link } from 'react-router';
import ShoppingCart from './ShoppingCart';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import SearchFilter from './SearchFilter';
class Header extends Component {
    render() {
        return (
            <div className="nav">
                <h2>Shopping Cart</h2>
                <SearchFilter/>
                <ShoppingCart/> 
            </div>
        )
    }
}

  export default Header;