import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts([])
    const [cart, setCart] = useCart(products)

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div className='shop-container'>
            <div className='reviw-item-container'>
                {
                    cart.map(product => <ReviewItem key={product.id}
                        handleRemoveProduct={handleRemoveProduct}
                        product={product}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;