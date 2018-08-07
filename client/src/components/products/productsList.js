import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import img from '../images/image7.jpg';
import Slider from 'react-slick';


class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return this.props.products.map(product => {
            return (
                <div className="card" key={product._id} style={{marginTop: '30px', width: '30%', display: 'inline-block', marginRight: '3px', marginLeft: '3px'}}>
                    <div className="card-image">
                    <img src={img} className="coffeeimage"/>
                        <span className="card-title">{product.title}</span>
                    </div>
                    <div className="card-content" style={{overflow: 'hidden'}}>    
                        <p></p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Description:</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-action">
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

function mapStateToProps({ products }) {
    return { products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);
