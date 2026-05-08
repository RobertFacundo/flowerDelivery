import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import Category from './views/Category'
import NavBar from './shared/components/navbar/NavBar'
import Footer from './shared/components/footer/Footer'
import Product from './views/Product'
import { useLenis } from './shared/hooks/useLenis'

function App() {

  useLenis();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/product/:productName' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
