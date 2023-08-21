import './NavBar2.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
const NavBar2 = () => {
  const navigate = useNavigate();
    return (
    <>
    <div className="NavBar2">
      <div className="Links">
        <ul>
          <li onClick={ () => navigate('/')}>Home</li>
          <li onClick={() => navigate('about')}>About</li>
          <li onClick={() => navigate('shop')}>Shop</li>
          <li onClick={() => navigate('blog')}>Blog</li>
          <li onClick={() => navigate('team')}>Our Team</li>
          <li onClick={() => navigate('contact')}>Contact</li>
        </ul>
      </div>
      <div className="SocialMedia"> 
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon /> 
          <YouTubeIcon />
          <WhatsAppIcon />  

      </div>
      <div className="Contacts">
        <PhoneIcon />
        <div className='phone'>
          <span>+254743251846</span>
          <span>mon - sat 5am - 10pm</span>
        </div>
        <span></span>
      </div>
    </div>
      
    </>
  )

}
export default NavBar2;