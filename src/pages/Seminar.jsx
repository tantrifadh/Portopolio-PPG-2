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
  ChevronRight
} from "lucide-react";
import { 
  SEMESTER_1_COURSES, 
  SEMESTER_2_COURSES, 
  KESELURUHAN_PPG_DATA, 
  VISI_PENDIDIKAN_DATA,
  FOUR_C_SUBTITLES
} from "../data/content";

export default function Seminar() {
  const location = useLocation();

  // Active Tab: "smt-1" | "smt-2" | "ppg" | "visi" | "semua"
  const [activeTab, setActiveTab] = useState("smt-1");
  // Active Course for Detail View (null = show grid list, courseId = show 4C detail view)
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  // Search Query
  const [searchQuery, setSearchQuery] = useState("");
  // PDF preview modal / collapse toggle
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  // Sync tab with URL query parameter ?tab=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    if (tabParam && ["smt-1", "smt-2", "ppg", "visi", "semua"].includes(tabParam)) {
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
        ...KESELURUHAN_PPG_DATA,
        semester: "PPG",
        hasReflection: true,
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
    if (activeTab === "ppg") return [{ ...KESELURUHAN_PPG_DATA, semester: "PPG", hasReflection: true }];
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
      c.description.toLowerCase().includes(query)
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
                        <h2 className="font-serif font-bold text-xl text-neutral-950 leading-snug mb-3 group-hover:text-neutral-700 transition-colors">
                          {course.title}
                        </h2>

                        {/* Course Description */}
                        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                          {course.description}
                        </p>
                      </div>

                      <div>
                        {/* Status Indicators */}
                        <div className="space-y-1.5 pt-4 border-t border-neutral-100 mb-5">
                          <div className="text-neutral-950 text-xs font-semibold flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-neutral-950 shrink-0" />
                            <span>Refleksi tersedia</span>
                          </div>
                          <div className="text-neutral-600 text-xs font-medium flex items-center gap-2">
                            <FileText size={15} className="text-neutral-400 shrink-0" />
                            <span>{course.docCount || 1} dokumen tersedia</span>
                          </div>
                        </div>

                        {/* Action Pill Button: Solid Elegant Black */}
                        <button
                          onClick={() => {
                            setSelectedCourseId(course.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="w-full sm:w-auto bg-neutral-950 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer group-hover:scale-[1.02]"
                        >
                          <span>Lihat Refleksi</span>
                          <ArrowRight size={14} />
                        </button>
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
            {/* Header: Course Title & Description */}
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-950 tracking-tight leading-tight mb-3">
                {selectedCourse.title}
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-4">
                {selectedCourse.description}
              </p>

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
    </div>
  );
}
