import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-gray-600 mb-4">Halaman tidak ditemukan.</p>
      <Link to="/" className="text-blue-600 underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default Notfound;