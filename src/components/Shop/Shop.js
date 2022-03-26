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
        const newCart = [...cart, perfumes]
        if (newCart.length <= 4) {
            setCart(newCart)
        }
        else {
            alert("Can not Select More Than 4 Items");
        }

    }

    const removeItem = () => {

        setCart([]);
    }
    const chooseOne = () => {
        var array = [...cart];
        const count = array[Math.floor(Math.random() * array.length)]
        alert(count.name);
        // setCart([count])
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
                        key={cart.id}
                        chooseOne={chooseOne}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;