import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            <p>Selected Item: {cart.length}</p>
            {
                cart.map((item) => (
                    <h5 className='perfume-name'>{item.name}</h5>
                ))
            }
        </div>
    );
};

export default Cart;