import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';
import './css/app.css'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
