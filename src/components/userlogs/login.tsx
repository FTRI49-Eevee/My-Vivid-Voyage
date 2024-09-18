import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const onButtonClick = async () => {
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Login Successfully:', data.token);
      navigate('/home');
    } else {
      console.error('Login failed:', data.message);
    }
  };

  return (
    <section className='login'>
      <h3>Log In</h3>
      <label>Username:
        <input type='text' onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>Password:
        <input type='password' onChange={(event) => setPassword(event.target.value)} />
      </label>

      <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      <div>No login? </div>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
      <button onClick={() => window.location.href = 'http://localhost:8080/auth/google'}>Login with Google</button>
    </section>
  );
};

export default Login;