import './App.css';
import logoMob from './Group 3.png'
import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const getEmail = (e)=>{
    setEmail(e.target.value)
  }
  const getPass = (e)=>{
    setPass(e.target.value)
  }
  const verifyDetails = (e)=>{
    e.preventDefault()
    
    if(email === 'admin@gmail.com' && pass === 'admin@123'){
      toast.success('Successfully logged In!')
      navigate('/home')
    }else{
      toast.error("This didn't work.")
    }
  }
  return (
    <div className="App">
      <Toaster />
      <img className='app-logo' src={logoMob} alt='logo'></img>
      <p>#We are Electric</p>
      <form onSubmit={verifyDetails} className='login-form'>
        <input onChange={getEmail} type='email' placeholder='E-mail' value={email} required></input>
        <input onChange={getPass} type='password' placeholder='Password' value={pass} required></input>
        <button type='submit' className='login-btn'>Login</button>
        <p>Forget password ?</p>
      </form>
    </div>
  );
}

export default App;
