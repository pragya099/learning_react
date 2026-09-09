import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('lightblue')

  function fixedColor() {
    let r = 150 + Math.round(100 * Math.random())
    let g = 150 + Math.round(100 * Math.random())
    let b = 150 + Math.round(100 * Math.random())

    return `rgb(${r}, ${g}, ${b})`
  }

  function handleChangeColor() {
    setColor(fixedColor())
  }

  return (
    <div className="container">

      <div
        className="color-card"
        style={{ backgroundColor: color }}
      >
        <h2>Color Card</h2>

        <button
          className="color-button"
          onClick={handleChangeColor}
        >
          Change Color
        </button>
      </div>

    </div>
  )
}

export default App