import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return this.props.products.map(product => {
            return (
                <div>
                    content
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps({ products }) {
    return { products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);
