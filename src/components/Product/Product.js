import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    //const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>
                    <small>
                        Price: <b className='red'>${price}</b>
                    </small>
                </p>

                <p>
                    <small>seller:{seller}</small>
                </p>
                <p>
                    <small>Ratings:{ratings} stars</small>
                </p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
