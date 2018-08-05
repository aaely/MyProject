import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CoffeeSlider from './coffeeSlider';
import ProductsList from './products/productsList';
import Collapsible from 'react-collapsible';

class Store extends Component {
    render() {
    return (
        <div>
        <CoffeeSlider />
        <div style={{ textAlign: 'center', position: 'relative', marginTop: '30px' }}>
            <h1>
                BabyCakes!
            </h1>
            Order your coffee to go without waiting in line!!
            <h3>
                MENU
            </h3>
            <div>
            <Collapsible 
                transitionTime="100" 
                triggerStyle={{position: 'relative', 
                            display: 'block', 
                            padding: '5px', 
                            backgroundColor: '#333', 
                            color: '#007bff', 
                            fontSize: '40px', 
                            borderStyle: 'solid', 
                            borderColor: '#007bff', 
                            borderWidth: '5px',
                            borderRadius: '25px'}} 
                trigger="Coffee Products" 
                triggerWhenOpen="Click to hide">
                    <p><ProductsList /></p>
            </Collapsible>
            </div>
            <div style={{marginTop: '20px'}}>
            <Collapsible 
                transitionTime="100" 
                triggerStyle={{position: 'relative', 
                            display: 'block', 
                            padding: '5px', 
                            backgroundColor: '#333', 
                            color: '#007bff', 
                            fontSize: '40px', 
                            borderStyle: 'solid', 
                            borderColor: '#007bff', 
                            borderWidth: '5px',
                            borderRadius: '25px'}} 
                trigger="Sweets & Cakes" 
                triggerWhenOpen="Click to hide">
                    <p><ProductsList /></p>
            </Collapsible>
            </div>
        </div>
        </div>
    );
}
}

export default Store;