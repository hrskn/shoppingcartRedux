import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Modal, Button} from 'react-bootstrap';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            amount: 1
        }
    
    }
    addToCart(product, amount) {
      if (product.stockQuantity >= amount) {
            for (let i = 0; i < amount; i++) {
            let uniqueProduct = {...product}
            this.props.addProduct(uniqueProduct);
            }
            this.state.product.stockQuantity -= amount;
            this.setState({product})
      }
       
    }
    changeAmount(e){
        this.setState({amount: e.target.value}) 
	};
       
    render() {
        
        const { product, amount } = this.state
        return (
                
                <div className="product col-sm-3">
                        <h4>{product.description}</h4><br/>
                            <img src="https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_960_720.png" width="150" height="250"/>
                            <br/><strong>{product.price} € </strong><br/>
                            <span>In stock: {product.stockQuantity}</span><br/>
                            <div>
                            <input ref="amount"
                                    min="0"
                                    type="number" 
                                    className="quantity" 
                                    value={this.state.amount} 
                                    onChange={this.changeAmount.bind(this)} />                            
                            </div>
                            <button className="btn btn-primary btn-block" 
                                    type="submit" 
                                    name="action"
                                    onClick={this.addToCart.bind(this, product, amount)}>
                                    {product.stockQuantity <= 0 ? <i>Out of stock</i> : <i>Add</i>}
                          </button>
                          
                        </div>
                  
            
        )
    }
}
export default connect(null,actions)(Product);