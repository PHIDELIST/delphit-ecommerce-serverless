import './ProfilePage.css'
import ProfileSideBar from './ProfileSideBar';
const ProfilePage = () => {
    return(
        <>
        <div className='profile-main-container'>
            <ProfileSideBar />
            <div className='profile-main-content'>
                <h1>Hello Guys</h1>
            </div>
        </div>
        </>
    )
}
export default ProfilePage;