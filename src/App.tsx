import USMap from './components/USMap';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"
import Login from './components/userlogs/login'
import Signup from './components/userlogs/signup'



function App() {

  return (
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<USMap />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
  );
}

export default App;
