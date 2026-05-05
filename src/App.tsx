import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import Category from './views/Category'
import NavBar from './shared/components/navbar/NavBar'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:categoryName' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
