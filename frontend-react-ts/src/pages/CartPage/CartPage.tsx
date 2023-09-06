import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import { useNavigate } from 'react-router-dom';
import itemphoto from '../../assets/veges1.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartPage.css'

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartPage: React.FC<PropsFromRedux> = ({ cartItems }) => {
    const [cartItem, setCartItem] = useState(
        cartItems.map(item => ({ ...item, quantity: 1 }))
    );

    const handleAddItem = (index: number) => {
        const updatedCartItems = [...cartItem];
        updatedCartItems[index].quantity += 1;
        setCartItem(updatedCartItems);
    }

    const handleRemoveItem = (index: number) => {
        const updatedCartItems = [...cartItem];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItem(updatedCartItems);
        }
    }

    const navigate = useNavigate();

    let subtotal = 0;
    for (const product of cartItem) {
        subtotal += product.price * product.quantity;
    }
    let discount = subtotal * 0.05;
    let shipping = 0;
    if (subtotal < 1000) {
        shipping = 0;
    } else if (subtotal <= 10000) {
        shipping = 10;
    } else {
        shipping = 20;
    }
    let tax = subtotal * 0.15;
    let Total = subtotal + shipping + tax - discount;

    return (
        <>
        

            <div className='Cart-Main-container'>
                <div className='Cart-left'>
                    <h3>Shopping Cart</h3>
                    <p>There are {cartItem.length} Items in your cart</p>
                    {cartItem.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItem.map((item, index) => (
                                <div className='cart-items-container' key={index}>
                                    <button onClick={() => handleRemoveItem(index)}>-</button>
                                    <div className='item-img'>
                                        <img src={itemphoto} alt="" />
                                    </div>
                                    <div className='cart-item-details'>
                                        <p>{item.name}</p>
                                        <p> ${item.price}</p>
                                        <p> Quantity: {item.quantity} </p>
                                    </div>
                                    <button onClick={() => handleAddItem(index)}>+</button>
                                </div>
                            ))}
                        </ul>
                    )}
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                </div>

                <div className='Cart-right'>
                    <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                    <p>Discount: ${discount.toFixed(2)}</p>
                    <p>Shipping: ${shipping.toFixed(2)}</p>
                    <p>Estimated Tax: ${tax.toFixed(2)}</p>
                    <p>Total: ${Total.toFixed(2)}</p>
                    <button onClick={() => navigate('/checkout')}><AddShoppingCartIcon />Checkout </button>
                </div>
                </div>
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems,
});

const connector = connect(mapStateToProps);

export default connector(CartPage);
