import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { removeItem, chooseOne, cart } = props;
    return (
        <div className='cart'>
            <h3 className='cart-name'>This is Cart</h3>
            <h5 className='selected-item' >Selected Item: {cart.length}</h5>
            {
                cart.map((item) => (
                    <h5 className='perfume-name' key={item.id} > <img className='perfume-img' src={item.img} alt="" /> {item.name}</h5>
                ))
            }




            <button className='choose-one' onClick={() => chooseOne(cart)}>CHOOSE 1 FOR ME</button>
            <button className='remove-btn' onClick={() => removeItem(cart)}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;