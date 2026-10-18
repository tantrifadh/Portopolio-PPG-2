# E-Portfolio PPL Terbimbing (React.js)

Portofolio digital Program Profesi Guru (PPG) Calon Guru Bidang Studi Informatika — Universitas Kristen Satya Wacana (UKSW) & SMK Negeri 2 Salatiga.

## Teknologi & Arsitektur

- **Framework**: [React 19](https://react.dev) (SPA)
- **Bundler & Tooling**: [Vite](https://vitejs.dev)
- **Routing**: [React Router DOM v7](https://reactrouter.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animasi & Transisi**: [Framer Motion](https://motion.dev)
- **Ikon**: [Lucide React](https://lucide.dev)

## Struktur Proyek

```
├── public/                 # Dokumen PDF perangkat, modul ajar, dan foto dokumentasi
├── src/
│   ├── components/         # Komponen UI React (Navbar, Footer, Modal, Cards, Breadcrumbs)
│   ├── data/               # Data konten portofolio (content.js)
│   ├── pages/              # Halaman aplikasi React
│   │   ├── Home.jsx        # Beranda (Hero editorial monokrom)
│   │   ├── Profil.jsx      # Biodata & riwayat pendidikan
│   │   ├── Artefak.jsx     # Modul ajar, PPT, LKPD & modal analisis
│   │   ├── Penilaian.jsx   # Hasil evaluasi Guru Pamong & DPL
│   │   ├── Dokumentasi.jsx # Galeri praktik mengajar & bimbingan
│   │   ├── Misi.jsx        # Visi, misi, & kompetensi guru
│   │   └── EPortfolio2.jsx # Refleksi akhir & ideologi pengajaran KHD
│   ├── App.jsx             # Root layout & routing SPA
│   ├── index.css           # Konfigurasi Tailwind & tema warna monokrom
│   └── main.jsx            # Entry point React DOM
├── index.html              # Template HTML utama
└── vite.config.js          # Konfigurasi Vite
```

## Menjalankan Proyek

```bash
# Jalankan development server (port 3000)
npm run dev

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```
