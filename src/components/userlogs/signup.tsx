import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const onButtonClick = async () => {
    const response = await fetch('api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('SignUp Successfully:', data);
      navigate('/login');
    } else {
      console.error('SignUp failed:', data.message);
    }
  }

  return (
    <section className='signup'>
        <h3>Sign Up</h3>
        <label>Username:
          <input type='text' onChange={(event) => setUsername(event.target.value)}></input> 
        </label>
        <label>Password:
          <input type='password' onChange={(event) => setPassword(event.target.value)}></input> 
        </label>

        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign Up'} />
    </section>
  )

}

export default Signup