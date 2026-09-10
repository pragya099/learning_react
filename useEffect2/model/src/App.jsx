import { useState } from 'react'
import './App.css'
import ResizeComponent from "../mvp/ResizeComponent";
import MultiEffectComponent from "../mvp/MultiEffectComponent"
import DataFetcher from "../mvp/DataFetcher"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ResizeComponent/>
     <MultiEffectComponent/>
     <DataFetcher/>
    
    </>
  )
}

export default App
