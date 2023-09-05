import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import CartPage from './pages/CartPage/CartPage'
import AboutPage from './pages/AboutPage/AboutPage'
import SetsPage from './pages/CategoriesPages/Sets/SetsPage'
import ProfilePage from './pages/Profile/ProfilePage'
import NavBar1 from './components/NavBar1/NavBar1'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar1 />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='admin/dashboard' element={<Dashboard />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='setscategory' element={<SetsPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
