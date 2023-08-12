import './HomePage.css'
import { useDispatch } from 'react-redux';
import { setsUI } from '../../redux/uiSlice';
const HomePage = () => {
const dispatch = useDispatch();
const handleFruits = () => {
    dispatch(setsUI('fruits'));
};
    return(
        <>
         <div className="Home-Container">
            <div className="Welcome-Imgs">
                <div className='Intro-right'>
                    <h1>Rice Drink with Vitamin D3</h1>
                    <p>Upto 30% off your first order</p>
                    <input type="text" /><button>Subscribe</button>
                </div>
                <div className='Intro-left'>
                    <h1>Buy With Free Shopping</h1>
                    <p>test the feeling</p>
                </div>
            </div>
            <div className='shop-by-category'>
                <h1>Shop By Categories</h1>
                <div className='category-cards-container'>
                    <div className='category-card' ><p>Sets</p></div>
                    <div className='category-card' onClick={handleFruits}><p>Fruits</p></div>
                    <div className='category-card'><p>Vegetables</p></div>
                    <div className='category-card'><p>Greenery</p></div>
                    <div className='category-card'><p>Fungi</p></div>
                    <div className='category-card'><p>Groceries</p></div>
                    <div className='category-card'><p>Sweets</p></div>
                    <div className='category-card'><p>Drinks</p></div>
                </div>
            </div>
         </div>
        </>
    )
}
export default HomePage;