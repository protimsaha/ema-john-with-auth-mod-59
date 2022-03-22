import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                    products.map(product => <Product product={product} key={product.id} proAddToCart={proAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;