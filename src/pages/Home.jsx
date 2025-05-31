import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useState } from 'react';

function Home() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <ProductList onAdd={handleAddToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default Home;
