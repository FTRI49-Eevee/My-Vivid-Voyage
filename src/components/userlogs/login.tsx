import {useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home')
    }
  }, [navigate])

  function onButtonClick() {
    // remove navigate and do fetch once backend is setup
    fetch('/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': username,
        'password': password,
      }),
    })
    .then(response => {
      if (!response.ok) {
      return response.json().then(data => {
        throw new Error(data.message || 'Login failed');
      });
    }
    return response.json();
    })
    .then(data => {
      console.log(data)
      localStorage.setItem('token', data.token)
      //logic for successful login
      navigate('/home')
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <section className='login'>
      <h3>Log In</h3>
        <label>Username:
          <input type='text' onChange={(event) => setUsername(event.target.value)}></input> 
        </label>
        <label>Password:
          <input type='password' onChange={(event) => setPassword(event.target.value)}></input> 
        </label>

        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        <div>No login? </div> <button onClick={() => navigate('/signup')}>Sign Up</button>

    </section>
  )

}

export default Login