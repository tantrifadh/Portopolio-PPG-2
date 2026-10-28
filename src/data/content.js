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
  {
    id:7,
    title: "Mengajar di Kelas X TKJ A",
    category: "Mengajar",
    description: "Mengajar di kelas X TKJ A",
    images: [
      "/images/dikelas.jpeg",
      "/images/survey1.jpg",
      "/images/survey2.jpg",
    ]
  },
  {
    id:8,
    title: "Praktik Crimping Kabel LAN",
    category: "praktik",
    description: "Praktik Crimping Kabel LAN oleh murid kelas X TKJ A",
    images : [
      "/images/krimp1.jpeg",
      "/images/krimp2.jpeg",
      "/images/krimp3.jpeg",
      "/images/krimp4.jpeg",
      "/images/krimp5.jpeg",
    ]
  }
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
    pdfUrl: "/docs/LK2-PMAD.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Pembelajaran Mendalam",
    fourC: {
      connection: "Materi pemahaman mendalam membuat saya menyadari bahwa peserta didik tidak cukup hanya bisa mendapatkan jawaban benar, tetapi perlu memahami alasan dan prosesnya. Saat mengajar sistem bilangan di kelas X TJKT, saya tidak hanya meminta peserta didik menghafalkan rumus konversi biner ke desimal, tetapi mengajak mereka melihat kaitannya dengan IP address dan cara kerja perangkat digital. Dengan begitu, peserta didik dapat memahami mengapa materi tersebut penting untuk dipelajari sebelum masuk ke materi jaringan berikutnya.",
      challenge: "Sebelumnya saya lebih berfokus pada apakah peserta didik dapat menyelesaikan soal dengan benar. Setelah mempelajari pemahaman mendalam dan asesmen dasar, saya mulai memperhatikan proses peserta didik dalam memahami materi. Misalnya ketika ada peserta didik yang mendapatkan hasil konversi yang salah, saya tidak langsung memberikan jawaban, tetapi menanyakan kembali dari mana nilai setiap posisi bilangan diperoleh untuk mengetahui letak kesalahpahamannya.",
      concept: "Saya memahami bahwa pembelajaran mendalam perlu membuat peserta didik menghubungkan materi dengan konteks yang mereka kenal, memahami konsep secara sadar, dan mampu menerapkannya pada masalah lain. Saya juga memahami pentingnya asesmen dasar sebagai informasi awal untuk mengetahui kemampuan peserta didik sebelum menentukan pembelajaran. Dalam praktiknya, saya dapat mengetahui apakah peserta didik sudah memahami konsep dasar bilangan sebelum masuk ke konversi biner, oktal, dan heksadesimal.",
      change: "Saya akan melakukan asesmen awal sebelum memulai materi untuk mengetahui kemampuan dasar peserta didik, kemudian menggunakan hasilnya untuk menentukan bentuk pendampingan. Selama pembelajaran, saya juga akan lebih sering melakukan pengecekan pemahaman melalui pertanyaan dan contoh sederhana. Setelah itu, saya akan memberikan masalah yang mengharuskan peserta didik menjelaskan alasan dan langkah penyelesaiannya, bukan hanya menuliskan hasil akhir."
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
    pdfUrl: "/docs/LK2-GM.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Growth Mindset",
    fourC: {
      connection: "Saat PPL, saya mendapat materi jaringan yang belum terlalu saya kuasai. Awalnya saya merasa kurang yakin ketika harus menjelaskannya kepada peserta didik. Dari situ saya belajar bahwa kemampuan saya dalam memahami materi masih dapat berkembang selama saya mau mempelajarinya kembali.",
      challenge: "Sebelumnya saya cenderung merasa harus sudah menguasai materi sebelum berani mengajarkannya. Melalui Growth Mindset, saya belajar melihat ketidaktahuan sebagai bagian dari proses belajar. Contohnya, ketika belum memahami bagian tertentu dari materi jaringan, saya mempelajarinya kembali sebelum digunakan pada pembelajaran berikutnya.",
      concept: "Konsep yang paling saya rasakan adalah kemampuan dapat berkembang melalui usaha. Saya mengalami sendiri bahwa materi jaringan yang awalnya belum terlalu saya pahami menjadi lebih mudah setelah saya pelajari kembali dan mencoba menggunakannya saat mengajar.",
      change: "Saya akan lebih terbiasa mengatakan pada diri sendiri bahwa “belum bisa” bukan berarti “tidak bisa”. Ketika menemukan materi yang belum saya kuasai, saya akan mempelajarinya kembali dan memperbaiki persiapan sebelum mengajar, daripada menghindarinya karena merasa belum mampu."
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
    pdfUrl: "/docs/LK2-CT.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Computational Thinking",
    fourC: {
      connection: "Saat mempelajari Berpikir Komputasional, saya mulai melihat bahwa materi jaringan tidak selalu harus dijelaskan dengan memberikan langkah penyelesaian secara langsung. Saat peserta didik mengalami kesulitan dalam memahami suatu permasalahan jaringan, saya dapat mengarahkan mereka untuk memecah masalah terlebih dahulu menjadi bagian yang lebih sederhana, kemudian mencari bagian mana yang menyebabkan masalah.",
      challenge: "Sebelumnya ketika peserta didik mengalami kesulitan, saya cenderung langsung menunjukkan cara menyelesaikannya. Setelah mempelajari Berpikir Komputasional, saya mencoba mengarahkan peserta didik untuk menemukan masalahnya sendiri. Misalnya ketika membahas jaringan, peserta didik tidak langsung diberi jawaban bahwa koneksi bermasalah, tetapi diarahkan mengecek satu per satu perangkat, kabel, dan pengaturan yang berkaitan dengan koneksi tersebut.",
      concept: "Konsep yang paling saya pahami adalah decomposition, yaitu memecah masalah yang besar menjadi bagian-bagian kecil agar lebih mudah diselesaikan. Dalam pembelajaran jaringan, cara berpikir ini dapat digunakan ketika peserta didik melakukan troubleshooting. Mereka tidak langsung mencari satu jawaban, tetapi mengidentifikasi bagian masalah secara bertahap sampai menemukan penyebabnya.",
      change: "Saya ingin mengurangi kebiasaan langsung memberikan jawaban ketika peserta didik mengalami kesulitan. Saya akan memberikan pertanyaan penuntun seperti “Bagian mana yang bermasalah?”, “Sudah dicek bagian apa saja?”, dan “Apa yang terjadi jika bagian tersebut tidak bekerja?”, sehingga peserta didik terbiasa menganalisis masalah sebelum menentukan solusi."
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
    pdfUrl: "/docs/LK2-FPPN.pdf",
    pdfTitle: "LK 1 - Lembar Refleksi Filosofi Pendidikan Indonesia",
    fourC: {
      connection: "Selama PPL, saya menyadari bahwa menjadi guru bukan hanya mengajarkan materi, tetapi juga menuntun peserta didik menjadi pribadi yang lebih baik, sesuai filosofi Ki Hajar Dewantara. Saya menemui beberapa peserta didik yang masih kurang dalam bersikap, seperti kurang menghargai guru saat pembelajaran atau kurang disiplin. Pengalaman tersebut membuat saya memahami bahwa guru perlu memberikan teladan, mengingatkan dengan cara yang baik, dan membimbing peserta didik secara konsisten agar karakter  mereka  berkembang,  bukan hanya kemampuan akademiknya.",
      challenge: "Sebelum mengikuti mata kuliah ini, saya mengira memberikan penjelasan yang sama kepada seluruh peserta didik sudah cukup. Namun, saat PPL saya menyadari bahwa memahami karakteristik peserta didik jauh lebih penting	daripada	sekadar menyampaikan materi. Pada peserta didik inklusi, saya harus berbicara dengan lebih pelan, menggunakan kalimat yang sederhana, mengulang penjelasan apabila diperlukan, serta memastikan kembali bahwa ia benar-benar memahami instruksi yang diberikan.",
      concept: "Konsep yang paling saya pahami adalah menuntun peserta didik sesuai pemikiran Ki Hajar Dewantara. Guru hadir untuk membimbing perkembangan akademik maupun karakter peserta didik melalui keteladanan dan pendampingan.",
      change: "Saya ingin memastikan setiap modul ajar yang saya susun memiliki landasan filosofi  yang  jelas.  Saya  akan  lebih banyak menghadirkan masalah nyata yang dekat dengan dunia peserta didik, memberi ruang eksplorasi, menghargai perbedaan kemampuan melalui pembelajaran berdiferensiasi, serta lebih berperan sebagai pembimbing dibanding pemberi informasi."
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
    pdfUrl: "/docs/LK2-PPDP.pdf",
    pdfTitle: "LK 2 - Lembar Refleksi Pemahaman Peserta Didik",
    fourC: {
      connection: "Materi ini berkaitan langsung dengan pengalaman saya saat PPL ketika mendampingi peserta didik yang menggunakan alat bantu dengar. Saya melihat bahwa peserta didik tersebut sebenarnya dapat mengikuti penjelasan dan sangat aktif dalam pembelajaran, tetapi terkadang perlu ditanya kembali atau diberikan penjelasan ulang untuk memastikan bahwa ia benar-benar memahami materi. Hal ini membuat saya menyadari pentingnya guru memperhatikan proses pemahaman setiap peserta didik, bukan hanya melihat apakah mereka mengikuti pembelajaran atau tidak.",
      challenge: "Sebelumnya saya cenderung menganggap ketika peserta didik sudah memperhatikan dan dapat mengikuti kegiatan, berarti materi sudah dipahami. Saat PPL, saya belajar bahwa hal tersebut belum tentu. Saya perlu melakukan checking for understanding, misalnya dengan bertanya kembali atau meminta peserta didik menjelaskan dengan bahasanya sendiri. Pengalaman ini membuat saya lebih memperhatikan proses pemahaman, terutama pada peserta didik yang membutuhkan dukungan tertentu.",
      concept: "Saya mempelajari bahwa setiap peserta didik memiliki karakteristik perkembangan, kemampuan belajar, dan kebutuhan yang berbeda sehingga guru perlu menerapkan pembelajaran yang berpusat pada peserta didik. Saya juga memahami pentingnya menciptakan pembelajaran yang inklusif, memberikan kesempatan belajar yang sama kepada semua peserta didik, serta melakukan pendampingan (scaffolding) sesuai kebutuhan agar setiap peserta didik dapat berkembang sesuai potensinya.",
      change: "Setelah mengikuti mata kuliah ini dan menjalani PPL, saya ingin lebih peka dalam mengenali kebutuhan belajar peserta didik sejak awal melalui asesmen diagnostik sederhana, menyampaikan materi dengan bahasa yang mudah dipahami dan tempo yang sesuai, serta rutin mengecek pemahaman dengan meminta peserta didik menjelaskan kembali atau mencoba contoh sederhana, sambil tetap memberikan perhatian, pendampingan, dan kesempatan berpartisipasi secara aktif tanpa membuat peserta didik merasa dibedakan dari teman-temannya."
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
    pdfUrl: "/docs/LK2-PPL.pdf",
    pdfTitle: "LK 2 - Laporan Observasi & Refleksi PPL I",
    fourC: {
      connection: "PPL Terbimbing menjadi pengalaman pertama saya benar-benar berdiri di depan kelas sebagai guru, khususnya di jenjang SMK. Saat mengajar, saya merasakan bahwa kondisi mengajar berbeda dengan ketika hanya membuat perangkat pembelajaran. Saya harus berhadapan langsung dengan peserta didik, menjelaskan materi jaringan, menjawab pertanyaan, dan menjaga pembelajaran tetap berjalan. Pengalaman ini membuat saya lebih memahami tanggung jawab guru secara nyata.",
      challenge: "Sebelum PPL, saya lebih banyak mempersiapkan pembelajaran berdasarkan teori dan perangkat yang sudah dibuat. Namun saat praktik, saya mendapatkan materi jaringan komputer, sementara saya belum terlalu memahami beberapa bagian materi tersebut. Tantangannya muncul ketika peserta didik bertanya lebih jauh dari materi yang sudah saya siapkan. Saya akhirnya harus mempelajari kembali materi sebelum mengajar agar dapat menjelaskan dengan lebih tepat.",
      concept: "Saya belajar bahwa persiapan mengajar tidak cukup hanya dengan membuat modul ajar atau PPT. Guru harus memahami materi yang akan disampaikan karena pertanyaan peserta didik bisa berkembang di luar contoh yang sudah disiapkan. Saya juga belajar dari pengalaman pertama mengajar bahwa penguasaan materi dan kesiapan menghadapi respons peserta didik sangat memengaruhi kepercayaan diri saya ketika berada di depan kelas.",
      change: "Setelah pengalaman tersebut, saya akan mempersiapkan materi jaringan lebih mendalam sebelum mengajar, bukan hanya memahami materi yang akan ditampilkan di PPT. Saya juga akan mencoba memprediksi pertanyaan yang mungkin muncul dari peserta didik dan menyiapkan contoh atau praktik sederhana untuk menjelaskannya. Dengan begitu, saya tidak hanya siap menyampaikan materi, tetapi juga lebih siap ketika peserta didik bertanya atau membutuhkan penjelasan dari sudut pandang yang berbeda."
    }
  }
];

export const SEMESTER_2_COURSES = [
  {
    id: "pembelajaran-mendalam-asesmen-lanjut",
    number: "01",
    semester: 2,
    title: "Pembelajaran Mendalam dan Asesmen Lanjut",
    code: "PMAL",
    sks: "3 SKS",
    description: "Penerapan asesmen berkelanjutan, asesmen formatif adaptif, dan evaluasi hasil belajar berbasis data di kelas kejuruan.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3-PMAL.pdf",
    pdfTitle: "LK 3 - Lembar Refleksi PMAL",
    fourC: {
      connection: "Materi Pembelajaran Mendalam dan Asesmen Lanjut berkaitan erat dengan peran saya sebagai calon guru karena membantu saya merancang pembelajaran yang berpusat pada murid, bermakna, dan sesuai dengan kebutuhan belajar mereka. Melalui pendekatan pembelajaran mendalam yang meliputi prinsip mindful, meaningful, dan joyful learning, saya belajar bahwa pembelajaran tidak hanya berorientasi pada penyelesaian materi, tetapi juga pada pemahaman konsep, keterlibatan aktif, dan kemampuan murid menerapkan pengetahuan dalam kehidupan nyata. Dalam pembelajaran Informatika, saya dapat menerapkannya melalui kegiatan praktik, pemecahan masalah jaringan, dan proyek sederhana yang menghubungkan teori dengan situasi nyata.",
      challenge: "Sebelumnya, saya cenderung berfokus pada penyampaian materi, pelaksanaan kegiatan pembelajaran, dan pencapaian hasil belajar. Setelah mempelajari mata kuliah ini, saya memahami pentingnya merancang pembelajaran mulai dari tujuan yang ingin dicapai, menentukan bukti ketercapaian tujuan, kemudian menyusun aktivitas pembelajaran yang sesuai melalui prinsip Understanding by Design (UbD). Saya juga memahami bahwa asesmen tidak hanya dilakukan pada akhir pembelajaran, tetapi dapat digunakan selama proses belajar untuk membantu murid mengenali perkembangan dan memperbaiki pemahamannya. Tantangan bagi saya adalah menyelaraskan tujuan, kegiatan, dan asesmen agar benar-benar mendukung pembelajaran mendalam.",
      concept: "Konsep utama yang saya pelajari meliputi pendekatan pembelajaran mendalam dengan prinsip mindful learning, yaitu pembelajaran yang mendorong kesadaran dan keterlibatan murid; meaningful learning, yaitu pembelajaran yang menghubungkan materi dengan pengetahuan dan pengalaman nyata; serta joyful learning, yaitu pembelajaran yang menciptakan suasana positif dan menyenangkan. Selain itu, saya mempelajari prinsip UbD yang menekankan keselarasan antara tujuan pembelajaran, bukti asesmen, dan kegiatan pembelajaran. Saya juga memahami tiga pendekatan asesmen, yaitu assessment as learning untuk mengembangkan refleksi dan penilaian diri murid, assessment for learning untuk memberikan umpan balik selama proses pembelajaran, serta assessment of learning untuk mengetahui ketercapaian hasil belajar.",
      change: "Setelah mempelajari materi ini, saya ingin merancang pembelajaran yang lebih terarah, berpusat pada murid, dan mendorong pemahaman mendalam. Saya akan mulai dengan menetapkan tujuan pembelajaran yang jelas, menentukan kriteria keberhasilan dan bukti asesmen, kemudian memilih aktivitas yang sesuai dengan kebutuhan murid. Dalam pembelajaran Informatika, misalnya pada materi IP Address dan media transmisi jaringan, saya ingin mengombinasikan penjelasan konsep dengan analisis kasus dan praktik langsung agar murid dapat memahami serta menerapkan pengetahuan. Saya juga akan menggunakan asesmen formatif, rubrik kinerja, umpan balik, dan refleksi diri agar proses penilaian tidak hanya menghasilkan nilai, tetapi juga membantu murid memperbaiki proses belajarnya."
    }
  },
  {
    id: "pembelajaran-berdiferensiasi-pse",
    number: "02",
    semester: 2,
    title: "Pembelajaran Sosial Emosional",
    code: "PB-PSE",
    sks: "3 SKS",
    description: "Merancang pengalaman belajar yang mengakomodasi gaya belajar, minat, serta kesiapan siswa dengan penguatan 5 kompetensi sosial emosional.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3-PSE.pdf",
    pdfTitle: "LK 3 - Lembar Refleksi PSE",
    fourC: {
      connection: "Materi Pembelajaran Sosial Emosional berkaitan erat dengan peran saya sebagai calon guru karena guru tidak hanya bertugas menyampaikan materi akademik, tetapi juga membantu murid mengembangkan kemampuan mengelola emosi, membangun hubungan sosial yang positif, dan mengambil keputusan secara bertanggung jawab. Dalam praktik mengajar Informatika, saya menyadari bahwa setiap murid memiliki karakter, tingkat kepercayaan diri, dan kebutuhan belajar yang berbeda. Oleh karena itu, saya perlu menciptakan suasana kelas yang aman, nyaman, dan mendukung keterlibatan semua murid.",
      challenge: "Sebelumnya, saya lebih berfokus pada penyampaian materi, ketercapaian tujuan pembelajaran, dan hasil belajar murid. Setelah mempelajari Pembelajaran Sosial Emosional, saya memahami bahwa kondisi emosional, empati, dan hubungan sosial juga perlu diperhatikan selama pembelajaran. Tantangan bagi saya adalah menerapkan prinsip tersebut secara konsisten, terutama ketika menghadapi murid yang kurang percaya diri, pasif, atau mengalami kesulitan dalam bekerja sama.",
      concept: "Konsep penting yang saya pelajari adalah lima kompetensi sosial emosional, yaitu kesadaran diri (self-awareness), manajemen diri (self-management), kesadaran sosial (social awareness), keterampilan berelasi (relationship skills), dan pengambilan keputusan yang bertanggung jawab (responsible decision-making). Kompetensi tersebut dapat diterapkan melalui kegiatan refleksi, diskusi, kerja kelompok, komunikasi positif, dan pembiasaan sikap saling menghargai. Saya juga memahami bahwa guru perlu menjadi teladan dalam mengelola emosi dan membangun hubungan yang baik dengan murid.",
      change: "Saya ingin lebih memperhatikan kondisi sosial emosional murid dalam merancang dan melaksanakan pembelajaran. Saya akan membiasakan diri mengelola emosi, memberikan umpan balik yang membangun, menghargai perbedaan kemampuan, dan memberikan kesempatan kepada setiap murid untuk berpartisipasi. Dalam praktik Informatika, seperti konfigurasi jaringan dan crimping kabel LAN, saya ingin membangun kerja sama, tanggung jawab, dan sikap saling membantu sehingga pembelajaran tidak hanya mengembangkan keterampilan teknis, tetapi juga karakter murid."
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
    pdfUrl: "/docs/LK3-PPL.pdf",
    pdfTitle: "LK 3 - Laporan Refleksi Pelaksanaan PPL II Mandiri",
    fourC: {
      connection: "Mata kuliah Praktik Pengalaman Lapangan (PPL) Mandiri memiliki keterkaitan erat dengan peran saya sebagai calon guru karena memberikan kesempatan untuk menerapkan pengetahuan dan keterampilan pedagogik yang telah dipelajari selama perkuliahan ke dalam situasi pembelajaran nyata. Melalui kegiatan PPL di SMK Negeri 2 Salatiga, saya belajar merancang perangkat pembelajaran, melaksanakan kegiatan belajar mengajar, mengelola kelas, menggunakan media pembelajaran, serta melakukan asesmen terhadap hasil belajar murid. Pengalaman ini membantu saya memahami bahwa menjadi guru tidak hanya membutuhkan penguasaan materi Informatika, tetapi juga kemampuan berkomunikasi, beradaptasi, dan memahami karakteristik serta kebutuhan belajar murid.",
      challenge: "Sebelum melaksanakan PPL Mandiri, pemahaman saya mengenai pembelajaran lebih banyak diperoleh melalui teori perkuliahan dan penyusunan perangkat pembelajaran. Ketika melaksanakan praktik mengajar, saya menyadari bahwa situasi kelas tidak selalu berjalan sesuai dengan perencanaan. Perbedaan kemampuan, keaktifan, respons, dan pemahaman murid menuntut saya untuk menyesuaikan strategi pembelajaran secara langsung. Saya juga belajar bahwa pengelolaan waktu, pemberian instruksi, penggunaan media, dan penanganan kesulitan belajar membutuhkan keterampilan praktis serta kemampuan mengambil keputusan. Pengalaman tersebut menjadi tantangan sekaligus kesempatan bagi saya untuk mengembangkan kompetensi sebagai calon guru profesional.",
      concept: "Konsep utama yang saya pelajari melalui PPL Mandiri adalah perencanaan pembelajaran yang sistematis, pembelajaran yang berpusat pada murid, pengelolaan kelas, asesmen pembelajaran, refleksi, dan tindak lanjut. Saya memahami bahwa guru perlu menyelaraskan tujuan pembelajaran, materi, metode, media, dan asesmen agar kegiatan belajar berjalan efektif. Dalam pembelajaran Informatika, saya memperoleh pengalaman mengajarkan materi konversi bilangan, gerbang logika, dasar IP Address, topologi jaringan, media dan perangkat jaringan, serta OSI Layer. Saya juga belajar pentingnya memberikan contoh konkret, demonstrasi, dan kegiatan praktik agar murid lebih mudah memahami konsep yang bersifat abstrak maupun teknis. Selain itu, masukan dari guru pamong dan hasil refleksi menjadi bagian penting dalam memperbaiki kualitas pembelajaran.",
      change: "Setelah mengikuti PPL Mandiri, saya ingin menjadi guru yang lebih reflektif, adaptif, dan responsif terhadap kebutuhan murid. Saya akan meningkatkan kemampuan dalam menyusun perangkat pembelajaran, mengelola waktu, memilih media yang sesuai, serta mengembangkan asesmen yang dapat mengukur proses dan hasil belajar. Saya juga ingin memberikan instruksi yang lebih jelas, melibatkan murid secara aktif, dan menyediakan pendampingan bagi murid yang mengalami kesulitan atau kurang percaya diri. Selain itu, saya akan memanfaatkan umpan balik dari guru pamong dan hasil evaluasi pembelajaran untuk memperbaiki strategi mengajar pada pertemuan berikutnya sehingga pembelajaran menjadi lebih efektif, bermakna, dan menyenangkan."
    }
  },
  {
    id: "prokem",
    number: "04",
    semester: 2,
    title: "Projek Kepemimpinan",
    code: "prokem",
    sks: "2 SKS",
    description: "Refleksi komprehensif, penyusunan portofolio digital, dan diseminasi hasil praktik baik pembelajaran inovatif di hadapan penguji dan rekan sejawat.",
    hasReflection: true,
    docCount: 1,
    pdfUrl: "/docs/LK3-PK.pdf",
    pdfTitle: "LK 3 - Prokem",
    fourC: {
      connection: "Mata kuliah Projek Kepemimpinan memiliki keterkaitan erat dengan peran saya sebagai calon guru karena membekali saya dengan kemampuan memimpin, bekerja sama, berkomunikasi, dan menyelesaikan masalah melalui kegiatan projek yang nyata. Melalui projek kelompok Quad Lumina bertema “Dari Ide Menjadi Aksi: Kepemimpinan Mahasiswa melalui Pendampingan Projek IoT”, saya belajar mendampingi siswa dalam mengembangkan kreativitas dan menghasilkan solusi teknologi sederhana. Pengalaman ini membantu saya memahami bahwa guru tidak hanya berperan sebagai penyampai materi, tetapi juga sebagai fasilitator, pembimbing, dan pemimpin yang mampu mengarahkan siswa untuk bekerja sama, berinovasi, serta bertanggung jawab terhadap proses dan hasil projek.",
      challenge: "Sebelumnya, saya lebih banyak berfokus pada perencanaan dan pelaksanaan pembelajaran di kelas. Melalui mata kuliah Projek Kepemimpinan, saya memperoleh pengalaman yang lebih luas, yaitu merancang, melaksanakan, memantau, dan mengevaluasi projek secara kolaboratif. Saya belajar bahwa pelaksanaan projek tidak selalu berjalan sesuai rencana karena dapat muncul kendala teknis, perbedaan pendapat, pembagian tugas yang belum optimal, maupun keterbatasan waktu. Dalam pendampingan projek IoT, misalnya, diperlukan proses identifikasi masalah, pengujian alat, perbaikan rangkaian, dan evaluasi produk. Pengalaman tersebut mengajarkan saya untuk tidak hanya berorientasi pada hasil akhir, tetapi juga memperhatikan proses kolaborasi, pengambilan keputusan, dan kemampuan kelompok dalam menghadapi tantangan.",
      concept: "Konsep utama yang saya pelajari adalah kepemimpinan kolaboratif, komunikasi efektif, manajemen projek, pemecahan masalah, pengambilan keputusan, kreativitas, inovasi, serta evaluasi keberhasilan projek. Saya memahami bahwa seorang pemimpin perlu mampu mengidentifikasi kebutuhan, menetapkan tujuan, membagi tugas sesuai kemampuan anggota, mengelola sumber daya, dan memastikan setiap anggota berkontribusi. Selain itu, konsep service learning mengajarkan bahwa projek sebaiknya tidak hanya menghasilkan produk, tetapi juga memberikan manfaat bagi pihak yang dilayani. Dalam projek pendampingan IoT, siswa didorong untuk merancang solusi teknologi sederhana berdasarkan kebutuhan, melakukan pengujian, memperbaiki kekurangan, dan mempresentasikan hasilnya. Konsep tersebut relevan dengan peran guru dalam membangun pembelajaran berbasis projek yang kolaboratif, kontekstual, dan berdampak nyata.",
      change: "Setelah mengikuti mata kuliah Projek Kepemimpinan, saya ingin menjadi calon guru yang lebih proaktif, bertanggung jawab, terbuka terhadap masukan, dan mampu bekerja sama dalam mencapai tujuan bersama. Saya akan menerapkan prinsip kepemimpinan kolaboratif dalam pembelajaran dengan memberikan kesempatan kepada siswa untuk menyampaikan ide, menentukan pembagian tugas, menyelesaikan masalah, dan mengevaluasi hasil kerja secara mandiri maupun berkelompok. Saya juga ingin lebih terampil merancang projek yang sesuai dengan kebutuhan nyata di lingkungan sekolah atau masyarakat. Selain itu, saya akan membiasakan diri melakukan evaluasi secara berkala agar kendala dapat diidentifikasi lebih awal dan setiap kegiatan memiliki tindak lanjut yang jelas. Dengan demikian, saya berharap dapat membimbing siswa menjadi individu yang kreatif, mandiri, mampu bekerja sama, dan bertanggung jawab."
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
  pdfTitle: "Dokumen Refleksi Pengalaman Belajar Selama Mengikuti PPG",
  docCount: 1,
  hasReflection: false,
  isDirectDocument: true,
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
