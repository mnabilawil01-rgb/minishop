import Button from './Button.jsx';

function ProdukCard({ produk }) {
    return (
        <section id="beranda">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition produk-card">
            <img src={produk.gambar} className="w-full h-40 object-cover rounded" alt={produk.nama} />
            <h3 className="font-semibold mt-2">{produk.nama}</h3>
            <p className="text-gray-600">Rp {produk.harga.toLocaleString('id-ID')}</p>
            <Button text ="Tambahkan ke Keranjang" />
        </div>
        </section>
    );
}

export default ProdukCard;