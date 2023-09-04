import './NavBar1.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';
import NavBar2 from '../NavBar2/NavBar2';
const NavBar1 = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='Navbar1'>
                <div className="Tilte">Delphit</div>
                <div className="Searchs">
                    <input type="search" placeholder="Search" />
                    <button>Search</button>
                </div>
                <NavBar2/>
                <div className="CartAccounts">
                    <button onClick={() => navigate('favorites')}><FavoriteBorderIcon/></button>
                    <button onClick={() => navigate('cart')}><AddShoppingCartIcon /></button>
                    <button onClick={() => navigate('profile')}><PermIdentityIcon /></button>
                </div>
        </div>
        </>
    )

}
export default NavBar1;