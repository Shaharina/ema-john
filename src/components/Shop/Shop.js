import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log('products load before fetch');

        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log('products loaded');
            });
    }, []);

    useEffect(() => {
        console.log('local storage first line');
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products.find(products => products.id === id);
            // console.log(addedProduct);
        }
    }, []);

    const handleAddToCart = product => {
        // console.log(product);

        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
                ))}
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
