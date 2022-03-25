import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [perfumes, setPerfumes] = useState([])

    useEffect(() => {
        fetch('perfume.json')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])
    return (
        <div className='product'>
            <div className="product-container">
                {
                    perfumes.map(perfume => perfume.name)
                }
            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
            </div>
        </div>
    );
};

export default Shop;