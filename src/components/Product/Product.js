import React from 'react';
import './Product.css';

const Product = props => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className='product-info'>
                <p smallclassName='product-name'>{name}</p>
                <p>
                    {' '}
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
            <button className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;
