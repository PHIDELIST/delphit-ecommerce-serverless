import './ProfileSideBar.css'
import profilephoto from '../../assets/data.jpeg'
const ProfileSideBar = () => {
    return(
        <>
        <div className='profile-side-nav-main'>
            <div className='profile-card'>
                <img src={profilephoto} alt="" />
                <p>phidelist</p>
                <p>330.00$</p>
                <p>balance</p>
            </div>
            <div className='My-Wallet'>
                <button>My Wallet</button>
            </div>
            <div className='My-Rewards'>
                <button>My Rewards</button>
            </div>
            <div className='My-Orders'>
                <button>My Orders</button>
            </div>
            <div className='Personal-info'>
                <button>Personal Information</button>
            </div>
            <div className='My-Address'>
                <button>My Address</button>
            </div>
            <div className='Payment'>
                <button>Payment Method</button>
            </div>
            <div className='sign-out'>
                <button>Sign Out</button>
            </div>


        </div>
        </>
    )
}
export default ProfileSideBar;