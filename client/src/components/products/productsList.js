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
                <div className="card" key={product._id} style={{marginTop: '30px'}}>
                    <div className="card-content">
                        <span className="card-title">{product.title}</span>
                        <p><img src={product.imagePath} /></p>
                        <p>Price: {product.price}</p>
                        <p>Description:</p>
                        <p>{product.description}</p>
                    </div>
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
