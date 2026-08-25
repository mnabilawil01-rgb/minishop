import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button.jsx";
import usekeranjang from "../context/Keranjangcontext.jsx";

function DetailProduk() {
    const { id } = useParams();
    const { tambahkekeranjang } = usekeranjang();

    const [produk, setProduk] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Gagal memuat produk (status ${res.status})`);
                }
                return res.json();
            })
            .then((data) => {
                setProduk(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center mt-6">Memuat produk...</p>;

    if (error) return <p className="text-center mt-6">Terjadi kesalahan: {error}</p>;

    if (!produk) return <p className="text-center mt-6">Produk tidak ditemukan</p>;

    return (
      <div className="max-w-md mx-auto p-4">
        

        <div className="border rounded-lg shadow p-4 mt-3 bg-white">
          <img
            src={produk.image}
            alt={produk.title}
            className="w-full h-56 object-contain rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{produk.title}</h2>
          <p className="text-gray-500 text-sm mt-1">{produk.description}</p>
          <p className="text-gray-700 font-semibold mt-2">
            Rp {Math.round(produk.price * 15000).toLocaleString("id-ID")}
          </p>

          <div className="mt-4 text-center">
            <Button text="Tambahkan ke Keranjang" onClick={() => tambahkekeranjang(produk)} />
          </div>
        </div>
        <Link to="/" className="text-blue-600 underline text-sm">
          &larr; Kembali
        </Link>
      </div>
    );
}

export default DetailProduk;