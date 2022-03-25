import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { removeItem, cart } = props;
    return (
        <div className='cart'>

            {
                cart.map((item) => (
                    <h5 className='perfume-name'>{item.name}</h5>
                ))
            }
            <button className='choose-one '>CHOOSE 1 FOR ME</button>
            <button className='remove-btn' onClick={() => removeItem(cart)}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;