import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="bg-slate-500 pt-2 pb-5">
        <h1 className="text-4xl font-bold text-center mt-5 text-white">Minishop</h1>
      </div>
      <nav className="bg-slate-500 text-white flex justify-center space-x-4 py-2">
        <Link to="/">Beranda</Link>
        <Link to="/keranjang">Keranjang</Link>
      </nav>
    </header>
  );
}

export default Header;