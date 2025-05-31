import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/protected');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Login;
