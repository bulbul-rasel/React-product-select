import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button className='btn-add' onClick={() => handleCart(perfume)}>ADD TO CART
                <FontAwesomeIcon icon={faShoppingCart} className='icon'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Perfume;