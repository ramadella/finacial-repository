# Kredit Management System

## Deskripsi
Kredit Management System adalah aplikasi berbasis web untuk mengelola angsuran kredit, menghitung cicilan per bulan, dan memantau denda keterlambatan pembayaran. Aplikasi ini dibuat menggunakan React.js dan menghubungkan dengan backend API untuk mengambil data terkait angsuran dan denda.

## Fitur
- **Cek Total Angsuran**: Menampilkan daftar angsuran berdasarkan tanggal yang dipilih.
- **Hitung Kredit**: Menghitung jumlah angsuran per bulan berdasarkan harga kendaraan, uang muka, dan tenor kredit.
- **Cek Denda**: Menampilkan daftar keterlambatan pembayaran beserta total dendanya.

## Instalasi
1. Clone repository ini:
   ```sh
   git clone https://github.com/username/repository.git](https://github.com/ramadella/finacial-repository.git
   ```
2. Masuk ke direktori proyek:
   ```sh
   - cd backend (masuk ke direktori backend)
   - cd vite-project (masuk ke direktori frontend)
   ```
3. Instal dependensi:
   ```sh
   npm install
   ```
4. Jalankan aplikasi:
   ```sh
   npm run start (backend)
   npm run dev (frontend)
   ```

## Konfigurasi Backend
Aplikasi ini mengambil data dari API lokal pada `http://localhost:5000`. Pastikan backend Anda sudah berjalan sebelum menggunakan aplikasi ini.

## Struktur Proyek
```
/
├── src/
│   ├── assets/
│   │   ├── public/
│   │   ├── style.css    
│   ├── components/
│   │   ├── AngsuranList.js      # Komponen untuk menampilkan total angsuran
│   │   ├── CalculateCredit.js   # Komponen untuk menghitung kredit
│   │   ├── TotalPenaltyFee.js   # Komponen untuk menampilkan denda keterlambatan
│   ├── main.js                 # Root render aplikasi
├── package.json
└── README.md
```

## Teknologi yang Digunakan
- **React.js**: Library untuk membangun antarmuka pengguna.
- **React Router**: Untuk navigasi antara halaman.
- **Fetch API**: Untuk mengambil data dari backend.

## Penggunaan
1. Pilih tanggal untuk melihat total angsuran atau denda.
2. Klik tombol **Cari Data** untuk menampilkan informasi.
3. Gunakan fitur **Hitung Kredit** untuk mendapatkan estimasi cicilan per bulan.

## Lisensi
Proyek ini menggunakan lisensi MIT. Silakan lihat file LICENSE untuk informasi lebih lanjut.

