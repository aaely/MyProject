import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../actions';
//import { Link } from 'react-router-dom';
import CoffeeSlider from './coffeeSlider';
import ProductsList from './products/productsList';
import Collapsible from 'react-collapsible';
import { CSSTransitionGroup } from 'react-transition-group';

class Store extends Component {
    componentDidMount() {
        this.props.fetchCart();
    }

    renderCart() {
            return (
                <div id="ex2" style={{marginTop: '40px'}}>
                    <span className="p1 fa-stack fa-2x has-badge" data-count={this.props.cart.cart.items.length} >
                        <i className="p2 fa fa-circle fa-stack-2x"></i>
                        <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" style={{color: 'rgb(0, 123, 255)'}} data-count="4b"></i>
                </span>
        </div>
            );
        }
    
    renderCakes() {
        return (
            <div className='trigger'>
                Cakes
            </div>
        )
    }

    renderHide() {
        return (
            <div className='triggerHide'>
                Hide
            </div>
        )
    }
    
    render() {
    return (
        <div>
        <CSSTransitionGroup
            transitionName="example1"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
                        >
        <CoffeeSlider />
        </CSSTransitionGroup>
        <Collapsible
                transitionTime= '50'
                trigger= {this.renderCart()}
                triggerWhenOpen= {this.renderCart()}
        >
            <h1>Products Here</h1>
        </Collapsible>
        <div style={{ textAlign: 'center', position: 'relative', marginTop: '30px' }}>
            <h1>
                BabyCakes!
            </h1>
            Order your coffee to go without waiting in line!!
            <h3>
                MENU
            </h3>
            <div style={{marginTop: '20px'}}>
            <Collapsible  
                trigger={this.renderCakes()} 
                triggerWhenOpen={this.renderHide()}>
                    <ProductsList />
            </Collapsible>
            </div>
        </div>
        </div>
    );
}
}

function mapstatetoprops({ cart }) {
    return { cart };
}

export default connect(mapstatetoprops, { fetchCart })(Store);