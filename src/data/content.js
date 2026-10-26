// 1. Data Navigasi
export const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profil" },
  { name: "Artefak", href: "/artefak" },
  { 
    name: "Seminar", 
    href: "/seminar",
    hasDropdown: true,
    dropdownItems: [
      { key: "semua", label: "Semua Refleksi", desc: "Ringkasan semua bagian seminar & refleksi", href: "/seminar?tab=semua" },
      { key: "visi", label: "Visi Pendidikan (LK 1)", desc: "Visi pendidikan & desain masa depan guru", href: "/seminar?tab=visi" },
      { key: "smt-1", label: "LK Semester 1 (LK 2)", desc: "Refleksi mata kuliah Semester 1", href: "/seminar?tab=smt-1" },
      { key: "smt-2", label: "LK Semester 2 (LK 3)", desc: "Refleksi mata kuliah Semester 2", href: "/seminar?tab=smt-2" },
      { key: "ptk", label: "Jurnal PTK", desc: "Jurnal Penelitian Tindakan Kelas & Pratinjau Dokumen", href: "/seminar?tab=ptk" },
      { key: "ppg", label: "Refleksi PPG", desc: "Refleksi komprehensif pengalaman PPG", href: "/seminar?tab=ppg" },
    ]
  },
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

// 3. Data Penilaian
export const DATA_NILAI = [
  { siklus: "Siklus 1", nilai: 82, catatan: "Perlu penguatan pada manajemen kelas dan instruksi." },
  { siklus: "Siklus 2", nilai: 88, catatan: "Penggunaan media sudah sangat interaktif dan membantu siswa." },
  { siklus: "Siklus 3", nilai: 95, catatan: "Sangat baik dalam menerapkan pembelajaran berdiferensiasi." },
];

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

// 5. Data Visi & Misi
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

// 6. Subtitle panduan tetap untuk 4 Tahap Model 4C
export const FOUR_C_SUBTITLES = {
  connection: "Hubungan materi dengan pengetahuan awal, pengalaman, dan peran sebagai calon guru.",
  challenge: "Tantangan, kesulitan, dan pertanyaan yang mengubah pemahaman.",
  concept: "Konsep, teori, dan prinsip utama serta relevansinya dengan praktik pendidikan.",
  change: "Perubahan sikap, pola pikir, dan tindakan konkret ke depan."
};

// 7. Data Mata Kuliah & Refleksi 4C (Semester 1, Semester 2, Keseluruhan PPG, Visi)
export const SEMESTER_1_COURSES = [
  {
    id: "pembelajaran-mendalam-asesmen-dasar",
    number: "01",
    semester: 1,
    title: "Pembelajaran Mendalam dan Asesmen Dasar",
    code: "PMAD",
    sks: "3 SKS",
    description: "Mempelajari perencanaan pembelajaran yang berorientasi pada pemahaman mendalam, pengalaman belajar yang bermakna, serta penggunaan asesmen sebagai dasar untuk memperbaiki proses pembelajaran.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK2.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Pembelajaran Mendalam",
    fourC: {
      connection: "Sebelum mempelajari mata kuliah ini, saya cenderung memandang pembelajaran dari sisi penyampaian materi dan ketercapaian tujuan pembelajaran. Selama PPL di SMK Negeri 2 Salatiga, saya mulai menyadari bahwa murid tidak selalu memahami materi hanya dengan mendengarkan penjelasan. Pada pembelajaran Dasar-Dasar Teknik Jaringan Komputer dan Telekomunikasi, terutama materi K3LH, murid perlu mengamati lingkungan, mengenali risiko, berdiskusi, dan menerapkan pengetahuan melalui kegiatan nyata.",
      challenge: "Tantangan yang saya rasakan adalah menyusun kegiatan yang tetap bermakna dalam keterbatasan waktu pembelajaran. Dalam satu pertemuan, saya perlu membagi waktu untuk apersepsi, penjelasan materi, diskusi kelompok, praktik, presentasi, dan asesmen. Selain itu, kesiapan murid tidak sama. Ada murid yang cepat memahami instruksi, sedangkan murid lain masih membutuhkan contoh, arahan bertahap, atau pendampingan ketika mengerjakan tugas.",
      concept: "Saya memahami bahwa pembelajaran mendalam tidak hanya menekankan banyaknya materi yang disampaikan, tetapi bagaimana murid membangun pemahaman, menerapkan pengetahuan, dan merefleksikan pengalaman belajarnya. Asesmen juga tidak seharusnya hanya digunakan untuk memberikan nilai akhir. Hasil asesmen awal, pengamatan selama proses, dan penilaian produk dapat membantu guru mengenali kebutuhan murid serta menentukan tindak lanjut pembelajaran.",
      change: "Saya ingin merancang pembelajaran dengan tujuan yang lebih jelas, aktivitas yang saling berkaitan, dan asesmen yang direncanakan sejak awal. Saya juga akan menggunakan hasil asesmen untuk menentukan bentuk bantuan yang dibutuhkan murid. Ketika sebagian murid belum memahami materi, saya tidak langsung mengulang seluruh penjelasan, tetapi berusaha menemukan bagian yang belum dipahami dan memberikan contoh atau pendampingan yang lebih sesuai."
    }
  },
  {
    id: "growth-mindset-pembelajaran",
    number: "02",
    semester: 1,
    title: "Pola Pikir Bertumbuh (Growth Mindset) dalam Pembelajaran",
    code: "GM",
    sks: "2 SKS",
    description: "Mempelajari pentingnya pola pikir bertumbuh dalam menghadapi tantangan, memberikan umpan balik, dan membangun lingkungan belajar yang mendukung perkembangan kemampuan murid.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK2.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Growth Mindset",
    fourC: {
      connection: "Sebelumnya saya sering memandang kemampuan peserta didik dalam logika komputasi atau perakitan rangkaian sebagai talenta bawaan yang bersifat permanen. Materi ini menghubungkan pengalaman saya saat melihat keputusasaan siswa kelas X ketika menghadapi galat kode (error debugging), menyadarkan saya bahwa peran utama guru adalah menumbuhkan keyakinan bahwa inteligensi dapat ditingkatkan melalui usaha yang terarah.",
      challenge: "Tantangan nyata adalah meruntuhkan resistensi psikologis dan rasa malu murid saat melakukan kesalahan di depan teman-temannya. Banyak murid yang enggan mencoba hal baru karena takut dinilai tidak mampu atau takut mendapatkan nilai buruk.",
      concept: "Konsep utama menekankan perbedaan fixed mindset vs growth mindset menurut Carol Dweck: menafsirkan tantangan sebagai peluang belajar, memberikan pujian berorientasi pada proses dan ketekunan (process praise), serta penggunaan kata sakti 'belum' untuk menumbuhkan resiliensi akademik.",
      change: "Saya mulai mengubah gaya interaksi di kelas dengan mengapresiasi proses penalaran siswa, bukan hanya jawaban akhirnya. Saya juga menyusun refleksi mandiri di mana siswa mencatat kesalahan kode yang mereka temukan dan bagaimana mereka berhasil menyelesaikannya secara mandiri."
    }
  },
  {
    id: "computational-thinking",
    number: "03",
    semester: 1,
    title: "Computational Thinking",
    code: "CT",
    sks: "2 SKS",
    description: "Mempelajari cara berpikir sistematis untuk menyelesaikan masalah melalui dekomposisi, pengenalan pola, abstraksi, dan penyusunan algoritma.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK2.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Computational Thinking",
    fourC: {
      connection: "Mengaitkan konsep berpikir komputasional dengan penyelesaian persoalan nyata dalam teknik jaringan komputer dan pemrograman IoT. Computational thinking bukan sekadar memprogram di depan komputer, melainkan cara berpikir analitis yang mendasari literasi digital di era kecerdasan buatan.",
      challenge: "Kesulitan terbesar yang dialami peserta didik adalah pada tahapan abstraksi dan dekomposisi. Mereka sering merasa kewalahan ketika disajikan studi kasus yang kompleks dan kesulitan memisahkan mana informasi penting dan mana detail yang tidak relevan.",
      concept: "Empat pilar utama Computational Thinking: 1) Dekomposisi (memecah problem besar menjadi sub-problem terkelola); 2) Pengenalan Pola (mengidentifikasi kemiripan dengan problem terdahulu); 3) Abstraksi (memusatkan fokus pada prinsip esensial); 4) Perancangan Algoritma (merumuskan langkah-langkah terstruktur dan logis).",
      change: "Mengimplementasikan pembelajaran CT secara kontekstual melalui tantangan unplugged dan studi kasus troubleshoot jaringan. Mengajak peserta didik menggambar alur berpikir (flowchart) dan peta dekomposisi sebelum mulai mengonfigurasi perangkat lunak atau perakitan sensor."
    }
  },
  {
    id: "filosofi-pendidikan-indonesia",
    number: "04",
    semester: 1,
    title: "Filosofi Pendidikan Indonesia",
    code: "FPI",
    sks: "2 SKS",
    description: "Menelaah pemikiran Ki Hajar Dewantara mengenai sistem among, kodrat alam & kodrat zaman, dan kemerdekaan belajar peserta didik.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK1.pdf",
    pdfTitle: "LK 1 - Lembar Refleksi Filosofi Pendidikan Indonesia",
    fourC: {
      connection: "Mengaitkan esensi filosofi Ki Hajar Dewantara tentang 'menuntun segala kodrat' dengan peran pendidik vokasi Informatika. Pendidikan bukan mencetak siswa secara seragam, melainkan menyuburkan benih potensi alami dan bakat digital yang telah mereka miliki agar selaras dengan kodrat zaman abad ke-21.",
      challenge: "Mereduksi paradigma lama yang menganggap sekolah kejuruan hanya berorientasi mekanistik/vokasional semata. Tantangannya adalah mengintegrasikan nilai-nilai budi pekerti, olah rasa, dan kemerdekaan berpikir di tengah padatnya tuntutan kurikulum teknis.",
      concept: "1) Sistem Among ('Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani'). 2) Kodrat Alam dan Kodrat Zaman. 3) Budi Pekerti sebagai keharmonisan cipta, rasa, karsa, dan raga. 4) Tri Sentra Pendidikan (keluarga, sekolah, dan masyarakat).",
      change: "Beralih dari instruktur teknis yang dominan menjadi fasilitator humanis. Menghadirkan iklim kelas yang aman, mendengarkan suara murid (student voice and choice), serta menanamkan etika digital berlandaskan Profil Pelajar Pancasila."
    }
  },
  {
    id: "pemahaman-peserta-didik",
    number: "05",
    semester: 1,
    title: "Pemahaman tentang Peserta Didik dan Pembelajarannya",
    code: "PPDP",
    sks: "3 SKS",
    description: "Memahami tahapan perkembangan kognitif, sosio-emosional, dan profil belajar peserta didik untuk pembelajaran berdiferensiasi.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK2.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Pemahaman Peserta Didik",
    fourC: {
      connection: "Menghubungkan teori perkembangan kognitif (Piaget) dan sosio-kultural (Vygotsky) dengan karakteristik nyata Generasi Z di SMK Negeri 2 Salatiga. Menyadari urgensi pemetaan latar belakang dan modalitas belajar sebelum menetapkan intervensi pedagogik.",
      challenge: "Menghadapi rentang kemampuan awal yang sangat lebar di kelas X TKJ: sebagian siswa sudah mahir coding secara otodidak, sedangkan sebagian lainnya masih kesulitan dengan dasar pengoperasian komputer.",
      concept: "1) Developmentally Appropriate Practice (DAP) dan Culturally Responsive Teaching (CRT). 2) Asesmen Diagnostik (Kognitif & Non-Kognitif). 3) Zone of Proximal Development (ZPD) & Scaffolding. 4) Pembelajaran Berdiferensiasi (Konten, Proses, Produk).",
      change: "Menghentikan pendekatan seragam. Saya mulai rutin menjalankan asesmen diagnostik di awal bab, merancang lembar kerja bertingkat (scaffolded worksheets), dan mengoptimalkan tutor sebaya (peer tutoring)."
    }
  },
  {
    id: "prinsip-pengajaran-asesmen-1",
    number: "06",
    semester: 1,
    title: "Prinsip Pengajaran dan Asesmen yang Efektif I",
    code: "PPA I",
    sks: "3 SKS",
    description: "Merancang perangkat pembelajaran berbasis Understanding by Design (UbD) dan asesmen autentik berkelanjutan.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK2.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Prinsip Pengajaran & Asesmen I",
    fourC: {
      connection: "Mengintegrasikan kerangka desain mundur (backward design) dalam penyusunan modul ajar Informatika, memastikan setiap asesmen terhubung langsung dengan pemahaman bermakna dan keterampilan esensial yang diharapkan.",
      challenge: "Mengubah kebiasaan lama yang mendahulukan perancangan aktivitas menarik dan media presentasi sebelum menentukan bukti asesmen yang valid dan terukur.",
      concept: "1) Kerangka Backward Design / UbD: Identifikasi Hasil -> Tentukan Bukti Ketercapaian -> Rancang Aktivitas Belajar. 2) Asesmen for, as, and of learning. 3) Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) berbasis rubrik analitik.",
      change: "Menerapkan alur UbD secara konsisten dalam setiap modul ajar. Menyusun rubrik penilaian kinerja praktikum yang transparan dan menyosialisasikannya kepada murid di awal pertemuan."
    }
  },
  {
    id: "ppl-1",
    number: "07",
    semester: 1,
    title: "Praktik Pengalaman Lapangan I (PPL I)",
    code: "PPL I",
    sks: "6 SKS",
    description: "Observasi lingkungan belajar sekolah, asistensi mengajar, dan praktik pembelajaran terbimbing di SMK Negeri 2 Salatiga.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK2.pdf",
    pdfTitle: "LK 2 - Laporan Observasi & Refleksi PPL I",
    fourC: {
      connection: "Menguji seluruh fondasi teori pedagogik dan filosofi ke dalam dinamika nyata kelas kejuruan di SMK Negeri 2 Salatiga, serta berinteraksi intensif dengan guru pamong dan rekan sejawat.",
      challenge: "Mengelola dinamika laboratorium: distraksi perangkat gawai saat praktikum, fluktuasi fokus murid pada jam siang, serta kesiapan fasilitas kelistrikan dan jaringan internet.",
      concept: "1) Siklus Lesson Study (Plan - Do - See) untuk peningkatan mutu berkelanjutan. 2) Manajemen kelas kolaboratif dan iklim kelas aman. 3) Teaching at the Right Level (TaRL).",
      change: "Membangun kesepakatan belajar bersama murid di awal pertemuan, menyusun manajemen waktu praktikum yang disiplin namun fleksibel, serta rutin meminta umpan balik reflektif dari guru pamong."
    }
  }
];

export const SEMESTER_2_COURSES = [
  {
    id: "prinsip-pengajaran-asesmen-2",
    number: "01",
    semester: 2,
    title: "Prinsip Pengajaran dan Asesmen yang Efektif II",
    code: "PPA II",
    sks: "3 SKS",
    description: "Penerapan asesmen berkelanjutan, asesmen formatif adaptif, dan evaluasi hasil belajar berbasis data di kelas kejuruan.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3.pdf",
    pdfTitle: "LK 3 - Lembar Refleksi PPA II",
    fourC: {
      connection: "Melanjutkan penguasaan UbD dengan memfokuskan pada pemanfaatan data asesmen formatif untuk menyesuaikan alur pembelajaran secara adaptif (real-time instructional adaptation).",
      challenge: "Tantangan menganalisis data hasil asesmen formatif harian secara cepat agar dapat segera dijadikan dasar diferensiasi materi pada pertemuan berikutnya.",
      concept: "1) Data-Driven Instruction: Menggunakan data formatif untuk intervensi terfokus. 2) Asesmen portofolio digital berbasis hasil karya nyata. 3) Umpan balik deskriptif tepat waktu (timely descriptive feedback).",
      change: "Memanfaatkan kuis formatif digital interaktif dan lembar refleksi ringkas di akhir jam pelajaran untuk mendeteksi miskonsepsi siswa sebelum berpindah ke materi baru."
    }
  },
  {
    id: "pembelajaran-berdiferensiasi-pse",
    number: "02",
    semester: 2,
    title: "Pembelajaran Berdiferensiasi & Pembelajaran Sosial Emosional",
    code: "PB-PSE",
    sks: "3 SKS",
    description: "Merancang pengalaman belajar yang mengakomodasi gaya belajar, minat, serta kesiapan siswa dengan penguatan 5 kompetensi sosial emosional.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3.pdf",
    pdfTitle: "LK 3 - Lembar Refleksi Diferensiasi & PSE",
    fourC: {
      connection: "Menghubungkan penguasaan teknis IT dengan kematangan sosio-emosional murid, menempatkan kesejahteraan emosional (well-being) sebagai prasyarat utama keberhasilan belajar.",
      challenge: "Mengintegrasikan 5 kompetensi sosial emosional ke dalam materi teknis yang padat tanpa mengurangi kedalaman capaian kurikuler kejuruan.",
      concept: "1) 5 Kompetensi Sosial Emosional (KSE): Kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, pengambilan keputusan bertanggung jawab. 2) Diferensiasi Konten, Proses, Produk.",
      change: "Mengawali kelas dengan teknik STOP / mindfulness, memberikan kebebasan bagi kelompok untuk memilih variasi tema proyek IoT sesuai minat, serta merancang rubrik penilaian kolaborasi."
    }
  },
  {
    id: "ppl-2-iot",
    number: "03",
    semester: 2,
    title: "Praktik Pengalaman Lapangan II (PPL II) & Project IoT",
    code: "PPL II",
    sks: "6 SKS",
    description: "Pelaksanaan pembelajaran mandiri, integrasi teknologi mutakhir melalui Project IoT ESP32, dan bimbingan intensif peserta didik.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3.pdf",
    pdfTitle: "LK 3 - Laporan Refleksi Pelaksanaan PPL II Mandiri",
    fourC: {
      connection: "Menyatukan kerangka TPACK tingkat lanjut dengan model Project-Based Learning (PjBL) pada mata pelajaran Dasar Program Keahlian TKJ di SMK Negeri 2 Salatiga.",
      challenge: "Mengelola kompleksitas sesi perakitan sirkuit sensor mikrokontroler, mengatasi disparitas kecepatan kerja antar kelompok, serta menjaga daya juang siswa saat program gagal dieksekusi.",
      concept: "1) 6 Sintaks PjBL berorientasi produk autentik riil. 2) TPACK (Technological Pedagogical Content Knowledge). 3) Scaffolding pemecahan masalah teknis mandiri.",
      change: "Berperan sebagai konsultan riset dan fasilitator belajar. Menyusun panduan mandiri troubleshooting sirkuit dan menciptakan atmosfer kelas yang merayakan kegagalan sebagai gerbang penemuan baru."
    }
  },
  {
    id: "seminar-ppg",
    number: "04",
    semester: 2,
    title: "Seminar Pendidikan Profesi Guru",
    code: "SEMINAR",
    sks: "2 SKS",
    description: "Refleksi komprehensif, penyusunan portofolio digital, dan diseminasi hasil praktik baik pembelajaran inovatif di hadapan penguji dan rekan sejawat.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3.pdf",
    pdfTitle: "LK 3 - Refleksi Portofolio Seminar PPG",
    fourC: {
      connection: "Menghubungkan seluruh artefak pembelajaran, catatan reflektif, dan dokumentasi PPL menjadi narasi transformasi keprofesian guru yang terstruktur dan bermakna.",
      challenge: "Mengkristalisasi ratusan jam pengalaman praktik mengajar ke dalam karya refleksi yang padat, kritis, dan berorientasi pada perbaikan nyata mutu pendidikan di masa depan.",
      concept: "1) Pendidik Reflektif Sepanjang Hayat (Lifelong Reflective Practitioner). 2) Diseminasi Praktik Baik (Best Practices Sharing). 3) Portofolio Berbasis Bukti (Evidence-Based Portfolio).",
      change: "Membangun komitmen berkelanjutan untuk terus meneliti, mengevaluasi praktik mengajar sendiri, serta aktif berjejaring dalam komunitas belajar guru profesional."
    }
  }
];

// 8. Data Keseluruhan PPG & Visi Pendidikan
export const KESELURUHAN_PPG_DATA = {
  id: "refleksi-keseluruhan-ppg",
  number: "PPG",
  title: "Refleksi Pengalaman Belajar Selama Mengikuti PPG",
  subtitle: "Metamorfosis Paradigma Menjadi Guru Profesional Abad 21",
  description: "Sintesis holistik transformasi kompetensi pedagogik, kepribadian, sosial, dan profesional selama menempuh pendidikan profesi di LPTK UKSW.",
  pdfUrl: "/docs/Refleksi.pdf",
  pdfTitle: "Dokumen Refleksi Komprehensif PPG",
  docCount: 1,
  fourC: {
    connection: "Keterkaitan berkesinambungan antara bimbingan teoritis dosen kampus LPTK UKSW, arahan reflektif guru pamong di SMK Negeri 2 Salatiga, dan penempaan nyata di lapangan dalam mengasah 4 standar kompetensi guru (Pedagogik, Kepribadian, Sosial, Profesional).",
    challenge: "Mengharmonisasikan tuntutan kurikuler akademik, microteaching, uji komprehensif, dan penyusunan modul ajar mendalam dengan ritme dinamika riil permasalahan siswa di sekolah, serta menepis keraguan adaptasi diri sebagai pendidik pemula.",
    concept: "1) Guru Reflektif Sepanjang Hayat (Lifelong Reflective Practitioner): Menilai proses secara kritis berbasis bukti (evidence-based). 2) Guru Pemimpin Pembelajaran (Instructional Leader) yang berpihak pada peserta didik. 3) Kemitraan Komunitas Belajar Profesional (Learning Community). 4) Budi pekerti dan keteladanan pendidik.",
    change: "Mengadopsi pola pikir bertumbuh (growth mindset) yang berakar pada ketulusan mendidik. Menjadikan refleksi kritis pasca-pembelajaran sebagai instrumen wajib perbaikan berkelanjutan, mengutamakan pendekatan welas asih dan dialogis, serta berkomitmen terus mengembangkan inovasi pedagogik digital."
  }
};

export const VISI_PENDIDIKAN_DATA = {
  id: "visi-pendidikan-indonesia",
  number: "VISI",
  title: "Visi untuk Pendidikan di Indonesia & Sebagai Guru",
  subtitle: "Mewujudkan Generasi Digital Berakar Budi Pekerti Luhur",
  description: "Manifesto visi pendidikan nasional di era revolusi kecerdasan buatan (AI) serta cetak biru peran diri sebagai guru Informatika yang transformatif dan humanis.",
  pdfUrl: "/docs/LK1.pdf",
  pdfTitle: "LK 1 - Lembar Visi & Refleksi Pendidikan",
  docCount: 1,
  fourC: {
    connection: "Mengaitkan filosofi pendidikan Ki Hajar Dewantara (menuntun kodrat alam dan kodrat zaman) dengan tantangan era percepatan kecerdasan buatan (AI). Pendidikan Informatika bukan sekadar mengajarkan penguasaan perangkat keras dan perangkat lunak semata, melainkan memandu peserta didik agar memiliki fondasi moral, etika digital, dan karakter luhur Profil Pelajar Pancasila.",
    challenge: "Mereduksi paradigma lama yang memandang sekolah kejuruan (SMK) hanya mencetak lulusan siap kerja mekanistik tanpa daya kritis dan kemerdekaan berpikir. Serta menanggulangi risiko distorsi moral, ketergantungan instan pada AI, dan penurunan daya juang kritis peserta didik.",
    concept: "1) Human-Centered Digital Education: Menempatkan manusia dan kemaslahatan bersama sebagai poros teknologi. 2) Filosofi Among KHD: Memerdekakan potensi alami tanpa memaksa ('Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani'). 3) Etika Kecerdasan Buatan (AI Ethics) dalam kurikulum vokasi. 4) Profil Pelajar Pancasila sebagai kompas moral.",
    change: "Bertransformasi menjadi guru yang tidak hanya transfer materi teknis, tetapi arsitek moral dan pemantik kesadaran kritis. Menghadirkan modul literasi AI yang berimbang, ruang eksplorasi inovasi berbasis empati sosial, serta keteladanan integritas budi pekerti dalam keseharian madani."
  }
};

// 9. Data Jurnal Penelitian Tindakan Kelas (PTK)
export const JURNAL_PTK_DATA = {
  id: "jurnal-ptk",
  number: "PTK",
  title: "Jurnal Penelitian Tindakan Kelas (PTK)",
  subtitle: "Peningkatan Hasil Belajar Siswa Melalui Model Pembelajaran Berbasis Proyek (PjBL)",
  description: "Laporan hasil Penelitian Tindakan Kelas (PTK) pada mata pelajaran Informatika kejuruan di SMK Negeri 2 Salatiga lengkap dengan publikasi naskah artikel jurnal ilmiah.",
  pdfUrl: "/docs/Jurnal_PTK.pdf",
  pdfTitle: "Naskah Jurnal Ilmiah Penelitian Tindakan Kelas (PTK)",
  docCount: 1,
  hasReflection: false,
  isJournal: true,
  metadata: {
    peneliti: "Tantri Fadhillah Asri, S.Kom",
    sekolah: "SMK Negeri 2 Salatiga",
    mataPelajaran: "Dasar-Dasar Program Keahlian (DPK)",
    sasaran: "Kelas X TKJ A",
    siklus: "2 Siklus ",
    abstrak: "Pemahaman media transmisi pada siswa kelas X Teknik Komputer dan Jaringan (TKJ) belum merata sehingga diperlukan pembelajaran yang menghubungkan konsep dengan pengalaman praktik. Penelitian ini bertujuan mendeskripsikan penerapan pembelajaran mendalam berbasis proyek melalui experiential learning dan menganalisis peningkatan pemahaman media transmisi siswa kelas X TKJ A SMK Negeri 2 Salatiga. Penelitian tindakan kelas dilaksanakan dalam dua siklus terhadap 36 siswa: siklus I berupa penjelasan materi media transmisi dan siklus II berupa proyek praktik crimping kabel LAN. Skor tes pemahaman dianalisis dengan ketuntasan klasikal, uji normalitas Shapiro-Wilk, uji Wilcoxon signed-rank, dan uji N-gain. Ketuntasan klasikal meningkat dari 58,33% pada pra siklus menjadi 75,00% pada siklus I dan 91,67% pada siklus II. Data tidak berdistribusi normal (p < 0,05) dan uji Wilcoxon menunjukkan peningkatan yang signifikan pada seluruh pasangan tahap (p = 0,0269; 0,0020; dan 0,0264). Rata-rata N-gain sebesar 0,442 (kurang efektif) pada siklus I dan 0,590 (cukup efektif) pada siklus II, keduanya berkategori sedang. Pembelajaran mendalam berbasis proyek melalui experiential learning meningkatkan pemahaman media transmisi secara bertahap, dan praktik crimping meningkatkan efektivitas tindakan.",
    hasilSiklus: [
      { siklus: "Pra-Siklus", ketuntasan: "58,33%", fokus: "Pretest Pemahaman Materi Media Transmisi"},
      { siklus: "Siklus I", ketuntasan: "75%", fokus: "Materi Media Transmisi berbantuan krimpinglab" },
      { siklus: "Siklus II", ketuntasan: "91,67%", fokus: "Praktik Krimping Kabel LAN" }
    ]
  }
};

// 10. Kompatibilitas SEMINAR_SECTIONS & SEMINAR_LIST untuk referensi komponen lain
export const SEMINAR_SECTIONS = [
  { key: "semua", label: "Semua Refleksi", desc: "Ringkasan semua bagian seminar & refleksi" },
  { key: "smt-1", label: "Semester 1", desc: "Refleksi mata kuliah Semester 1" },
  { key: "smt-2", label: "Semester 2", desc: "Refleksi mata kuliah Semester 2" },
  { key: "ptk", label: "Jurnal PTK", desc: "Jurnal Penelitian Tindakan Kelas & Dokumen" },
  { key: "ppg", label: "Keseluruhan PPG", desc: "Refleksi pengalaman belajar selama PPG" },
  { key: "visi", label: "Visi Pendidikan", desc: "Visi untuk pendidikan & peran guru" },
];

export const SEMINAR_LIST = [
  {
    id: "visi-pendidikan-indonesia",
    section: "visi",
    sectionLabel: "Visi",
    title: VISI_PENDIDIKAN_DATA.title,
    category: "Visi & Desain Masa Depan",
    subtitle: VISI_PENDIDIKAN_DATA.subtitle,
    description: VISI_PENDIDIKAN_DATA.description,
    pdfUrl: VISI_PENDIDIKAN_DATA.pdfUrl,
    tags: ["Visi Nasional", "Refleksi 4C", "Era AI & Digital", "Profil Pelajar Pancasila"],
    fourC: VISI_PENDIDIKAN_DATA.fourC
  },
  {
    id: "lk-refleksi-smt-1",
    section: "smt-1",
    sectionLabel: "Semester 1",
    title: "LK Refleksi Semester 1",
    category: "Refleksi Semester 1",
    subtitle: "Fondasi Filosofis, Pemahaman Peserta Didik & Praktik Terbimbing",
    description: "Analisis reflektif mata kuliah inti semester 1 dengan integrasi kerangka refleksi 4C (Connection, Challenge, Concept, Change).",
    pdfUrl: "/docs/LK2.pdf",
    tags: ["Semester 1", "Refleksi 4C", "Filosofi KHD", "PPL I"],
    fourC: SEMESTER_1_COURSES[0].fourC,
    mataKuliah: SEMESTER_1_COURSES
  },
  {
    id: "lk-refleksi-smt-2",
    section: "smt-2",
    sectionLabel: "Semester 2",
    title: "LK Refleksi Semester 2",
    category: "Refleksi Semester 2",
    subtitle: "Implementasi TPACK, PjBL IoT, & Kepemimpinan Pembelajaran",
    description: "Evaluasi kritis pelaksanaan pembelajaran mandiri PPL II, integrasi teknologi mutakhir melalui Project IoT ESP32, serta penerapan PSE.",
    pdfUrl: "/docs/LK3.pdf",
    tags: ["Semester 2", "Refleksi 4C", "TPACK & IoT", "PPL II"],
    fourC: SEMESTER_2_COURSES[0].fourC,
    mataKuliah: SEMESTER_2_COURSES
  },
  {
    id: "refleksi-pengalaman-ppg",
    section: "ppg",
    sectionLabel: "Keseluruhan PPG",
    title: KESELURUHAN_PPG_DATA.title,
    category: "Refleksi Komprehensif",
    subtitle: KESELURUHAN_PPG_DATA.subtitle,
    description: KESELURUHAN_PPG_DATA.description,
    pdfUrl: KESELURUHAN_PPG_DATA.pdfUrl,
    tags: ["Sintesis PPG", "Refleksi 4C", "Transformasi Diri", "Guru Profesional"],
    fourC: KESELURUHAN_PPG_DATA.fourC
  }
];
