import {useState} from 'react'
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  function onButtonClick() {
    navigate('/');
    // request once we get backend setup
    // fetch('/signup', {
    //   method: "POST",
    //   body: JSON.stringify({
    //     'username': username,
    //     'password': password,
    //   })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   //logic for successful login
    // })
    // .catch(error => {
    //   console.log(error)
    // })
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