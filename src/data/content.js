// 1. Data Navigasi
export const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profil" },
  { name: "Artefak", href: "/artefak" },
  { name: "Seminar", href: "/seminar" },
  { name: "Dokumentasi", href: "/dokumentasi" },
  { name: "Misi", href: "/misi" },
];

// 2. Data Artefak & Analisis Lengkap
export const ARTEFAK_LIST = [
  {
    id: 1,
    title: "Modul Ajar Project IoT kelas X",
    description: "Modul ajar ini disusun sebagai panduan pembelajaran materi Project IoT berbasis ESP32/ESP8266 untuk peserta didik kelas X TKJ.",
    pdfUrl: "/docs/modul_ajar.pdf",
    tags: ["IoT", "Informatika"],
    analysis: {
      context: "Modul ajar ini disusun untuk mendukung pembelajaran Dasar Program Keahlian (DPK) kelas X TKJ pada materi Internet of Things (IoT). Pembelajaran dirancang menggunakan model Project Based Learning (PjBL) agar peserta didik tidak hanya memahami konsep IoT, tetapi juga mampu merancang, membuat, dan mempresentasikan proyek IoT secara berkelompok.",
      strengths: "Modul ajar ini memberikan pengalaman belajar yang berpusat pada peserta didik melalui kegiatan proyek nyata. Selain mengembangkan keterampilan teknis, pembelajaran juga melatih kemampuan kolaborasi, komunikasi, berpikir kritis, dan kreativitas peserta didik.",
      weaknesses: "Kendala yang dihadapi dalam penyusunan modul adalah menyesuaikan alokasi waktu dengan kompleksitas proyek serta memastikan ketersediaan alat dan bahan yang dibutuhkan oleh setiap kelompok.",
      reflection: "Melalui penyusunan modul ini, saya belajar bahwa perencanaan pembelajaran harus mempertimbangkan karakteristik peserta didik, kesiapan sarana, dan tujuan pembelajaran agar kegiatan belajar dapat berjalan secara efektif.",
      improvement: "Ke depannya, modul ini akan disempurnakan dengan menambahkan alternatif proyek yang lebih beragam, penguatan diferensiasi pembelajaran, serta penggunaan media interaktif untuk meningkatkan keterlibatan peserta didik dalam pembelajaran."
    }
  },
  {
    id: 2,
    title: "Media PPT IoT",
    description: "Media pembelajaran berupa PowerPoint digunakan untuk membantu penyampaian materi Project IoT secara lebih menarik dan mudah dipahami.",
    pdfUrl: "/docs/media_ajar.pdf",
    tags: ["Wordwall", "Evaluasi"],
    analysis: {
      context: "Media evaluasi formatif yang dirancang untuk mengurangi kecemasan siswa saat ujian.",
      strengths: "Meningkatkan partisipasi siswa hingga 90% di dalam kelas.",
      weaknesses: "Ketergantungan pada koneksi internet sekolah yang terkadang tidak stabil.",
      reflection: "Siswa lebih cepat memahami konsep melalui trial and error dalam game.",
      improvement: "Menyediakan versi offline (cetak) sebagai backup jika internet bermasalah."
    }
  },
  {
    id: 3,
    title: "LKPD Siswa Minggu 1-4",
    description: "LKPD disusun sebagai panduan kegiatan peserta didik selama proses pembelajaran dan pengerjaan proyek IoT",
    pdfUrl: "/docs/lkpd_iot.pdf",
    tags: ["LKPD"],
    analysis: {
      context: "Hasil kerja siswa yang menunjukkan perbedaan tingkat pemahaman (Tinggi, Sedang, Rendah).",
      strengths: "Siswa kelompok rendah merasa terbantu dengan scaffolding yang diberikan.",
      weaknesses: "Kelompok tinggi butuh tantangan lebih agar tidak cepat bosan.",
      reflection: "Keadilan dalam mengajar bukan berarti memberi hal yang sama, tapi memberi apa yang dibutuhkan.",
      improvement: "Menyiapkan 'Extension Task' bagi siswa yang selesai lebih cepat."
    }
  }
];

// // 3. Data Penilaian
// export const DATA_NILAI = [
//   { siklus: "Siklus 1", nilai: 82, catatan: "Perlu penguatan pada manajemen kelas dan instruksi." },
//   { siklus: "Siklus 2", nilai: 88, catatan: "Penggunaan media sudah sangat interaktif dan membantu siswa." },
//   { siklus: "Siklus 3", nilai: 95, catatan: "Sangat baik dalam menerapkan pembelajaran berdiferensiasi." },
// ];

// 4. Data Dokumentasi 
export const DOKUMENTASI_LIST = [
  {
    id: 1,
    title: "Diskusi Sebelum Melakukan Proyek IoT",
    category: "Mengajar",
    description: "Diskusi dengan siswa terkait apa itu IoT",
    images: ["/images/diskusi_sebelum_iot.jpg"],
  },
  {
    id: 2,
    title: "Pendampingan Praktik IoT",
    category: "Mengajar",
    description: "Mendampingi siswa kelas X dalam prakti proyek IoT",
    images: [
      "/images/mendampingi_siswa_praktik.jpg",
      "/images/mendampingi_siswa_praktik2.jpg",
      "/images/mendampingi_siswa_praktik3.jpg",
    ],
  },
  {
    id: 3,
    title: "Mendampingi Siswa Secara Scaffolding",
    category: "Mengajar",
    description: "Mendampingi siswa dengan memberikan scaffolding agar siswa dapat menyelesaikan proyek IoT dengan baik",
    images: ["/images/mendampingi_siswa_praktik1.jpg"],
  },
  {
    id: 4,
    title: "Presentasi Hasil Proyek IoT",
    category: "Mengajar",
    description: "Siswa mempresentasikan hasil proyek IoT di Aula SMKN 2 Salatiga",
    images: ["/images/presentasi_hasil.jpg"],
  },
  {
    id: 5,
    title: "Contoh Proyek IoT Siswa",
    category: "Mengajar",
    description: "Beberapa contoh proyek IoT yang telah dibuat oleh siswa di kelas X TKJ",
    images: [
      "/images/hasil_projek1.jpg",
      "/images/hasil_projek2.jpg",
      "/images/hasil_projek3.jpg",
      "/images/hasil_projek4.jpg",
    ],
  },
  {
    id: 6,
    title: "Diskusi dengan Guru Pamong dan DPL",
    category: "Diskusi",
    description: "Diskusi dan konsultasi bimbingan bersama Guru Pamong serta DPL mengenai perkembangan PPL",
    images: [
      "/images/diskusi-guru-pamong.jpeg",
      "/images/diskusi_dpl.jpeg",
    ],
  },
];

// // 5. Data Visi & Misi
export const MISI_DATA = {
  visi: "Menjadi pendidik Informatika yang inovatif, adaptif, dan mampu menuntun peserta didik mencapai kemandirian digital berdasarkan nilai-nilai luhur Pancasila.",
  misi: [
    "Mengembangkan perangkat pembelajaran yang relevan dengan perkembangan teknologi terkini (TPACK).",
    "Menciptakan lingkungan belajar yang aman, nyaman, dan berpihak pada keunikan setiap individu.",
    "Membangun kolaborasi aktif dengan rekan sejawat dan komunitas praktisi untuk pengembangan diri.",
    "Mengintegrasikan pendidikan karakter dalam setiap proses pembelajaran digital."
  ],
  kompetensi: [
    { title: "Pedagogik", desc: "Menguasai teori belajar dan prinsip pembelajaran yang mendidik.", icon: "BookOpen", color: "bg-neutral-100 text-neutral-900 border border-neutral-200" },
    { title: "Profesional", desc: "Menguasai materi Informatika secara luas dan mendalam.", icon: "Cpu", color: "bg-neutral-100 text-neutral-900 border border-neutral-200" },
    { title: "Sosial", desc: "Mampu berkomunikasi secara efektif dengan orang tua dan masyarakat.", icon: "Users", color: "bg-neutral-100 text-neutral-900 border border-neutral-200" },
    { title: "Kepribadian", desc: "Menjadi teladan dengan integritas dan etika yang kuat.", icon: "Shield", color: "bg-neutral-100 text-neutral-900 border border-neutral-200" }
  ],
  karakter: ["Inovatif", "Empati", "Disiplin", "Kolaboratif", "Reflektif"]
};

// 6. Data Seminar PPG
export const SEMINAR_LIST = [
    {
    id: "visi-pendidikan-indonesia",
    title: "Visi untuk Pendidikan di Indonesia & Sebagai Guru",
    category: "Visi & Desain Masa Depan",
    subtitle: "Mewujudkan Generasi Digital Berakar Budi Pekerti Luhur",
    description: "Manifesto visi pendidikan nasional di era revolusi kecerdasan buatan (AI) serta cetak biru peran diri sebagai guru Informatika yang transformatif dan humanis.",
    pdfUrl: "/docs/LK1.pdf",
    tags: ["Visi Nasional", "Era AI & Digital", "Profil Pelajar Pancasila"],
    analysis: {
      context: "Pendidikan Indonesia masa depan menghadapi konvergensi kemajuan teknologi informasi, tantangan otomatisasi AI, dan urgensi penguatan karakter kebangsaan.",
      strengths: "Memformulasikan model pembelajaran Informatika yang tidak hanya mengajarkan 'bagaimana teknologi bekerja', melainkan 'bagaimana teknologi dimanfaatkan secara etis untuk memecahkan masalah kemanusiaan'.",
      weaknesses: "Tantangan disparitas sarana teknologi antar daerah yang memerlukan strategi adaptasi pembelajaran fleksibel (low-tech & high-concept).",
      reflection: "Teknologi adalah pengungkit (leverage), tetapi sentuhan kemanusiaan, keteladanan budi pekerti, dan cinta kasih guru tetap menjadi jiwa pendidikan yang tidak akan pernah tergantikan.",
      improvement: "Menginisiasi modul ajar literasi etika kecerdasan buatan (AI Ethics) yang ramah siswa SMK untuk membentengi generasi muda dari distorsi digital."
    }
  },
    {
    id: "lk-refleksi-smt-1",
    title: "LK Refleksi Semester 1",
    category: "Refleksi Semester",
    subtitle: "Fondasi Filosofis & Pemahaman Karakteristik Peserta Didik",
    description: "Analisis reflektif mata kuliah inti semester 1 (Filosofi Pendidikan Indonesia, Pemahaman Peserta Didik & Pembelajarannya, Prinsip Pengajaran & Asesmen I) serta observasi PPL I.",
    pdfUrl: "/docs/LK2.pdf",
    tags: ["Semester 1", "Filosofi KHD", "PPL I"],
    analysis: {
      context: "Refleksi perkuliahan semester 1 yang berfokus pada dekonstruksi dan rekonstruksi pemikiran tentang hakikat pendidikan. Mengintegrasikan pemikiran Ki Hajar Dewantara mengenai sistem 'Among' dan kerangka Understanding by Design (UbD) dalam memetakan asesmen diagnostik di SMK Negeri 2 Salatiga.",
      strengths: "Mampu menyusun instrumen asesmen diagnostik kognitif dan non-kognitif awal untuk memetakan kesiapan belajar (readiness) peserta didik kelas X pada rumpun Teknik Komputer dan Jaringan.",
      weaknesses: "Penyesuaian diferensiasi proses masih menemui kendala pada keragaman gaya belajar siswa yang heterogen di kelas kejuruan.",
      reflection: "Saya menyadari bahwa mengajar bukan semata menyajikan materi teknis informatika, melainkan proses menuntun potensi bawaan anak agar mampu mencapai kemerdekaan berpikir.",
      improvement: "Memperkuat variasi scaffolding bertahap dan lembar observasi afektif untuk memantau kemajuan peserta didik secara linier."
    }
  },
  {
    id: "lk-refleksi-smt-2",
    title: "LK Refleksi Semester 2",
    category: "Refleksi Semester",
    subtitle: "Implementasi TPACK, PjBL IoT, & Kepemimpinan Pembelajaran",
    description: "Evaluasi kritis pelaksanaan pembelajaran mandiri PPL II, integrasi teknologi mutakhir melalui Project IoT ESP32, serta penerapan Pembelajaran Sosial Emosional (PSE).",
    pdfUrl: "/docs/LK3.pdf",
    tags: ["Semester 2", "TPACK & IoT", "PPL II"],
    analysis: {
      context: "Pendalaman praktik pembelajaran mandiri pada semester 2 dengan penekanan pada penerapan model Project-Based Learning (PjBL) terintegrasi IoT serta asesmen autentik berkelanjutan.",
      strengths: "Berhasil menciptakan atmosfer belajar aktif di laboratorium dengan keterlibatan proyek nyata hingga 90%+ dan penguatan keterampilan 4C (Critical thinking, Creativity, Collaboration, Communication).",
      weaknesses: "Waktu troubleshooting sintaks kode dan pengkabelan mikrokontroler memerlukan manajemen alokasi waktu sesi lab yang lebih presisi.",
      reflection: "Sebagai pendidik era digital, fleksibilitas guru sebagai fasilitator dan arsitek lingkungan belajar yang aman sangat menentukan keberhasilan eksperimen siswa.",
      improvement: "Menyediakan panduan mandiri troubleshooting sirkuit IoT dan membentuk sistem mentor sebaya (peer tutoring) di tiap kelompok."
    }
  },
  {
    id: "refleksi-pengalaman-ppg",
    title: "Refleksi Pengalaman Belajar Selama Mengikuti PPG",
    category: "Refleksi",
    subtitle: "Metamorfosis Paradigma Menjadi Guru Profesional Abad 21",
    description: "Sintesis holistik transformasi kompetensi pedagogik, kepribadian, sosial, dan profesional selama menempuh pendidikan profesi di LPTK UKSW.",
    pdfUrl: "/docs/Refleksi.pdf",
    tags: ["Sintesis PPG", "Transformasi Diri", "Guru Profesional"],
    analysis: {
      context: "Sintesis menyeluruh perjalanan belajar dari orientasi akademik, telaah kurikulum mendalam, microteaching, uji komprehensif, hingga praktik pengalaman lapangan di sekolah mitra.",
      strengths: "Terjadinya pergeseran paradigma mentalitas: dari guru sebagai 'sumber utama pengetahuan' menjadi guru sebagai 'pemandu eksplorasi dan perancang pengalaman belajar yang memerdekakan'.",
      weaknesses: "Tuntutan adaptasi cepat antara beban kurikuler kampus dengan dinamika riil permasalahan siswa di sekolah membutuhkan resiliensi mental yang tinggi.",
      reflection: "Profesi guru adalah profesi kemuliaan yang menuntut komitmen belajar sepanjang hayat (lifelong learner). Integritas, keteladanan, dan empati merupakan modal terdalam yang melampaui kecanggihan teknologi apa pun.",
      improvement: "Melanjutkan dokumentasi portofolio reflektif digital secara mandiri untuk mengkaji keefektifan setiap siklus mengajar di masa depan."
    }
  }
];

