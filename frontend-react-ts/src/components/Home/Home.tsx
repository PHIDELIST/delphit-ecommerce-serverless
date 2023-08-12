import HomePage from "../../pages/HomePage/HomePage";
import NavBar1 from "../NavBar1/NavBar1";
import NavBar2 from "../NavBar2/NavBar2";
import CategoryContainer from "../Categories/CategoryContainer";
const Home = () => {
    return (
      <>
    <div className="Home-Main">
         <NavBar1 />
          <NavBar2 /> 
          <div className="Pages">
            <HomePage />
            <CategoryContainer />

          </div>
          
    </div>
    </>
  );
}

export default Home;