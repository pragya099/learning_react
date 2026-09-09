import { useState } from 'react'
import Card from '../components/Card.jsx'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <Card name={name} setName={setName} />
      <p>I am inside parent and value of name is:{name}</p>
    </>
  )
}

export default App
