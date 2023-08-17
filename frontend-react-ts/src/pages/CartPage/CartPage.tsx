import './CartPage.css'
import Footer from '../../components/Footer/Footer';
import NavBar1 from '../../components/NavBar1/NavBar1';
import NavBar2 from '../../components/NavBar2/NavBar2';
const CartPage = () => {
    return(
        <>
        <NavBar1 />
        <NavBar2 />
        <div className='Cart-Main'>
            <h1>Ooops Nothing is available </h1>
            <button>Continue Shopping </button>
        </div>
        <Footer />
        </>
    )
}
export default CartPage;