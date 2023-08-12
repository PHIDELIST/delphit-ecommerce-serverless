import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'

function App() {
  return (
    <>
    <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='admin/dashboard' element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
