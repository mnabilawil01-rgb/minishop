import { daftarproduk } from "../data/produk";
import ProdukCard from "../components/produkcard";

function Home() {
    return (
        <div className="home">
            <h1>Daftar Produk</h1>
            <div className="produk-list">
                {daftarproduk.map(produk => (
                    <ProdukCard key={produk.id} produk={produk} />
                ))}
            </div>
        </div>
    );
}

export default Home;