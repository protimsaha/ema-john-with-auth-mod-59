import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, price, ratings, img, seller } = props.product;
    const { proAddToCart } = props

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div>
                <p className='sub-text'>Price: ${price}</p>
                <p className='sub-text'>Seler: {seller}</p>
                <p className='sub-text'>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => proAddToCart(props.product)} className='cart-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};


export default Product;