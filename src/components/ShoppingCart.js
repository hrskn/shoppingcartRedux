import React, {Component}from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import * as actions from '../actions';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.state = {
            showModal: false,
        }
    }
    componentWillMount() {
        // if cart is not empty, open the cart modal
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
    // remove product from the cart
    removeFromCart(product) {
        this.props.removeProduct(product);
        console.log(product)
    
    }
    // empties the cart
    emptyCart() {
        this.props.emptyCart()
    }
    // check if modal cart is empty
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
        // map through the cart and add products to the modal
        const updatedCart = this.props.cart.map((product,i)=> {
            items++;
            product.id = `product${i}`;
            totalPrice += product.price
            return ( 
                
                    
                        <div className="row">
                        <div className="col-md-3">
                        <span>{product.description}</span>
                        </div>
                        <div className="col-md-3">
                        <span>{product.price}€</span>
                        </div>
                        <div className="col-md-3">
                        <i className="remove fa fa-trash-o" aria-hidden="true"
                        
                            onClick={this.removeFromCart.bind(this, product)} 
                            aria-hidden="true">
                        </i>
                        </div>
                        
                        
                        </div>
                    
                 )         
            });
        
        return (
            <div>    
                    <i  className="cart fa fa-shopping-cart fa-4x" aria-hidden="true"
                        bsStyle="primary"
                        bsSize="small"
                        onClick={this.open}><span className="cartitems">{items}</span>     
                    </i>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><strong>Shopping Cart</strong> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="container-fluid">
                        {updatedCart}
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <span className="price"><strong>Total:</strong> {totalPrice}€</span>
                        <button className="btn btn-primary">Checkout</button>                        
                        <button className="btn btn-success" onClick={this.close}>Close</button>
                        <button className="btn btn-danger" onClick={this.emptyCart.bind(this)}><i className="remove fa fa-trash-o" aria-hidden="true"></i></button>                        
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