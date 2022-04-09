import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, img, price, quantity, shipping, } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-items-detail-container'>
                <div className="review-items-details" title={name}>
                    <p className="p-name">
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p> Price: <span className='orange-color'> {price}</span></p>
                    <p>Shipping : <small> {shipping}</small></p>
                    <p> <small>{quantity}</small></p>
                </div>
                <div className="delete-btn">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;