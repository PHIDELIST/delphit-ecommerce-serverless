import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import NavBar1 from '../../components/NavBar1/NavBar1';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Footer from '../../components/Footer/Footer.tsx';
import { useNavigate } from 'react-router-dom';
import itemphoto from '../../assets/veges1.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartPage.css'
type PropsFromRedux = ConnectedProps<typeof connector>;

const CartPage: React.FC<PropsFromRedux> = ({ cartItems }) => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar1 />
            <NavBar2 />
            <div className='Cart-Main-container'>  
                    <div className='Cart-left'>
                         <h3>Shopping Cart</h3>
                            <p>There are {cartItems.length} Items in your cart</p>
                                {cartItems.length === 0 ? (
                                    <p>Your cart is empty.</p>
                                ) : (
                                    <ul>
                                        {cartItems.map((item, index) => (
                                            <div className='cart-items-container' key={index}>
                                                <div className='item-img'>
                                                    <img src={itemphoto} alt="" />
                                                </div>
                                                <div className='cart-item-details'>
                                                    <p>{item.name}</p>
                                                    <p> ${item.price}</p>   
                                                </div>                                        
                                            </div>
                                        ))}
                                        
                                    </ul>
                                )}
                                <button onClick={() => navigate('/')}>Continue Shopping</button>
                                
                </div>
                <div className='Cart-right' >
                            <h5>Subtotal:</h5>
                            <p>Discount:</p>
                            <p>Shipping:</p>
                            <p>Estimated Tax:</p>
                            <p>Total:</p>
                            <button><AddShoppingCartIcon />Checkout </button>
                            
                </div>
                <div className='shipping-coupon'>
                    <div className='shipping'>
                        <h5>Calculate Shipping</h5>
                        <p>Flat rate 5%</p>
                        <input type="options"  placeholder='search'/>
                        <div className='county-zip'>
                        <input type="text" placeholder='State/Country' />
                        <input type="Post Code /Zip" />
                        </div>
                       
                    </div>
                    <div className='Coupon' >
                        <h6>Apply Coupon</h6>
                        <p>Using a Promo Code?</p>
                        <input type="text" placeholder='Enter coupon number' />
                        <button> Apply</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems, 
});

const connector = connect(mapStateToProps);

export default connector(CartPage);
