import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import { Link } from 'react-router-dom';
//import ProductsList from './products/productsList';


class Store extends Component {
    render() {
    return (
        <div style={{ textAlign: 'center', position: 'relative', marginTop: '30px' }}>
            <h1>
                BabyCakes!
            </h1>
            Order your coffee to go without waiting in line!!
            <h3>
                MENU
            </h3>

        </div>
    );
}
}

export default Store;