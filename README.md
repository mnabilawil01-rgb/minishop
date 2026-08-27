MiniShop

MiniShop adalah aplikasi web e-commerce sederhana yang dibangun dengan Next.js (React), mencakup sisi frontend (tampilan toko) dan backend (API routes) dalam satu proyek. Data produk dan pengguna saat ini disimpan dalam bentuk file JSON lokal (dummy data), sehingga cocok untuk keperluan belajar, prototipe, atau demo sebelum dihubungkan ke database sungguhan.

Fitur
Login & Register Pengguna Formulir login (Formlogin.jsx) dan registrasi (Formregis.jsx), dikelola melalui AuthContext dan dilindungi dengan ProtectedRoute untuk membatasi akses halaman tertentu hanya untuk pengguna yang sudah login.
Katalog & Detail Produk Menampilkan daftar produk di halaman utama (home.jsx) menggunakan komponen produkcard.jsx, dengan halaman detail produk (Detailproduk.jsx).
Keranjang Belanja Pengguna dapat menambahkan produk ke keranjang (Keranjang.jsx), dikelola melalui Keranjangcontext.jsx.
Riwayat Pesanan Halaman RiwayatPesanan.jsx menampilkan daftar pesanan yang pernah dibuat pengguna.
Halaman 404 Halaman Notfound.jsx ditampilkan ketika rute yang diakses tidak ditemukan.

Cara instalasi =

Sebelum menginstal proyek ini, pastikan sudah terpasang:

-Node.js versi 18 ke atas
-npm 
-Git 

1.Clone repository
bash
   git clone https://github.com/username/minishop.git
   cd minishop
2.Install dependencies
bash
   npm install


Menjalankan Proyek =

1.Jalankan aplikasi web :

bash
npm run dev

2.Aplikasi dapat diakses melalui browser di:

http://localhost:3000



 gambaran umum struktur folder proyek MiniShop :

minishop/
├── public/                        # Aset publik statis (favicon, dll)
├── src/
│   ├── assets/                    # Aset seperti gambar/ikon yang diimpor ke komponen
│   ├── components/                # Komponen UI yang dapat digunakan ulang
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── produkcard.jsx         # Kartu tampilan produk
│   │   ├── produkcard.test.jsx    # Unit test untuk produkcard
│   │   └── ProtectedRoute.jsx     # Pembatas akses rute untuk user yang belum login
│   ├── context/                   # React Context untuk state global
│   │   ├── AuthContext.jsx        # Context untuk autentikasi (login/register)
│   │   ├── Keranjangcontext.jsx   # Context untuk keranjang belanja
│   │   └── Keranjangcontext.test.jsx
│   ├── data/
│   │   └── produk.js              # Data produk statis (dummy)
│   ├── hooks/
│   │   └── useLocalStorage.js     # Custom hook untuk sinkronisasi state dengan localStorage
│   ├── img/                       # Gambar tambahan
│   ├── pages/                     # Halaman-halaman utama aplikasi
│   │   ├── Detailproduk.jsx       # Halaman detail produk
│   │   ├── Formlogin.jsx          # Halaman login
│   │   ├── Formlogin.test.jsx
│   │   ├── Formregis.jsx          # Halaman registrasi
│   │   ├── home.jsx               # Halaman utama / katalog produk
│   │   ├── Keranjang.jsx          # Halaman keranjang belanja
│   │   ├── Notfound.jsx           # Halaman 404
│   │   └── RiwayatPesanan.jsx     # Halaman riwayat pesanan
│   ├── App.jsx                    # Komponen root aplikasi & routing
│   ├── App.css
│   ├── index.css
│   ├── main.jsx                   # Entry point aplikasi React
│   └── setupTests.js              # Konfigurasi awal untuk testing
├── .gitignore
├── eslint.config.js               # Konfigurasi ESLint
├── index.html                     # Template HTML
└── package.json
