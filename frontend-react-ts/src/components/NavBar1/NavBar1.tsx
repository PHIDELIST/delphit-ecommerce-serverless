import './NavBar1.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';
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