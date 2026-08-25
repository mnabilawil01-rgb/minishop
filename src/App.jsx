import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detailproduk from './pages/Detailproduk.jsx';
import Keranjang from './pages/Keranjang.jsx';
import RiwayatPesanan from './pages/RiwayatPesanan.jsx';
import FormLogin from './pages/Formlogin.jsx';
import Formregis from './pages/Formregis.jsx';
import Notfound from './pages/Notfound.jsx';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produk/:id" element={<Detailproduk />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/register" element={<Formregis />} />
          <Route
            path="/keranjang"
            element={
              <ProtectedRoute>
                <Keranjang />
              </ProtectedRoute>
            }
          />
          <Route
            path="/riwayat-pesanan"
            element={
              <ProtectedRoute>
                <RiwayatPesanan />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;