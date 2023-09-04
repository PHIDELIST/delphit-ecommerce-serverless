import HomePage from "../../pages/HomePage/HomePage";
import NavBar1 from "../NavBar1/NavBar1";
import PopularProducts from "../PopularProducts/PopularProducts";
import BestSells from '../BestSells/BestSales';
import Footer from "../Footer/Footer";
import './Home.css'
const Home = () => {
    return (
      <>
    <div className="Home-Main">
         <NavBar1 />
         
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