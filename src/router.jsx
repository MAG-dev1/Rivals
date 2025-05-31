import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/login', element: <Login /> },
      { path: '/protected', element: <ProtectedPage /> },
    ]
  }
]);

export default router;
