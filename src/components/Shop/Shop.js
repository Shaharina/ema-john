import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useState([]);

    useEffect(() => {
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
