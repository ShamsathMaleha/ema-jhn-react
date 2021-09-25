import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const {name,img, price,stock,seller}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
           <div>
           <img src={img} alt="" />
           </div>
           <div>
           <h4 className="product-name">Product Name:{name}</h4>
            <p><small>By:{seller}</small></p>
            <p>Product Price:{price}</p>
            <p> <small>only {stock} left in stock -order soon</small></p>
            <button 
                onClick={()=>props.handleAddToCart(props.product)}
        className="purchase-btn"> {element} add to cart </button>
           </div>

        </div>
    );
};

export default Product;