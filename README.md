# Website Portofolio Pribadi Profesional — Leo Adi Saputra

Selamat datang di repositori website portofolio pribadi modern, profesional, elegan, interaktif, dan responsif milik **Leo Adi Saputra** (Mahasiswa Informatika — Universitas Ahmad Dahlan | Aspiring Data Scientist).

Website ini dibangun menggunakan standar **HTML5 Semantik**, **Modern CSS3 (Design Tokens, Glassmorphism & Transisi)**, dan **Modular JavaScript (ES6+)** tanpa ketergantungan framework berat, sehingga sangat cepat dimuat (*fast loading*), ramah SEO (*search engine friendly*), dan dapat dibuka langsung di peramban mana pun atau di-host secara gratis.

---

## ✨ Fitur-Fitur Utama Website

1. **Desain Modern Minimalis Premium**:
   - Palet warna dark navy (`#070b13`, `#0d1322`), aksen electric blue (`#38bdf8`), dan sentuhan ungu lembut (`#818cf8`).
   - Mode ganda: **Dark Mode (Bawaan)** dan **Light Mode** yang tersinkronisasi dengan preferensi pengguna dan tersimpan otomatis di *Local Storage*.
   - Tipografi modern Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).
   - Efek *interactive constellation canvas background* (jaringan partikel data interaktif).

2. **Struktur Navigasi Responsif**:
   - Sticky glassmorphic navbar dengan indikator menu aktif otomatis mengikuti posisi scroll (*Intersection Observer*).
   - Tombol cepat **"Download CV"** dan **"Let's Connect"**.
   - Hamburger drawer menu interaktif untuk smartphone dan tablet.

3. **Hero Section Berdampak Tinggi**:
   - Sapaan hangat dan teks beranimasi typewriter (*"Aspiring Data Scientist"*, *"Informatics Student at UAD"*, dll).
   - Kartu visual berteknologi tinggi dengan avatar profil beresolusi tinggi, lencana mengambang (*floating badges*), dan kartu ringkasan metrik.

4. **Profil & Latar Belakang (About Me)**:
   - Identitas akademik resmi: Mahasiswa S1 Informatika Universitas Ahmad Dahlan (UAD) di Yogyakarta.
   - 3 Pilar filosofi: *Data-Driven Mindset*, *Continuous Learning*, dan *Engineering Excellence*.

5. **Keahlian Terstruktur (Skills & Technologies)**:
   - Dikelompokkan ke dalam 6 kategori: **Programming**, **Data Science**, **Data Visualization**, **AI & Machine Learning**, **Web Development**, dan **Tools & Environment**.
   - Dilengkapi deskripsi kegunaan nyata tanpa menampilkan persentase fiktif.

6. **Proyek Unggulan & Studi Kasus Mendalam (Featured Projects)**:
   - Filter interaktif: *All Projects*, *Data Science*, *Machine Learning*, *Data Visualization*, *Web Development*, *Programming*.
   - Proyek awal yang relevan:
     1. **Klasifikasi Penggunaan Sepatu Futsal Berdasarkan Posisi Pemain Menggunakan Naive Bayes** (Machine Learning)
     2. **Visualisasi dan Analisis Data Interaktif Menggunakan Tableau** (Data Visualization)
     3. **Web E-Commerce Apotek Sederhana (PharmaCare)** (Web Development)
     4. **Sistem Pengolahan & Analisis Data Penjualan (Python & C++)** (Programming)
   - **Interactive Case Study Modal**: Membuka tinjauan komprehensif meliputi latar belakang masalah, solusi, alur metodologi/pipeline, temuan kunci (*key insights*), teknologi, hasil proyek, dan pembelajaran.

7. **Timeline Akademik & Pengalaman**:
   - Garis waktu vertikal modern untuk riwayat pendidikan di Universitas Ahmad Dahlan, proyek praktikum terpandu, dan slot pengalaman organisasi/kepanitiaan yang siap diisi.

8. **Pencapaian & Sertifikasi**:
   - Tampilan kartu sertifikasi dan pelatihan dengan penanda transparan yang mudah diperbarui dengan tautan kredensial resmi Anda.

9. **Kontak Interaktif & Validasi Real-time**:
   - Kartu informasi kontak langsung (Email, LinkedIn, GitHub, Lokasi).
   - Formulir pesan dengan validasi masukan langsung (*real-time validation*), indikator status pengiriman (*loading spinner*), dan konfirmasi notifikasi *Toast*.

10. **Aksesibilitas & Performa**:
    - Mendukung preferensi gerak rendah pengguna (*prefers-reduced-motion*).
    - Tombol *Back to Top* mengambang yang responsif.
    - Hak cipta tahun otomatis (*dynamic copyright year*).

---

## 📁 Struktur Berkas dan Direktori

```text
WEB PORTOFOLIO/
├── index.html                  # Halaman utama aplikasi portofolio (Semantic HTML5)
├── css/
│   └── style.css               # Desain sistem, CSS variables, dark/light mode, animasi
├── js/
│   └── main.js                 # Interaktivitas, canvas partikel, filter, modal, form
├── data/
│   └── portfolio-data.js       # PUSAT DATA: Tempat utama mengedit biodata, proyek, & keahlian
├── assets/
│   ├── cv.pdf                  # Berkas Curriculum Vitae fisik (siap diunduh)
│   └── images/
│       ├── avatar.jpg          # Foto profil profesional
│       ├── project-futsal.jpg  # Mockup proyek klasifikasi futsal
│       ├── project-tableau.jpg # Mockup dashboard Tableau
│       ├── project-pharmacy.jpg# Mockup e-commerce apotek
│       └── project-dataprocessing.jpg # Mockup pemrosesan data Python & C++
└── README.md                   # Petunjuk penggunaan dan pengembangan
```

---

## 🚀 Cara Menjalankan Portofolio

### Cara 1: Buka Langsung di Browser (Paling Cepat)
Anda cukup klik dua kali berkas **`index.html`** pada File Explorer Windows Anda. Website akan langsung terbuka dengan sempurna di browser bawaan Anda (Chrome, Edge, Firefox, dll).

### Cara 2: Menjalankan Local Web Server (Direkomendasikan)
Jika Anda ingin menjalankan server lokal:
1. Buka terminal PowerShell di folder ini.
2. Jalankan perintah berikut:
   ```powershell
   py -m http.server 3000
   ```
3. Buka peramban Anda di alamat: **`http://localhost:3000/`**

---

## ✏️ Panduan Personalisasi & Modifikasi Data

Semua data teks, proyek, dan kontak telah dipisahkan secara rapi ke dalam berkas **`data/portfolio-data.js`**. Anda **tidak perlu** mengutak-atik kode HTML yang rumit!

### 1. Mengganti Foto Profil
- Siapkan foto terbaik Anda dengan rasio persegi (1:1), misalnya ukuran 800x800 piksel.
- Simpan dengan nama **`avatar.jpg`** dan timpa berkas yang ada di dalam folder:
  `assets/images/avatar.jpg`

### 2. Mengganti File CV (Curriculum Vitae)
- Siapkan berkas resume/CV Anda dalam format PDF.
- Simpan dengan nama **`cv.pdf`** di dalam folder:
  `assets/cv.pdf`
- Tombol **"Download CV"** pada website akan langsung mengunduh berkas PDF resmi Anda.

### 3. Mengedit Kontak & Media Sosial
Buka berkas **`data/portfolio-data.js`**, pada bagian `profile`:
```javascript
email: "email.asli.anda@gmail.com",
linkedin: "https://linkedin.com/in/username-anda",
github: "https://github.com/username-anda",
```

### 4. Menambah atau Mengubah Proyek
Pada berkas **`data/portfolio-data.js`**, gulir ke bagian `projects: [...]`. Anda dapat mengubah judul, deskripsi, tautan repositori GitHub, maupun tautan demo proyek Anda dengan sangat mudah.

---

## 🌐 Panduan Publikasi Gratis ke Internet

### Opsi A: GitHub Pages (Paling Mudah & Gratis)
1. Buat repositori baru di akun GitHub Anda (misal: `portofolio-leo`).
2. Unggah seluruh berkas dari folder ini ke repositori tersebut.
3. Masuk ke tab **Settings** repositori > pilih menu **Pages** di bilah kiri.
4. Di bagian *Branch*, pilih **main** dan folder **/(root)**, lalu klik **Save**.
5. Dalam beberapa menit, website Anda akan aktif di: `https://username.github.io/portofolio-leo/`.

### Opsi B: Vercel / Netlify
1. Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com).
2. Hubungkan akun GitHub Anda dan pilih repositori portofolio ini.
3. Klik **Deploy** (tanpa perlu mengisi build command apa pun). Website Anda akan langsung aktif dengan domain HTTPS berkecepatan tinggi secara cuma-cuma.

---

## 💡 Pesan Penutup
Website ini dirancang secara khusus untuk membangun citra profesional **Leo Adi Saputra** sebagai talenta muda berbakat di bidang Informatika dan Data Science Universitas Ahmad Dahlan.

*“Designed with curiosity, built with purpose.”*
