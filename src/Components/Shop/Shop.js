import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from './fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useState(products)


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
            setCart(savedCart)
        }
    }, [products])


    const proAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id)
        let newCart = []
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }


        setCart(newCart)
        addToDb(selectedProduct.id)
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
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;