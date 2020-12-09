import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, fetchCart } from '../../actions';
import Slider from 'react-slick';

class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCart();
        console.log(this.props)
    }

    renderProducts() {
        return this.props.products.map(product => {
            let values = { id: product._id, quantity: 1, price: product.price }
            return (
                <div className="card" key={product._id} style={{marginTop: '30px', width: '30%', display: 'inline-block', marginRight: '3px', marginLeft: '3px'}}>
                    <div className="card-image">
                    <img src={product.imagePath} alt ={product.title} className="coffeeimage"/>
                        <span className="card-title">{product.title}</span>
                    </div>
                    <div className="card-content">    
                        <p></p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Description:</p>
                        <p>{this.props.products.length}</p>
                    </div>
                    <div className="card-action" onClick={() => this.props.addToCart(values)}>
                        <a>Add to Cart</a>
                    </div>
                </div>
            );
        });
    }

    render()  {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div>
                <Slider {...settings}>
                {this.renderProducts()}
                </Slider>
            </div>
        );
    }
}

function mapStateToProps({ products, cart }) {
    return { products, cart };
}

export default connect(mapStateToProps, { fetchProducts, addToCart, fetchCart })(ProductsList);
