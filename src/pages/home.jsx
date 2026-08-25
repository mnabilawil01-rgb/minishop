import { useState, useEffect } from "react";
import ProdukCard from "../components/produkcard.jsx";

function Home() {
    const [produk, setProduk] = useState([]);
    const [kategoriList, setKategoriList] = useState([]);
    const [kategoriAktif, setKategoriAktif] = useState("all");
    const [kataKunci, setKataKunci] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination
    const [halaman, setHalaman] = useState(1);
    const itemPerHalaman = 6;

    // Ambil daftar kategori sekali saja saat komponen pertama kali dimuat
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => setKategoriList(data))
            .catch((err) => console.error("Gagal memuat kategori:", err));
    }, []);

    // Ambil produk setiap kali kategori aktif berubah
    useEffect(() => {
        setLoading(true);
        setError(null);

        const url = kategoriAktif === "all"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${kategoriAktif}`;

        fetch(url)
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
    }, [kategoriAktif]);

    // Reset ke halaman 1 setiap kali kategori atau kata kunci berubah
    useEffect(() => {
        setHalaman(1);
    }, [kategoriAktif, kataKunci]);

    const produkTersaring = produk.filter((p) =>
        p.title.toLowerCase().includes(kataKunci.toLowerCase())
    );

    // Hitung produk yang ditampilkan di halaman saat ini
    const totalHalaman = Math.ceil(produkTersaring.length / itemPerHalaman);
    const indexAkhir = halaman * itemPerHalaman;
    const indexAwal = indexAkhir - itemPerHalaman;
    const produkHalamanIni = produkTersaring.slice(indexAwal, indexAkhir);

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 p-4">
                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={kataKunci}
                    onChange={(e) => setKataKunci(e.target.value)}
                    className="border rounded px-3 py-1 w-56"
                />

                <select
                    value={kategoriAktif}
                    onChange={(e) => setKategoriAktif(e.target.value)}
                    className="border rounded px-3 py-1 capitalize"
                >
                    <option value="all">Semua Kategori</option>
                    {kategoriList.map((k) => (
                        <option key={k} value={k} className="capitalize">
                            {k}
                        </option>
                    ))}
                </select>
            </div>

            {loading && (
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500">Memuat Produk...</p>
                </div>
            )}

            {error && (
                <div className="flex justify-center items-center h-64">
                    <p className="text-red-600">Terjadi kesalahan: {error}</p>
                </div>
            )}

            {!loading && !error && (
                <>
                    {produkHalamanIni.length === 0 ? (
                        <p className="text-center text-gray-500 mt-6">
                            Produk tidak ditemukan.
                        </p>
                    ) : (
                        <div className="produk-list">
                            {produkHalamanIni.map((p) => (
                                <ProdukCard key={p.id} produk={p} />
                            ))}
                        </div>
                    )}

                    {totalHalaman > 1 && (
                        <div className="flex justify-center items-center gap-4 py-6">
                            <button
                                onClick={() => setHalaman((h) => Math.max(h - 1, 1))}
                                disabled={halaman === 1}
                                className="bg-slate-500 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-sm py-1 px-4 rounded"
                            >
                                Sebelumnya
                            </button>

                            <span className="text-sm text-gray-600">
                                Halaman {halaman} dari {totalHalaman}
                            </span>

                            <button
                                onClick={() => setHalaman((h) => Math.min(h + 1, totalHalaman))}
                                disabled={halaman === totalHalaman}
                                className="bg-slate-500 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-sm py-1 px-4 rounded"
                            >
                                Selanjutnya
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Home;