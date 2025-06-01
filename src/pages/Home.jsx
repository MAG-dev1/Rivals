import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useState } from 'react';
import Navbar from '../components/Navbar';

function Home() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    
    <div>
      <Navbar/>
      <ProductList onAdd={handleAddToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default Home;
