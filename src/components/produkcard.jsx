import { memo } from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge.jsx';
import Button from './Button.jsx';

function ProdukCard({ produk }) {
  return (
    <section id="beranda">
      <div className="relative border rounded-lg p-4 shadow hover:shadow-lg transition produk-card">
        <div className="absolute top-2 right-2">
          <Badge text={produk.stok !== false ? 'Available' : 'Out of stock'} />
        </div>
        <img
          src={produk.image}
          className="w-full h-40 object-contain rounded"
          alt={produk.title}
        />
        <h3 className="font-semibold mt-2 line-clamp-2">{produk.title}</h3>
        <p className="text-gray-600 mb-3">
          Rp {Math.round(produk.price * 15000).toLocaleString('id-ID')}
        </p>

        <div className="flex flex-col items-center gap-2">
          <Link to={`/produk/${produk.id}`}>
            <Button text="Detail Produk" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(ProdukCard);