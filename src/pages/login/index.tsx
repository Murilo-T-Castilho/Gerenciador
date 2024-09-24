import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 
  const [useGoogle, setUseGoogle] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Senha:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>
            <input 
              type="checkbox" 
              checked={useGoogle} 
              onChange={(e) => setUseGoogle(e.target.checked)} 
            />
            Logar com Conta Google
          </label>
        </div>

        <button type="submit">Logar</button>
      </form>
    </div>
  );
}

export default Login;
