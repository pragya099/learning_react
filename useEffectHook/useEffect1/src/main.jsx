import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewOne from '../../components/NewOne.jsx'
import LoggerComponent from '../../components/LoggerComponent.jsx';




createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    // <NewOne/>
    <LoggerComponent/>
  // {/* </StrictMode>, */}
)
