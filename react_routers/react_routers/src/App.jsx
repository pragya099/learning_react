import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../components/Home";
import About from "../components/About";
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import ParamComp from '../components/ParamComp'

const router = createBrowserRouter(
[

  {
    path:"/student/:id",
    element:
    <div>
       {/* <Home/>, */}
       <Navbar/>
       <ParamComp/>
    </div>
  },
  {
  path:"/about",
    element:  <div>
       {/* <about/>, */}
       <Navbar/>
    </div>

  },
  {
      path:"/dashboard",
    element:  <div>
       <Dashboard/>
       <Navbar/>
    </div>
  },

]

);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router ={router}/>
      <p>Pragya tiwari</p>
    </>
  )
}

export default App
