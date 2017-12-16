import React, {Component}from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import * as actions from '../actions';

class ShoppingCart extends Component {
    constructor(...args) {
        super(...args);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.state = {
            showModal: false,
        }
    }
    componentWillMount() {
        if (!this.isEmpty(this.props.cart)) {
            this.open();
        } 
    }
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    removeFromCart(product) {
        this.props.removeProduct(product);
        console.log(product)
    
    }
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    render() { 
        
        let items = 0;
        let totalPrice = 0;      
        
        const updatedCart = this.props.cart.map(product => {
            items++;
            product.id = `product${items}`;
            totalPrice += product.price
            
            return ( <div>
                        <span>{product.description} - {product.price}€</span>
                        
                        <i  className="remove fa fa-window-close" 
                            onClick={this.removeFromCart.bind(this, product)} 
                            aria-hidden="true">
                        </i>
                    </div> )         
            });
        
        return (
            <div>    
                    <i  className="cart fa fa-shopping-cart fa-4x" aria-hidden="true"
                        bsStyle="primary"
                        bsSize="small"
                        onClick={this.open}>
                        
                    </i>
               

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><strong>Shopping Cart</strong> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="product-list"><strong>{updatedCart}</strong>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <span className="price"><strong>Total:</strong> {totalPrice}€</span>
                        <button className="btn btn-primary" onClick={this.close}>Checkout</button>
                        <button className="btn btn-success" onClick={this.close}>Close</button>
                    </Modal.Footer>
                </Modal>
           
            </div>


        )
    }
}
function mapStateToProps(state) {
    return {cart: state.cart}
}
export default connect(mapStateToProps, actions)(ShoppingCart);