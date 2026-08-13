function Header (){
    return (
        <header>
            <div className=" bg-slate-500 pt-2 pb-5" >
            <h1 className="text-3xl font-bold text-center mt-5 text-white ">Minishop</h1>
            </div>
            <nav>
                <a href="#beranda">Beranda</a>
                <a href="#keranjang">Keranjang</a>
            </nav>
        </header>
    );
}

export default Header;