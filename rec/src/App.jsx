import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Shop from './Components/Shop/Shop';
import ShopClick from './Components/ShopClick';
import Upload from './Dynamic/Upload';
import { CartProvider } from './Components/CartProvider';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Shop/Cart';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
