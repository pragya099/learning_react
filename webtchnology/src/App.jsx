// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/userCard'

import userImg from './assets/image.jpeg'
import userImg2 from './assets/maharana.jpg'
import userImg3 from './assets/ranilaxmi.jpg'

function App() {
  return (
    <>
     <UserCard image={userImg} cardClass="card1" />
<UserCard image={userImg2} cardClass="card2" />
<UserCard image={userImg3} cardClass="card3" />
    </>
  )
}



export default App
