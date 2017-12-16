import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setTextFilter} from '../actions/index'
class SearchFilter extends Component {
    render() {
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value))}} />
                <i className="find fa fa-search 4x" aria-hidden="true"></i>
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