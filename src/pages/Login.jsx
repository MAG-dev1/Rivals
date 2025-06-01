import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá iría la lógica de autenticación
    console.log('Email:', email);
    console.log('Password:', password);
    localStorage.setItem('user', 'true'); //simulo que autentico un user
    navigate('/home');
  };

  return (
    <div className='container'>
         <form onSubmit={handleSubmit}>
      <div className='campo'>
        <label>Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <div className='campo'>
        <label>Contraseña:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    </div>
   
  );
}

export default Login;

