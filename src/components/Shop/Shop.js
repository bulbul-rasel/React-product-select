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

    const removeItem = () => {

        setCart([]);
    }
    const chooseOne = (cart) => {
        var array = [];
        for (var i = cart.length - 1; i >= 0; i--) {
            array[i] = i;
        }
        const count = Math.floor(Math.random() * array.length)
        console.log(count);
        alert(cart[count].name);
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

                {
                    <Cart cart={cart}
                        removeItem={removeItem}
                        chooseOne={chooseOne}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;