import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
             <h3>Order Summary</h3>
             <h5>Items Orders {props.cart.length} </h5>
            <button className="purchase-btn">Place Order </button>

        </div>
    );
};

export default Cart;