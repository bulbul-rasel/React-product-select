import './Cart.css'

const Cart = (props) => {
    const { removeItem, chooseOne, cart } = props;
    return (
        <div className='cart'>

            {
                cart.map((item) => (
                    <h5 className='perfume-name'>{item.name}</h5>
                ))
            }
            <button className='choose-one' onClick={() => chooseOne(cart)}>CHOOSE 1 FOR ME</button>
            <button className='remove-btn' onClick={() => removeItem(cart)}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;