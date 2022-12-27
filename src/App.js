import React from 'react'
import Profile from './profil/Profile'
import './App.css'
const App = () => {
  const fullName='nom:Youssef Fourat';
  const bio ='Full stack Web developer';
  const profession = 'Web developer'
  const alertme=()=>{
    alert(`HELLO ${fullName}`)
  }
  return (
    <div className='App-header'>
      <Profile fullName={fullName}
      bio={bio}
      profession={profession}
      alertme={alertme}
      
      />
    </div>
  )
}

export default App;