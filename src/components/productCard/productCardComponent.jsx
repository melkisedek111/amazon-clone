import React from 'react';
import './productCard.styles.css';

const ProductCard = ({title, price, image, rating}) => {

    return (
        <div className="productCard">
            <img src={image} alt=""/>
            <div className="productCard__info">
                <p>{title}</p>
                <p className="productCard__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productCard__rating">
                {
                    Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))
                }
                    
                </div>
            </div>
            <button>Add to Basket</button>
        </div>
    )   
}

export default ProductCard;