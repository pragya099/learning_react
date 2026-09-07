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
   <div className="cards-container">
    <UserCard name="Pragya Tiwari" description="Software Engineer" image={userImg} cardClass="card1"  style={{ borderRadius: '2px', border: '2px solid #ccc' }} />
    <UserCard name="Maharana Pratap" description="Historical Figure" image={userImg2} cardClass="card2" />
    <UserCard name="Rani Laxmi" description="Freedom Fighter" image={userImg3} cardClass="card3" />
</div>
  )
}



export default App
