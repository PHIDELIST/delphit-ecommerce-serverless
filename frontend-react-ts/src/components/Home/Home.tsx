import HomePage from "../../pages/HomePage/HomePage";
import PopularProducts from "../PopularProducts/PopularProducts";
import BestSells from '../BestSells/BestSales';
import Footer from "../Footer/Footer";
import './Home.css'
const Home = () => {
    return (
      <>
    <div className="Home-Main"> 
          <div className="Pages">
            <HomePage />
           <PopularProducts />
           <BestSells />
           
          </div>
          <Footer />
          
    </div>
    </>
  );
}

export default Home;