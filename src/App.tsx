import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Navbar } from './components/Navbar'
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
