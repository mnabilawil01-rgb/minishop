import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProdukCard from './components/produkcard.jsx'
import Home from './pages/home.jsx'
import { daftarproduk } from './data/produk.js'
import './App.css'
import Button from './components/Button.jsx'



function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App