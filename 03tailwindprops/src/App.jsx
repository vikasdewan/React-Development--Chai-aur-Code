import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username : "Vikas",
    age : 21
  }

  let myArr = [1,2,3,4];
  return (
    <>
       <h1 className='bg-cyan-500 text-black rounded-xl p-2 mt-2 mb-4' > Tailwind CSS | Vikas Dewangan</h1>
      <Card name="sonia" details = {{myObj,myArr}}/>
      <Card />
    </>
  )
}

export default App
