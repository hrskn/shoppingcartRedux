import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setTextFilter} from '../actions/index'

class SearchFilter extends Component {
    render() {
        return (
            <div>
            <input  className="search"type="text" value={this.props.filters.text} 
                    onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))}} 
                    placeholder="Product search... 🔍"
                    />
                
            </div>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(MapStateToProps)(SearchFilter);