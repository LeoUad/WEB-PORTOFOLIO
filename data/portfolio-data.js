/**
 * DATA PORTOFOLIO PRIBADI - LEO ADI SAPUTRA
 * Anda dapat dengan mudah memperbarui atau menambahkan informasi di file ini.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Leo Adi Saputra",
    studyProgram: "Informatika",
    university: "Universitas Ahmad Dahlan",
    role: "Informatics Student | Aspiring Data Scientist",
    focus: ["Data Science", "Machine Learning", "Data Visualization", "Web Development", "Artificial Intelligence"],
    location: "Yogyakarta, Indonesia",
    status: "Available for Internship & Collaborative Projects",
    bio: "Saya adalah mahasiswa Program Studi Informatika di Universitas Ahmad Dahlan yang memiliki antusiasme mendalam dalam bidang Data Science, Machine Learning, dan rekayasa perangkat lunak. Saya berfokus pada bagaimana data mentah dapat ditransformasikan menjadi wawasan prediktif dan analitik yang bernilai guna mendukung pengambilan keputusan yang tepat.",
    approach: "Pendekatan saya dalam menyelesaikan masalah menggabungkan pemikiran komputasi yang terstruktur, eksplorasi data (EDA) yang teliti, serta eksperimen iteratif dengan model machine learning dan teknologi web modern.",
    goal: "Bercita-cita menjadi seorang Data Scientist profesional yang mampu merancang dan menerapkan solusi analitik berbasis data yang berdampak nyata bagi industri dan masyarakat.",
    email: "adisaputraleo336@gmail.com",
    linkedin: "https://www.linkedin.com/in/leo-adi-saputra-5247bb3a6/",
    github: "https://github.com/LeoUad",
    cvPath: "assets/cv.pdf" // Letakkan file CV Anda di assets/cv.pdf
  },

  skills: [
    {
      category: "Programming",
      description: "Bahasa pemrograman inti untuk komputasi, analitik, dan logika sistem.",
      items: [
        { name: "Python", level: "Core Language", tag: "Primary", desc: "Data analysis, machine learning scripting, automatisasi" },
        { name: "C++", level: "Foundational", tag: "Algorithm", desc: "Logika algoritma, struktur data, efisiensi memori" },
        { name: "Java", level: "Academic", tag: "OOP", desc: "Pemrograman berorientasi objek dan aplikasi terstruktur" },
        { name: "SQL", level: "Core", tag: "Database", desc: "Query relasional, agregasi data, manipulasi database" }
      ]
    },
    {
      category: "Data Science",
      description: "Fondasi metodologi pemrosesan dan ekstraksi pola data.",
      items: [
        { name: "Data Cleaning", level: "Methodology", tag: "Prep", desc: "Penanganan missing values, outlier, dan inkonsistensi format" },
        { name: "Exploratory Data Analysis", level: "Core Workflow", tag: "EDA", desc: "Eksplorasi distribusi, korelasi fitur, dan pola statistik" },
        { name: "Data Preprocessing", level: "Pipeline", tag: "Transform", desc: "Normalisasi data, standardisasi, encoding variabel kategorikal" },
        { name: "Machine Learning", level: "Applied", tag: "Modeling", desc: "Penerapan model analitik prediktif dan evaluasi performa" }
      ]
    },
    {
      category: "Data Visualization",
      description: "Komunikasi visual untuk mengubah data rumit menjadi wawasan yang mudah dicerna.",
      items: [
        { name: "Tableau", level: "BI Tool", tag: "Interactive", desc: "Pembuatan interactive dashboard visual dan visualisasi drill-down" },
        { name: "Matplotlib & Seaborn", level: "Python Lib", tag: "Plotting", desc: "Grafik statistik, heatmap korelasi, histogram, dan boxplot" },
        { name: "Pandas", level: "Data Wrangling", tag: "Core", desc: "Manipulasi dataframe, grouping, filtering, dan aggregasi data" },
        { name: "Streamlit", level: "Web App", tag: "Deployment", desc: "Membangun antarmuka web interaktif untuk model data science" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Algoritma cerdas dan teknik evaluasi kecerdasan buatan.",
      items: [
        { name: "Classification", level: "Supervised", tag: "Core ML", desc: "Klasifikasi data biner dan multi-kelas untuk prediksi" },
        { name: "Naive Bayes", level: "Probabilistic", tag: "Algorithm", desc: "Penerapan teorema Bayes untuk klasifikasi teks dan data fitur" },
        { name: "TF-IDF", level: "NLP Vectorizer", tag: "Text Mining", desc: "Pembobotan kata untuk ekstraksi fitur teks pada klasifikasi" },
        { name: "Model Evaluation", level: "Validation", tag: "Metrics", desc: "Confusion Matrix, Precision, Recall, F1-Score, dan Cross-Validation" }
      ]
    },
    {
      category: "Web Development",
      description: "Pengembangan antarmuka web untuk deployment portofolio dan sistem aplikasi.",
      items: [
        { name: "HTML5 & Semantic Markup", level: "Frontend", tag: "Structure", desc: "Struktur semantik ramah aksesibilitas dan SEO" },
        { name: "CSS3 & Modern Layouts", level: "Styling", tag: "Design", desc: "Flexbox, CSS Grid, Glassmorphism, Responsive UI, Animasi" },
        { name: "JavaScript (ES6+)", level: "Scripting", tag: "Interactive", desc: "Manipulasi DOM, asynchronous fetch, modular code" }
      ]
    },
    {
      category: "Tools & Environment",
      description: "Perangkat lunak dan ekosistem kerja pengembangan modern.",
      items: [
        { name: "Google Colab", level: "Cloud Notebook", tag: "Research", desc: "Eksperimen data science berbasis GPU dan visualisasi interaktif" },
        { name: "Visual Studio Code", level: "Primary IDE", tag: "Editor", desc: "Editor kode utama untuk pengembangan Python, C++, dan Web" },
        { name: "Git & GitHub", level: "Version Control", tag: "VCS", desc: "Pengelolaan repositori kode, branching, dan kolaborasi" },
        { name: "Jupyter Notebook", level: "Local Environment", tag: "Notebook", desc: "Eksplorasi data interaktif dan dokumentasi analisis" }
      ]
    }
  ],

  projects: [
    {
      id: "futsal-naive-bayes",
      title: "Klasifikasi Penggunaan Sepatu Futsal Berdasarkan Posisi Pemain Menggunakan Naive Bayes",
      category: "Machine Learning",
      categoryDisplay: "Machine Learning / Data Science",
      badge: "Academic Project",
      thumbnail: "assets/images/project-futsal.jpg",
      summary: "Model klasifikasi cerdas yang merekomendasikan jenis sepatu futsal optimal berdasarkan posisi bermain di lapangan (Anchor, Flank, Pivot, Goalkeeper) menggunakan analisis probabilitas Naive Bayes.",
      problem: "Pemain futsal kerap mengalami kesulitan dalam memilih tipe sepatu yang sesuai dengan karakteristik peran dan posisi mereka di lapangan—seperti kebutuhan grip sol, bobot, fleksibilitas kontrol, dan bantalan kaki. Kesalahan pemilihan sepatu dapat menurunkan performa bermain serta meningkatkan risiko cedera.",
      solution: "Mengembangkan model machine learning berbasis algoritma Naive Bayes yang memetakan atribut pemain (posisi taktis, gaya permainan, tipe lapangan sol IC/TF, dan bobot tubuh) untuk menghasilkan rekomendasi jenis sepatu dengan tingkat probabilitas tertinggi.",
      technologies: ["Python", "Scikit-Learn", "Naive Bayes", "Pandas", "NumPy", "Matplotlib"],
      insights: [
        "Pemain posisi Pivot memerlukan sol dengan stabilitas tinggi dan kontrol sentuhan kuat untuk pivot turn.",
        "Pemain posisi Flank memprioritaskan bobot sepatu yang ultra-ringan dan fleksibilitas akselerasi cepat.",
        "Algoritma Naive Bayes terbukti efektif mengolah data kategorikal karakteristik pemain dengan waktu inferensi instan."
      ],
      methodology: "Data Collection → Data Preprocessing (Cleaning & Encoding) → Feature Selection → Train/Test Split (80:20) → Model Training (Gaussian/Categorical Naive Bayes) → Evaluasi (Confusion Matrix & Accuracy).",
      results: "Model berhasil mengklasifikasikan kecocokan posisi dengan pola probabilitas yang koheren, memberikan panduan rekomendasi yang terstruktur bagi para pegiat olahraga futsal.",
      learnings: "Memperdalam pemahaman tentang penanganan probabilitas nol (Laplace Smoothing), teknik encoding fitur kategorik, serta pentingnya validasi silang pada dataset berukuran terukur.",
      githubUrl: "https://github.com/LeoUad/futsal-shoe-classification-nb",
      demoUrl: "#", // Placeholder demo
      hasDemo: false
    },
    {
      id: "tableau-interactive-bi",
      title: "Visualisasi dan Analisis Data Interaktif Menggunakan Tableau",
      category: "Data Visualization",
      categoryDisplay: "Data Visualization & BI",
      badge: "Data Analytics",
      thumbnail: "assets/images/project-tableau.jpg",
      summary: "Dashboard Business Intelligence interaktif berskala eksekutif untuk mengeksplorasi tren metrik kunci, pemetaan wilayah geografis, dan segmentasi performa secara mendalam.",
      problem: "Data operasional dan penjualan mentah dalam format tabular spreadsheet seringkali membingungkan pemangku kepentingan untuk melihat pola tren, anomali regional, dan kontributor profit utama secara sekilas.",
      solution: "Membangun dashboard visual analitik multidimensi di Tableau Public dengan integrasi KPI cards, peta geografis interaktif, breakdown kategori, dan filter drill-down dinamis.",
      technologies: ["Tableau Public", "Excel / CSV Dataset", "Data Modeling", "Business Intelligence", "Data Storytelling"],
      insights: [
        "Visualisasi drill-down mempermudah identifikasi wilayah dengan rasio konversi tinggi dalam hitungan detik.",
        "Pengelompokan kuadran membantu memisahkan produk bermargin tinggi namun berpenjualan rendah dengan produk pendorong volume.",
        "Penerapan hierarki visual yang jelas meningkatkan kecepatan pemahaman insight oleh audiens non-teknis."
      ],
      methodology: "Data Ingestion & Cleaning → Data Modeling & Relationship → Calculated Fields → Worksheet Visual Design → Dashboard Layout Composition & Interactivity Filters → Storyboarding.",
      results: "Dashboard menyediakan eksplorasi visual yang mulus, responsif terhadap filter regional dan kategori produk secara real-time.",
      learnings: "Menguasai prinsip storytelling dengan data, pemilihan jenis grafik yang tepat (bukan sekadar estetika), dan optimasi performa dashboard visual.",
      githubUrl: "https://public.tableau.com/app/profile/leoadisaputra", // Placeholder link Tableau
      demoUrl: "https://public.tableau.com/app/profile/leoadisaputra",
      hasDemo: true
    },
    {
      id: "apotek-ecommerce-web",
      title: "Web E-Commerce Apotek Sederhana (PharmaCare)",
      category: "Web Development",
      categoryDisplay: "Web Development",
      badge: "Course Project",
      thumbnail: "assets/images/project-pharmacy.jpg",
      summary: "Platform pemesanan dan katalog produk kesehatan daring yang menyediakan kemudahan pencarian obat, filter kategori, keranjang belanja interaktif, dan estimasi biaya secara terstruktur.",
      problem: "Masyarakat membutuhkan kemudahan mengecek ketersediaan obat dan informasi dosis dasar tanpa harus mengantre lama di apotek fisik, terutama untuk obat umum dan suplemen harian.",
      solution: "Merancang dan membangun antarmuka web e-commerce apotek dengan antarmuka yang ramah pengguna, navigasi cepat, manajemen state keranjang belanja (cart drawer), dan simulasi checkout aman.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Responsive Web Design", "DOM Manipulation", "LocalStorage"],
      insights: [
        "Pengalaman pengguna (UX) yang bersih dan bebas distraksi sangat krusial dalam pembelian produk medis.",
        "Fitur pencarian instan dan tag kategori mengurangi waktu penemuan obat hingga 60%.",
        "Pemanfaatan LocalStorage memungkinkan sesi keranjang belanja pengguna tetap tersimpan meski halaman di-refresh."
      ],
      methodology: "User Journey Mapping → Wireframing & Responsive UI Layout → State Management untuk Cart → Form Input Validation → Cross-Device Testing.",
      results: "Aplikasi berjalan lancar di desktop dan perangkat mobile dengan waktu pemuatan instan tanpa dependensi pihak ketiga yang memberatkan.",
      learnings: "Meningkatkan kemampuan pemecahan masalah dalam struktur state frontend, modularitas kode JavaScript, dan penanganan event listener yang efisien.",
      githubUrl: "https://github.com/LeoUad/simple-pharmacy-ecommerce",
      demoUrl: "#",
      hasDemo: false
    },
    {
      id: "data-processing-cpp-python",
      title: "Sistem Pengolahan & Analisis Data Penjualan (Python & C++)",
      category: "Programming",
      categoryDisplay: "Programming & Algorithm",
      badge: "Computational Project",
      thumbnail: "assets/images/project-dataprocessing.jpg",
      summary: "Implementasi algoritma pemrosesan data bervolume tinggi dengan fokus pada efisiensi waktu komputasi, struktur data optimal, dan perbandingan performa antara Python dan C++.",
      problem: "Pemrosesan sekumpulan berkas data transaksi berukuran besar memerlukan pendekatan algoritma yang efisien agar tidak membebani memori dan membutuhkan waktu eksekusi yang lambat.",
      solution: "Membangun modul pengolahan data menggunakan struktur data teroptimasi (Hash Maps, Trees, dan Dynamic Arrays) pada C++ untuk komputasi cepat, dipadukan dengan script Python untuk pelaporan analitik.",
      technologies: ["Python", "C++", "Data Structures", "Sorting Algorithms", "File I/O Streams", "Memory Profiling"],
      insights: [
        "Implementasi C++ menghasilkan efisiensi waktu pemrosesan hingga beberapa kali lebih cepat pada operasi pengurutan intensif.",
        "Python sangat unggul dalam kecepatan pembuatan prototipe dan integrasi visualisasi grafik.",
        "Pemilihan algoritma pencarian yang tepat (seperti Binary Search) memangkas waktu latensi pencarian data secara drastis."
      ],
      methodology: "Problem Definition → Algorithmic Design → Implementation in C++ (Pointer & Memory Optimization) → Implementation in Python (Benchmarking) → Profiling & Performance Comparison.",
      results: "Program mampu memproses dan mengagregasi puluhan ribu baris data transaksi dengan konsumsi memori yang stabil dan laporan terstruktur.",
      learnings: "Memahami trade-off antara kecepatan eksekusi (C++) vs kecepatan pengembangan (Python), serta manajemen memori tingkat rendah.",
      githubUrl: "https://github.com/LeoUad/data-processing-algorithms",
      demoUrl: "#",
      hasDemo: false
    }
  ],

  experience: [
    {
      type: "education",
      period: "2023 — Sekarang (Aktif)",
      title: "S1 Informatika",
      institution: "Universitas Ahmad Dahlan",
      location: "Yogyakarta, Indonesia",
      description: "Menempuh studi sarjana di Program Studi Informatika dengan fokus minat keilmuan pada Data Science, Machine Learning, dan Rekayasa Perangkat Lunak.",
      highlights: [
        "Mata kuliah relevan: Algoritma & Pemrograman, Struktur Data, Basis Data, Statistika & Probabilitas, Machine Learning, Pemrograman Web.",
        "Aktif mengimplementasikan teori perkuliahan ke dalam proyek praktikum nyata berbasis komputasi dan analisis data."
      ]
    },
    {
      type: "academic",
      period: "2024 — 2025",
      title: "Praktikum & Proyek Akademik Terpandu",
      institution: "Laboratorium Informatika UAD",
      location: "Yogyakarta, Indonesia",
      description: "Menyelesaikan serangkaian tugas besar dan praktikum laboratorium untuk penguatan pemahaman teknis algoritma dan pengolahan data.",
      highlights: [
        "Mengembangkan proyek analisis data menggunakan Python, Scikit-Learn, dan SQL.",
        "Bekerja sama dalam tim untuk menyelesaikan perancangan basis data dan pengujian model prediktif terstruktur."
      ]
    },
    {
      type: "organization",
      period: "2023 — Sekarang",
      title: "Divisi Kominfo (Komunikasi & Informasi)",
      institution: "LSO Futsal (Lembaga Semi Otonom Futsal) — UAD",
      location: "Yogyakarta, Indonesia",
      description: "Aktif dalam kepengurusan Lembaga Semi Otonom (LSO) Futsal pada divisi Komunikasi dan Informasi (Kominfo), bertanggung jawab dalam pengelolaan saluran komunikasi publik, publikasi acara olahraga kampus, serta dokumentasi visual.",
      highlights: [
        "Mengelola publikasi media sosial resmi organisasi, merilis jadwal pertandingan/latihan, serta mengoordinasikan arus informasi antara pengurus, anggota, dan pihak kampus.",
        "Merancang konten visual media informasi, dokumentasi kegiatan/turnamen, serta mendukung kehumasan dan branding positif LSO Futsal UAD."
      ]
    }
  ],

  achievements: [
    {
      id: "p2mw-2024",
      title: "Program Pembinaan Mahasiswa Wirausaha (P2MW) 2024",
      issuer: "Direktorat Pembelajaran dan Kemahasiswaan (Belmawa) Ditjen Diktiristek",
      date: "November 2024",
      category: "Wirausaha & Kompetisi Nasional",
      badge: "Tahapan Bertumbuh",
      image: "assets/images/certificates/cert-p2mw-wirausaha.jpg",
      description: "Peserta resmi Program Pembinaan Mahasiswa Wirausaha (P2MW) 2024 Kemendikbudristek Tahapan Bertumbuh pada Kategori Jasa, Pariwisata, dan Perdagangan lewat usaha kolaboratif 'Sambara Shoes Art ft Panti Asuhan Disabilitas'.",
      credentialUrl: "assets/images/certificates/cert-p2mw-wirausaha.jpg"
    },
    {
      id: "adept-english",
      title: "Ahmad Dahlan English Proficiency Test (ADEPT)",
      issuer: "Ahmad Dahlan Language Center (ADLC) — Universitas Ahmad Dahlan",
      date: "Juli 2026",
      category: "Kemahiran Bahasa Inggris",
      badge: "Skor 510",
      image: "assets/images/certificates/cert-adept-english.jpg",
      description: "Meraih skor total 510 pada tes kemahiran bahasa Inggris ADEPT (Structure & Written Expression: 92, Reading Comprehension: 90, Listening: 36) yang mengonfirmasi kompetensi bahasa Inggris tingkat profesional.",
      credentialUrl: "assets/images/certificates/cert-adept-english.jpg"
    },
    {
      id: "moderator-seminar-2026",
      title: "Moderator Seminar Dampak Program Mahasiswa Berdampak",
      issuer: "Kemendiktisaintek RI & LPPM Universitas Ahmad Dahlan",
      date: "Juni 2026",
      category: "Kepemimpinan & Public Speaking",
      badge: "Moderator Resmi",
      image: "assets/images/certificates/cert-moderator-mahasiswa-berdampak.jpg",
      description: "Bertindak sebagai Moderator pada Seminar Dampak Pelaksanaan Program Mahasiswa Berdampak Tahun Anggaran 2025 yang diselenggarakan oleh Direktorat Penelitian dan Pengabdian kepada Masyarakat Kemendiktisaintek bersama UAD.",
      credentialUrl: "assets/images/certificates/cert-moderator-mahasiswa-berdampak.jpg"
    },
    {
      id: "dicoding-financial-literacy",
      title: "Sertifikat Kelulusan: Introduction to Financial Literacy",
      issuer: "Dicoding Indonesia (ID: GRX5J64MKX0M)",
      date: "Januari 2026",
      category: "Sertifikasi Kompetensi",
      badge: "Dicoding Certified",
      image: "assets/images/certificates/cert-dicoding-financial-literacy.jpg",
      description: "Menyelesaikan kelas kompetensi literasi keuangan Dicoding Academy untuk membekali pemahaman manajemen arus kas, budgeting, dan pertimbangan finansial dalam pengembangan produk digital serta bisnis mandiri.",
      credentialUrl: "https://dicoding.com/certificates/GRX5J64MKX0M"
    },
    {
      id: "literasi-informasi-uad",
      title: "Pelatihan Literasi Informasi: Optimasi Word & Cek Plagiarisme",
      issuer: "Perpustakaan Universitas Ahmad Dahlan",
      date: "Mei 2026",
      category: "Literasi Riset & Akademik",
      badge: "Pelatihan Teknis",
      image: "assets/images/certificates/cert-perpustakaan-literasi-informasi.jpg",
      description: "Mengikuti pelatihan literasi informasi mengenai standarisasi format karya ilmiah, otomatisasi Microsoft Word untuk sitasi & penomoran, serta metodologi pengecekan kesamaan kata (similarity check) secara akurat.",
      credentialUrl: "assets/images/certificates/cert-perpustakaan-literasi-informasi.jpg"
    },
    {
      id: "dahlan-muda-mengabdi-2023",
      title: "Dahlan Muda Mengabdi: Pemberdayaan Masyarakat",
      issuer: "Universitas Ahmad Dahlan & MPM PP Muhammadiyah",
      date: "September 2023",
      category: "Pengabdian Masyarakat & Sosial",
      badge: "Pengabdian Masyarakat",
      image: "assets/images/certificates/cert-dahlan-muda-mengabdi.jpg",
      description: "Berpartisipasi aktif sebagai Peserta dalam kegiatan Dahlan Muda Mengabdi bertajuk 'Peran Dahlan Muda dalam Pemberdayaan Masyarakat Menuju Indonesia Berkemajuan' yang dihelat oleh Bimawa UAD bersama Majelis Pemberdayaan Masyarakat (MPM) PP Muhammadiyah.",
      credentialUrl: "assets/images/certificates/cert-dahlan-muda-mengabdi.jpg"
    }
  ]
};
