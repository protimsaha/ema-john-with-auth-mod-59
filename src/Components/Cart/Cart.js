import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    let tax = total * (10 / 100)
    let grandTotal = total + shipping + tax

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected item:  {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping:${shipping} </p>
            <p>Tax:$ {tax.toFixed(2)} </p>
            <h5>Grand Total:${parseFloat(grandTotal.toFixed(2))} </h5>
        </div>
    );
};

export default Cart;