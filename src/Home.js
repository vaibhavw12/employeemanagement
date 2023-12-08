import React, { useState } from 'react'
import './Home.css'
import profileLogo from './Group 46.png'
import Dashboard from './components/Dashboard'
import User from './components/User'
import homeLogo from './house.png'
import userLogo from './person.png'
import motoLogo from './moptro logo.png'
 
export default function Home() {

  const [show, setShow] = useState(true)
  const showUnits = ()=>{
    setShow(true)
  }
  const showList = ()=>{
    setShow(false)
  }
  return (
    <div>
        <div className='profile'>
            <img src={profileLogo} alt='profile'></img>
        </div>
        <div className='moto'>
          <img src={motoLogo} alt='profile'></img>
          <span>4</span>
        </div>
        <div className='info'>
            <div className={show ? 'dashboard' : 'hide'}>
              <Dashboard></Dashboard>
            </div>
            <div className={show ? 'hide' : 'user'}>
              <User></User>
            </div>
        </div>
        <div className='footer'>
          <div className='footer-logo'>
            <div className='logobox'><img onClick={showUnits} className='logo' src={homeLogo} alt='home'></img></div>
            <div className='logobox'><img onClick={showList} className='logo' src={userLogo} alt='user'></img></div>
          </div>
        </div>
    </div>
  )
}