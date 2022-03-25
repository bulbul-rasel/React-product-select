import React from 'react';

const Perfume = (props) => {
    const { name, price, img } = props.perfume;
    return (
        <div>
            <img src={img} alt="" />
            <h3>Product Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Perfume;