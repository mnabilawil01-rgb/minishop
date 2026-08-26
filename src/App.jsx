import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Detailproduk from './pages/Detailproduk.jsx';
import FormLogin from './pages/Formlogin.jsx';
import Formregis from './pages/Formregis.jsx';
import Home from './pages/home.jsx';
import Notfound from './pages/Notfound.jsx';
import RiwayatPesanan from './pages/RiwayatPesanan.jsx';

const Keranjang = lazy(() => import('./pages/Keranjang.jsx'));

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
                <Suspense fallback={<p className="text-center mt-6">Memuat...</p>}>
                  <Keranjang />
                </Suspense>
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