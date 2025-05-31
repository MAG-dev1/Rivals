import { Navigate } from 'react-router-dom';

function ProtectedPage() {
  const isAuth = localStorage.getItem('auth') === 'true';

  if (!isAuth) return <Navigate to="/login" />;

  return <h2>Zona Protegida</h2>;
}

export default ProtectedPage;
