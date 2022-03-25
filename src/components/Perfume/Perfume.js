import React from 'react';
import './Perfume.css'

const Perfume = (props) => {
    const { handleCart, perfume } = props
    const { name, price, img } = perfume;

    return (
        <div className='perfume-container'>
            <div className='perfume'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-add' onClick={() => handleCart(perfume)}>ADD TO CART</button>
        </div>
    );
};

export default Perfume;