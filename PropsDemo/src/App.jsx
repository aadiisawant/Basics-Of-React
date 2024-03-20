import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCompOne from './components/MyCompOne'

function App() {
  let details = {
    name:"Aditya",
    email:"adisawant0178@gmail.com",
    Address:"Nanded"
  }

  return (
    <>
      <MyCompOne data={details}/>
    </>
  )
}

export default App
