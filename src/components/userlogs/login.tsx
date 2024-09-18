import {useState} from 'react'
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onButtonClick() {
    navigate('/home')
    // remove navigate and do fetch once backend is setup
    fetch('/login', {
      method: "POST",
      body: JSON.stringify({
        'username': username,
        'password': password,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
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