import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Navebar from './components/Navebar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Navebar/>
      <App />
      <Hero/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)