import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Keranjangprovider } from './context/Keranjangcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Keranjangprovider>
      <App />
    </Keranjangprovider>
  </StrictMode>,
)