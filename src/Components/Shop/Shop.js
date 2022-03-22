import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const proAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="shop">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        proAddToCart={proAddToCart}
                    >
                    </Product>)
                }

            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected item:  {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;