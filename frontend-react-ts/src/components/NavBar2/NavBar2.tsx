import './NavBar2.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
const NavBar2 = () => {
    return (
    <>
    <div className="NavBar2">
      <div className="Links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Out Team</li>
          <li>Contact</li>
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