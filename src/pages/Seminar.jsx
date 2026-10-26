import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Search, 
  Download, 
  ExternalLink, 
  Network, 
  Target, 
  Lightbulb, 
  RefreshCw,
  Home,
  ChevronRight,
  X,
  BookOpen
} from "lucide-react";
import { 
  SEMESTER_1_COURSES, 
  SEMESTER_2_COURSES, 
  KESELURUHAN_PPG_DATA, 
  VISI_PENDIDIKAN_DATA,
  JURNAL_PTK_DATA,
  FOUR_C_SUBTITLES
} from "../data/content";

export default function Seminar() {
  const location = useLocation();

  // Active Tab: "smt-1" | "smt-2" | "ptk" | "ppg" | "visi" | "semua"
  const [activeTab, setActiveTab] = useState("smt-1");
  // Active Course for Detail View (null = show grid list, courseId = show 4C detail view)
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  // Search Query
  const [searchQuery, setSearchQuery] = useState("");
  // PDF preview modal / collapse toggle
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  // Quick View PDF modal for direct document viewing
  const [modalPdfData, setModalPdfData] = useState(null);

  // Sync tab with URL query parameter ?tab=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam && ["smt-1", "smt-2", "ptk", "ppg", "visi", "semua"].includes(tabParam)) {
      setActiveTab(tabParam);
      setSelectedCourseId(null);
    }
  }, [location.search]);

  // All courses aggregated
  const allCourses = useMemo(() => {
    return [
      ...SEMESTER_1_COURSES,
      ...SEMESTER_2_COURSES,
      {
        ...JURNAL_PTK_DATA,
        semester: "PTK",
      },
      {
        ...KESELURUHAN_PPG_DATA,
        semester: "PPG",
      },
      {
        ...VISI_PENDIDIKAN_DATA,
        semester: "Visi",
        hasReflection: true,
      }
    ];
  }, []);

  // Filter courses by active tab
  const tabCourses = useMemo(() => {
    if (activeTab === "smt-1") return SEMESTER_1_COURSES;
    if (activeTab === "smt-2") return SEMESTER_2_COURSES;
    if (activeTab === "ptk") return [{ ...JURNAL_PTK_DATA, semester: "PTK" }];
    if (activeTab === "ppg") return [{ ...KESELURUHAN_PPG_DATA, semester: "PPG" }];
    if (activeTab === "visi") return [{ ...VISI_PENDIDIKAN_DATA, semester: "Visi", hasReflection: true }];
    return allCourses;
  }, [activeTab, allCourses]);

  // Apply search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return tabCourses;
    const query = searchQuery.toLowerCase();
    return tabCourses.filter(c => 
      c.title.toLowerCase().includes(query) ||
      (c.code && c.code.toLowerCase().includes(query)) ||
      (c.description && c.description.toLowerCase().includes(query))
    );
  }, [tabCourses, searchQuery]);

  // Find currently selected course object if detail view is active
  const selectedCourse = useMemo(() => {
    if (!selectedCourseId) return null;
    return allCourses.find(c => c.id === selectedCourseId) || null;
  }, [selectedCourseId, allCourses]);

  // Breadcrumb tab label
  const tabLabel = useMemo(() => {
    switch (activeTab) {
      case "smt-1": return "Semester 1";
      case "smt-2": return "Semester 2";
      case "ptk": return "Jurnal PTK";
      case "ppg": return "Keseluruhan PPG";
      case "visi": return "Visi Pendidikan";
      case "semua": return "Semua Refleksi";
      default: return "Semester 1";
    }
  }, [activeTab]);

  // Section heading
  const tabHeading = useMemo(() => {
    switch (activeTab) {
      case "smt-1": return "Refleksi Mata Kuliah Semester 1";
      case "smt-2": return "Refleksi Mata Kuliah Semester 2";
      case "ptk": return "Jurnal Penelitian Tindakan Kelas (PTK)";
      case "ppg": return "Refleksi Pengalaman Belajar Selama PPG";
      case "visi": return "Visi Pendidikan di Indonesia & Sebagai Guru";
      case "semua": return "Semua Refleksi Mata Kuliah PPG";
      default: return "Refleksi Mata Kuliah Semester 1";
    }
  }, [activeTab]);

  return (
    <div className="bg-neutral-50/70 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        
        {/* ========================================================= */}
        {/* BREADCRUMB (Elegant Monochrome) */}
        {/* ========================================================= */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-6 font-medium">
          <Link to="/" className="hover:text-neutral-950 flex items-center gap-1 transition-colors">
            <Home size={14} /> Beranda
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <button 
            onClick={() => setSelectedCourseId(null)} 
            className="hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Refleksi
          </button>
          <ChevronRight size={13} className="text-neutral-400" />
          <button 
            onClick={() => setSelectedCourseId(null)} 
            className={`${!selectedCourse ? "text-neutral-950 font-bold" : "hover:text-neutral-950"} transition-colors cursor-pointer`}
          >
            {tabLabel}
          </button>
          {selectedCourse && (
            <>
              <ChevronRight size={13} className="text-neutral-400" />
              <span className="text-neutral-950 font-bold truncate max-w-[200px] sm:max-w-md">
                {selectedCourse.title}
              </span>
            </>
          )}
        </nav>

        {/* Tab Switcher Pills */}
        <div className="mb-8 flex flex-wrap gap-2 items-center bg-white p-1.5 rounded-2xl border border-neutral-200 shadow-xs w-fit">
          {[
            { key: "semua", label: "Semua Refleksi" },
            { key: "smt-1", label: "Semester 1" },
            { key: "smt-2", label: "Semester 2" },
            { key: "ptk", label: "Jurnal PTK" },
            { key: "ppg", label: "Keseluruhan PPG" },
            { key: "visi", label: "Visi Pendidikan" }
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setSelectedCourseId(null);
                  setSearchQuery("");
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* VIEW 1: COURSE LISTING GRID (Black & White Elegan)       */}
        {/* ========================================================= */}
        {!selectedCourse ? (
          <div>
            {/* Category Kicker */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-neutral-950 font-bold text-xs tracking-widest uppercase font-serif">
                —— {activeTab === "semua" ? "SEMUA REFLEKSI" : tabLabel.toUpperCase()}
              </span>
            </div>

            {/* Main Serif Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-950 tracking-tight mb-6">
              {tabHeading}
            </h1>

            {/* Search Bar matching Reference with Elegant Monochrome Style */}
            <div className="relative max-w-md mb-10">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                <Search size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari mata kuliah..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-neutral-400 hover:text-neutral-900 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Course Cards Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => {
                  const numberDisplay = course.number || String(index + 1).padStart(2, "0");
                  return (
                    <div
                      key={course.id}
                      className="bg-white rounded-3xl border border-neutral-200 p-7 shadow-xs hover:shadow-md hover:border-neutral-400 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Elegant Neutral Watermark Number */}
                        <div className="text-neutral-300 font-serif font-bold text-4xl mb-3 select-none">
                          {numberDisplay}
                        </div>

                        {/* Course Title */}
                        <h2 className="font-serif font-bold text-xl text-neutral-950 leading-snug mb-4 group-hover:text-neutral-700 transition-colors">
                          {course.title}
                        </h2>
                      </div>

                      <div>
                        {/* Status Indicators */}
                        <div className="space-y-1.5 pt-4 border-t border-neutral-100 mb-5">
                          <div className="text-neutral-950 text-xs font-semibold flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-neutral-950 shrink-0" />
                            <span>
                              {course.isJournal 
                                ? "Naskah Jurnal Ilmiah tersedia" 
                                : course.id === "refleksi-keseluruhan-ppg" 
                                ? "Dokumen Refleksi tersedia" 
                                : "Refleksi 4C tersedia"}
                            </span>
                          </div>
                          <div className="text-neutral-600 text-xs font-medium flex items-center gap-2">
                            <FileText size={15} className="text-neutral-400 shrink-0" />
                            <span>{course.docCount || 1} dokumen tersedia</span>
                          </div>
                        </div>

                        {/* Action Buttons: Solid Elegant Black & Direct Document Button */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedCourseId(course.id);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex-1 bg-neutral-950 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-1.5 shadow-xs cursor-pointer group-hover:scale-[1.01]"
                          >
                            <span>
                              {course.isJournal 
                                ? "Buka Jurnal PTK" 
                                : course.id === "refleksi-keseluruhan-ppg" 
                                ? "Buka Dokumen Refleksi" 
                                : "Lihat Refleksi"}
                            </span>
                            <ArrowRight size={14} />
                          </button>

                          {course.pdfUrl && (
                            <button
                              onClick={() => setModalPdfData(course)}
                              className="px-3.5 py-2.5 rounded-full border border-neutral-300 text-neutral-800 hover:bg-neutral-100 text-xs font-semibold transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                              title="Lihat Dokumen PDF"
                            >
                              <FileText size={14} />
                              <span className="hidden sm:inline">Dokumen</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-neutral-200 p-12 text-center max-w-lg mx-auto">
                <Search size={36} className="mx-auto text-neutral-300 mb-3" />
                <h3 className="font-serif font-bold text-lg text-neutral-800 mb-1">
                  Mata kuliah tidak ditemukan
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Tidak ada mata kuliah yang cocok dengan kata kunci "{searchQuery}".
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: DETAILED 4C VIEW (Black & White Elegan)          */
          /* ========================================================= */
          <div className="animate-in fade-in duration-200">
            {/* Header: Course Title */}
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-950 tracking-tight leading-tight mb-4">
                {selectedCourse.title}
              </h1>

              {/* Back Link */}
              <button
                onClick={() => {
                  setSelectedCourseId(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-neutral-950 hover:text-neutral-600 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer hover:underline"
              >
                <ArrowLeft size={14} />
                Kembali ke daftar mata kuliah
              </button>
            </div>

            {/* KHUSUS REFLEKSI PENGALAMAN PPG: Tanpa 4C, Pratinjau Dokumen PDF Penuh */}
            {selectedCourse.id === "refleksi-keseluruhan-ppg" ? (
              <div className="space-y-6">
                {/* Info Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block mb-1">
                        Refleksi Akhir PPG Calon Guru
                      </span>
                      <h2 className="font-serif font-bold text-lg sm:text-xl text-neutral-950">
                        {selectedCourse.subtitle || "Sintesis Pengalaman Belajar Selama PPG"}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3.5 py-1.5 bg-neutral-100 text-neutral-800 rounded-full text-xs font-bold border border-neutral-200">
                        LPTK UKSW
                      </span>
                      <span className="px-3.5 py-1.5 bg-neutral-950 text-white rounded-full text-xs font-bold">
                        Dokumen Resmi
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed mt-4">
                    Dokumen refleksi komprehensif ini merangkum metamorfosis paradigma, penguasaan 4 kompetensi guru (pedagogik, kepribadian, sosial, profesional), serta komitmen menjadi pembelajar reflektif sepanjang hayat.
                  </p>
                </div>

                {/* Bagian Dokumen PDF Preview */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-neutral-950">
                          Pratinjau Dokumen Refleksi PPG
                        </h3>
                        <p className="text-xs text-neutral-500">
                          {selectedCourse.pdfTitle || "Dokumen Refleksi Pengalaman Belajar Selama Mengikuti PPG"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={selectedCourse.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition-colors border border-neutral-300"
                      >
                        <ExternalLink size={14} />
                        <span>Buka Tab Baru</span>
                      </a>
                      <a
                        href={selectedCourse.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                      >
                        <Download size={14} />
                        <span>Unduh Dokumen PDF</span>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Iframe Document Viewer */}
                  <div className="w-full h-[680px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner">
                    <iframe
                      src={`${selectedCourse.pdfUrl}#toolbar=1`}
                      className="w-full h-full"
                      title="Pratinjau Dokumen Refleksi PPG"
                    />
                  </div>
                </div>
              </div>
            ) : selectedCourse.isJournal ? (
              <div className="space-y-8">
                {/* Research Metadata Box */}
                {selectedCourse.metadata && (
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block mb-1">
                          Penelitian Tindakan Kelas (PTK)
                        </span>
                        <h2 className="font-serif font-bold text-lg sm:text-xl text-neutral-950">
                          {selectedCourse.subtitle}
                        </h2>
                      </div>
                      <span className="px-3.5 py-1.5 bg-neutral-100 text-neutral-800 rounded-full text-xs font-bold border border-neutral-200">
                        {selectedCourse.metadata.siklus}
                      </span>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                      <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/80">
                        <span className="text-neutral-400 font-semibold block uppercase text-[10px]">Peneliti</span>
                        <span className="text-neutral-900 font-bold text-sm mt-0.5 block">{selectedCourse.metadata.peneliti}</span>
                      </div>
                      <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/80">
                        <span className="text-neutral-400 font-semibold block uppercase text-[10px]">Lokasi Penelitian</span>
                        <span className="text-neutral-900 font-bold text-sm mt-0.5 block">{selectedCourse.metadata.sekolah}</span>
                      </div>
                      <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/80 sm:col-span-2 md:col-span-1">
                        <span className="text-neutral-400 font-semibold block uppercase text-[10px]">Sasaran Siswa</span>
                        <span className="text-neutral-900 font-bold text-sm mt-0.5 block">{selectedCourse.metadata.sasaran}</span>
                      </div>
                    </div>

                    {/* Abstrak */}
                    {selectedCourse.metadata.abstrak && (
                      <div className="pt-2">
                        <h3 className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2">
                          Abstrak Penelitian
                        </h3>
                        <p className="text-neutral-700 text-sm leading-relaxed bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200/80 text-justify">
                          {selectedCourse.metadata.abstrak}
                        </p>
                      </div>
                    )}

                    {/* Hasil Tindakan Per Siklus */}
                    {selectedCourse.metadata.hasilSiklus && (
                      <div>
                        <h3 className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-3">
                          Progres Ketuntasan Tindakan Siklus PTK
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {selectedCourse.metadata.hasilSiklus.map((hs, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{hs.siklus}</span>
                                <div className="text-2xl font-serif font-black text-neutral-950 mt-1 mb-2">
                                  {hs.ketuntasan}
                                </div>
                                <p className="text-xs text-neutral-600 leading-snug">{hs.fokus}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Bagian Dokumen PDF Jurnal PTK */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-neutral-950">
                          Naskah Dokumen Jurnal Ilmiah PTK
                        </h3>
                        <p className="text-xs text-neutral-500">Pratinjau lengkap naskah publikasi artikel ilmiah PTK</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={selectedCourse.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition-colors border border-neutral-300"
                      >
                        <ExternalLink size={14} />
                        <span>Buka Tab Baru</span>
                      </a>
                      <a
                        href={selectedCourse.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                      >
                        <Download size={14} />
                        <span>Unduh Naskah PDF</span>
                      </a>
                    </div>
                  </div>

                  {/* Embedded Iframe Document Viewer */}
                  <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner">
                    <iframe
                      src={`${selectedCourse.pdfUrl}#toolbar=1`}
                      className="w-full h-full"
                      title="Naskah Jurnal PTK"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* ========================================================= */
              /* UNTUK MATA KULIAH REFLEKSI: MENGGUNAKAN KERANGKA MODEL 4C */
              /* ========================================================= */
              <div>
                {/* Section Title */}
                <div className="mt-8 mb-6 pb-2 border-b border-neutral-200 flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950">
                    Refleksi Model 4C
                  </h2>
                  {selectedCourse.pdfUrl && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowPdfPreview(!showPdfPreview)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition-colors border border-neutral-300 cursor-pointer"
                      >
                        <FileText size={13} />
                        <span>{showPdfPreview ? "Tutup Pratinjau PDF" : "Lihat Dokumen PDF"}</span>
                      </button>
                      <a
                        href={selectedCourse.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors border border-neutral-950"
                      >
                        <Download size={13} />
                        <span className="hidden sm:inline">Unduh PDF</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* PDF Viewer Accordion */}
                {showPdfPreview && selectedCourse.pdfUrl && (
                  <div className="mb-8 bg-white p-4 sm:p-6 rounded-3xl border border-neutral-200 shadow-md">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-100">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-neutral-950" />
                        <span className="text-xs sm:text-sm font-bold text-neutral-900">
                          {selectedCourse.pdfTitle || "Dokumen Lembar Refleksi"}
                        </span>
                      </div>
                      <a
                        href={selectedCourse.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-950 hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        Buka Tab Baru <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="w-full h-[550px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                      <iframe
                        src={`${selectedCourse.pdfUrl}#toolbar=1`}
                        className="w-full h-full"
                        title={`PDF ${selectedCourse.title}`}
                      />
                    </div>
                  </div>
                )}

                {/* The 4 Vertically Stacked Cards (Monochrome Elegan) */}
                <div className="space-y-5">
                  
                  {/* TAHAP 1: Connection */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Network size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400 block mb-0.5">
                          TAHAP 1
                        </span>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 leading-tight">
                          Connection
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium italic mb-3">
                      {FOUR_C_SUBTITLES.connection}
                    </p>
                    <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {selectedCourse.fourC?.connection}
                    </p>
                  </div>

                  {/* TAHAP 2: Challenge */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Target size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400 block mb-0.5">
                          TAHAP 2
                        </span>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 leading-tight">
                          Challenge
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium italic mb-3">
                      {FOUR_C_SUBTITLES.challenge}
                    </p>
                    <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {selectedCourse.fourC?.challenge}
                    </p>
                  </div>

                  {/* TAHAP 3: Concept */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <Lightbulb size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400 block mb-0.5">
                          TAHAP 3
                        </span>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 leading-tight">
                          Concept
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium italic mb-3">
                      {FOUR_C_SUBTITLES.concept}
                    </p>
                    <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {selectedCourse.fourC?.concept}
                    </p>
                  </div>

                  {/* TAHAP 4: Change */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <RefreshCw size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-neutral-400 block mb-0.5">
                          TAHAP 4
                        </span>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 leading-tight">
                          Change
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium italic mb-3">
                      {FOUR_C_SUBTITLES.change}
                    </p>
                    <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {selectedCourse.fourC?.change}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Bottom Back Button */}
            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedCourseId(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-neutral-950 hover:text-neutral-600 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                Kembali ke daftar mata kuliah
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Modal Pratinjau Dokumen PDF Penuh */}
      {modalPdfData && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-neutral-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-neutral-950 line-clamp-1">
                    {modalPdfData.pdfTitle || modalPdfData.title}
                  </h3>
                  <p className="text-xs text-neutral-500">Pratinjau Dokumen Resmi PPG</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={modalPdfData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200 rounded-lg transition-colors text-xs font-semibold flex items-center gap-1"
                  title="Buka di tab baru"
                >
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Tab Baru</span>
                </a>
                <a
                  href={modalPdfData.pdfUrl}
                  download
                  className="px-3.5 py-1.5 bg-neutral-950 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <Download size={14} />
                  <span>Unduh</span>
                </a>
                <button
                  onClick={() => setModalPdfData(null)}
                  className="p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                  aria-label="Tutup Pratinjau"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            {/* Iframe Document View */}
            <div className="flex-1 bg-neutral-100">
              <iframe
                src={`${modalPdfData.pdfUrl}#toolbar=1`}
                className="w-full h-full border-none"
                title={`Preview ${modalPdfData.title}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
