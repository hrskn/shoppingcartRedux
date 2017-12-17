import React, {Component} from 'react';
import { connect } from 'react-redux';
import Product from './Product'
import * as actions from '../actions';
import selectProducts from '../selectors/products';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    
    }
    
    componentDidMount() {
        // get the data from the json file
        const inventoryURL = 'https://api.myjson.com/bins/1gdlrn';
        try {
            fetch(inventoryURL)
            .then((res ) => {
                return res.json();
            })
            .then((data) => {
                this.setState({products:data})    
            })
        }
        catch(e) {console.log(e)}
    }
       
    render() {
        // add search text filter to products
        const visibleFilter = selectProducts(this.state.products, this.props.filters)
        let renderProducts = visibleFilter.map((product, i) => {
            return (
                <Product key={product.id} product={product}/>
            )
        });
        return (
            <div>
            {renderProducts}
            </div>
        )
       
    }
}
const mapStateToProps = (state)=> {
    return {
        filters: state.filters,
        cart: state.cart
    };
};
export default connect(mapStateToProps,actions)(ProductList);