import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Perfume from '../Perfume/Perfume';
import './Shop.css'
const Shop = () => {
    const [perfumes, setPerfumes] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('perfume.json')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])

    const handleCart = (perfumes) => {
        console.log(cart);
        const newCart = [...cart, perfumes]
        setCart(newCart)
    }

    const removeItem = (cart) => {

        setCart([]);
    }


    return (
        <div className='product'>
            <div className="product-container">
                {
                    perfumes.map(perfume => <Perfume
                        key={perfume.id}
                        perfume={perfume}
                        handleCart={handleCart}
                    ></Perfume>)
                }
            </div>
            <div className="cart-container">
                <h3 className='cart-name'>This is Cart</h3>
                {
                    <Cart cart={cart}
                        removeItem={removeItem}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;