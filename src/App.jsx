import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import SellerDashboard from './pages/SellerDashboard'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
