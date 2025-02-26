import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MassageShop from '../pages/massageshop'
import Home from '../pages/home'
import Login from '../pages/login'
import MakeReserve from '../pages/makereserve'
import Profile from '../pages/profile'
import Reservation from '../pages/myreservation'
function App() {
  return (
    <Router>
    {/* <nav>
      <Link to="/masssage-shop">Home</Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/make-reservation" element={<MakeReserve />} />  
      <Route path="/massage-shop" element={<MassageShop />} />  
      <Route path="/profile" element={<Profile />} />  
      <Route path="/login" element={<Login />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
    </Router>
  )
}

export default App
