import { Link } from "react-router-dom";
import usekeranjang from "../context/Keranjangcontext.jsx";

function Keranjang() {
  const { item, hapusdarikeranjang, ubahjumlah } = usekeranjang();
  const total = item.reduce((sum, p) => sum + p.price * p.jumlah, 0);
  const isEmpty = item.length === 0;

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Keranjang</h1>

      {isEmpty ? (
        <div className="border rounded-lg bg-white shadow p-8 text-center">
          <p className="text-gray-500 mb-4">Keranjang  kosong.</p>
          <Link to="/" className="text-blue-600 underline">
           beranda 
          </Link>
        </div>
      ) : (
        <div className="border rounded-lg bg-white shadow p-4">
          <ul className="divide-y">
            {item.map((p) => (
              <li key={p.id} className="flex items-center gap-3 py-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-14 h-14 object-contain rounded"
                />

                <div className="flex-1">
                  <p className="font-semibold line-clamp-1">{p.title}</p>
                  <p className="text-gray-600 text-sm">
                    Rp {Math.round(p.price * 15000).toLocaleString("id-ID")}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => ubahjumlah(p.id, p.jumlah - 1)}
                    className="w-7 h-7 bg-slate-500 hover:bg-red-700 text-white rounded"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{p.jumlah}</span>
                  <button
                    onClick={() => ubahjumlah(p.id, p.jumlah + 1)}
                    className="w-7 h-7 bg-slate-500 hover:bg-red-700 text-white rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => hapusdarikeranjang(p.id)}
                  className="text-red-600 text-sm underline ml-2"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center font-bold border-t pt-3 mt-2">
            <span>Total</span>
            <span>Rp {Math.round(total * 15000).toLocaleString("id-ID")}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Keranjang;