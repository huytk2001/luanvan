import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import SellerDashboard from './pages/SellerDashboard'
import SignIn from './pages/SignIn'
import Forgot from './pages/Forgot'
import Intro from './pages/intro'
import Faq from './pages/Faq'
import SellerDetail from './pages/SellerDetail'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/seller-detail" element={<SellerDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
