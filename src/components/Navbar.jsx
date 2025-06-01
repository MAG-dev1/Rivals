import { Link } from 'react-router-dom';
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user'); // o tu token
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <Link to="/home">Inicio</Link> 
      <Link to="/protected">Carrito</Link>  
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
}

export default Navbar;
