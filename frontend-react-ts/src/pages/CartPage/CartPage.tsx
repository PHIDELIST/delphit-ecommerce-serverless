import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import NavBar1 from '../../components/NavBar1/NavBar1';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Footer from '../../components/Footer/Footer.tsx';
import { useNavigate } from 'react-router-dom';
import itemphoto from '../../assets/veges1.jpg'
import './CartPage.css'
type PropsFromRedux = ConnectedProps<typeof connector>;

const CartPage: React.FC<PropsFromRedux> = ({ cartItems }) => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar1 />
            <NavBar2 />
            <div className='Cart-Main'>
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <div className='cart-items-container' key={index}>
                                <p>{item.name}</p>
                                <p> ${item.price}</p>
                               <div className='item-img'>
                                <img src={itemphoto} alt="" />
                               </div>
                            </div>
                        ))}
                    </ul>
                )}
                <button onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
            <Footer />
        </>
    );
};

// Map state from the Redux store to component props
const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems, // Assuming your cart state is under 'cart' slice
});

// Connect the component to Redux
const connector = connect(mapStateToProps);

export default connector(CartPage);
