import React, { useEffect, useState } from 'react';
import Perfume from '../Perfume/Perfume';
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
                    perfumes.map(perfume => <Perfume
                        key={perfume.id}
                        perfume={perfume}
                    ></Perfume>)
                }
            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
            </div>
        </div>
    );
};

export default Shop;