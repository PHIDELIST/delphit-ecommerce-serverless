import HomePage from "../../pages/HomePage/HomePage";
import NavBar1 from "../NavBar1/NavBar1";
import NavBar2 from "../NavBar2/NavBar2";
import PopularProducts from "../PopularProducts/PopularProducts";
import BestSells from '../BestSells/BestSales';
import AboutPage from "../../pages/AboutPage/AboutPage";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
      <>
    <div className="Home-Main">
         <NavBar1 />
          <NavBar2 /> 
          <div className="Pages">
            <HomePage />
           <PopularProducts />
           <BestSells />
           <AboutPage />
          </div>
          <Footer />
          
    </div>
    </>
  );
}

export default Home;