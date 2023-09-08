import './HomePage.css'
import {useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { setsUI } from '../../redux/uiSlice';
import video from '../../assets/video.mp4'
import useAutoPlayVideo from '../../useAutoPlayVideo';
import CategoryContainer from '../../components/Categories/CategoryContainer';


const HomePage = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const shouldPlay = useAutoPlayVideo(videoRef);
    const dispatch = useDispatch();
    const handleFruits = () => {
        dispatch(setsUI('fruits'));
    };
    const handleSets= () => {
        dispatch(setsUI('sets'))
    }
    const handleVegetables = () => {
        dispatch(setsUI('vegetables'))
    }
    const handleGreenery = () => {
        dispatch(setsUI('greenary'))
    }
    const handleFungi = () => {
        dispatch(setsUI('fungi'))
    }
    const handleGroceries = () => {
        dispatch(setsUI('groceries'))
    }
    const handleSweets = () => {
        dispatch(setsUI('sweets'))
    }
    const handleDrinks = () => {
        dispatch(setsUI('drinks'))
    }
    useEffect(() => {
        if(videoRef.current && shouldPlay){
            videoRef.current.addEventListener('ended', () => {
                videoRef.current?.play();
            });
        }
    }, [shouldPlay]);
    return(
        <>
         <div className="Home-Container">
            <div className="Welcome-Imgs">
                <div className='Intro-right'>
                    <h1>Rice Drink with Vitamin D3</h1>
                    <p>Subscribe to our weekly recipe newspaper</p>
                    <input type="text" /><button>Subscribe</button>
                </div>
                <div className='Intro-left'>
                    
                    <video ref={videoRef} autoPlay={shouldPlay} muted controls>
                        <source src={video} type="video/mp4" />
                    </video>
                   
                </div>
            </div>
            <div className='shop-by-category'>
                <h1>Shop By Categories</h1>
                <div className='category-cards-container'>
                    <div className='category-card' onClick={handleSets} ><p>Sets</p></div>
                    <div className='category-card' onClick={handleFruits}><p>Fruits</p></div>
                    <div className='category-card' onClick={handleVegetables}><p>Vegetables</p></div>
                    <div className='category-card' onClick={handleGreenery}><p>Greenery</p></div>
                    <div className='category-card' onClick={handleFungi}><p>Fungi</p></div>
                    <div className='category-card' onClick={handleGroceries}><p>Groceries</p></div>
                    <div className='category-card' onClick={handleSweets}><p>Sweets</p></div>
                    <div className='category-card' onClick={handleDrinks}><p>Drinks</p></div>
                </div>
            </div>
            <CategoryContainer />
         </div>
        </>
    )
}
export default HomePage;