import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h1 className='order'>Order summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h5>Grand total</h5>
        </div>
    );
};

export default Cart;
