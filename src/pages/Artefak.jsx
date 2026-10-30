import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { 
  FileText, 
  Presentation, 
  ClipboardList, 
  Download, 
  ExternalLink, 
  Eye, 
  Search, 
  X, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  School, 
  Sparkles, 
  ChevronRight,
  Home,
  BookOpen,
  Layers
} from "lucide-react";
import { SIKLUS_ARTEFAK_LIST } from "../data/content";

export default function Artefak() {
  const location = useLocation();
  const navigate = useNavigate();

  // Active Siklus: "semua" | "1" | "2" | "3" | "4"
  const [activeSiklus, setActiveSiklus] = useState("semua");
  // Search query
  const [searchQuery, setSearchQuery] = useState("");
  // Selected Document for Modal Preview
  const [previewDoc, setPreviewDoc] = useState(null);

  // Sync state with URL query parameter ?siklus=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const siklusParam = params.get("siklus");
    if (siklusParam && ["semua", "1", "2", "3", "4"].includes(siklusParam)) {
      setActiveSiklus(siklusParam);
    } else {
      setActiveSiklus("semua");
    }
  }, [location.search]);

  // Handle changing active siklus tab
  const handleTabChange = (key) => {
    setActiveSiklus(key);
    navigate(`/artefak?siklus=${key}`, { replace: true });
  };

  // Filtered list based on active siklus and search query
  const filteredSiklusList = useMemo(() => {
    return SIKLUS_ARTEFAK_LIST.filter((siklus) => {
      // Tab matching
      const matchesTab = activeSiklus === "semua" || siklus.key === activeSiklus;
      if (!matchesTab) return false;

      // Search matching
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inTitle = siklus.title.toLowerCase().includes(q);
      const inMateri = siklus.materi.toLowerCase().includes(q);
      const inModel = siklus.model.toLowerCase().includes(q);
      const inDesc = siklus.deskripsi.toLowerCase().includes(q);
      const inRpp = siklus.items.rpp.title?.toLowerCase().includes(q) || siklus.items.rpp.deskripsi.toLowerCase().includes(q);
      const inMedia = siklus.items.mediaAjar.title?.toLowerCase().includes(q) || siklus.items.mediaAjar.deskripsi.toLowerCase().includes(q);
      const inJob = siklus.items.jobsheet.title?.toLowerCase().includes(q) || siklus.items.jobsheet.deskripsi.toLowerCase().includes(q);

      return inTitle || inMateri || inModel || inDesc || inRpp || inMedia || inJob;
    });
  }, [activeSiklus, searchQuery]);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 min-h-screen">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8" aria-label="Breadcrumb">
        <Link to="/" className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors">
          <Home size={13} />
          <span>Beranda</span>
        </Link>
        <ChevronRight size={12} className="text-neutral-400" />
        <Link 
          to="/artefak" 
          onClick={() => handleTabChange("semua")}
          className={`hover:text-neutral-950 transition-colors ${activeSiklus === "semua" ? "font-bold text-neutral-900" : ""}`}
        >
          Artefak
        </Link>
        {activeSiklus !== "semua" && (
          <>
            <ChevronRight size={12} className="text-neutral-400" />
            <span className="font-bold text-neutral-950">Siklus {activeSiklus}</span>
          </>
        )}
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles size={13} />
          <span>PPG Calon Guru • Perangkat Pembelajaran PPL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight mb-4">
          Artefak Pembelajaran
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Koleksi lengkap artefak dan perangkat pembelajaran per siklus selama masa Praktik Pengalaman Lapangan (PPL). 
          Setiap siklus memuat <span className="font-semibold text-neutral-900">RPP (Rencana Pelaksanaan Pembelajaran)</span>, <span className="font-semibold text-neutral-900">Media Ajar</span>, dan <span className="font-semibold text-neutral-900">Jobsheet (opsional)</span> lengkap dengan pratinjau dokumen langsung.
        </p>
      </header>

      {/* Navigation Tabs (Siklus 1, 2, 3, 4, Semua) & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
        {/* Siklus Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {[
            { key: "semua", label: "Semua Siklus" },
            { key: "1", label: "Siklus 1" },
            { key: "2", label: "Siklus 2" },
            { key: "3", label: "Siklus 3" },
            { key: "4", label: "Siklus 4" },
          ].map((tab) => {
            const isActive = activeSiklus === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-md ring-2 ring-neutral-950 ring-offset-2"
                    : "bg-white text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Filter */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari RPP, Media, Jobsheet, materi..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-900 text-xs sm:text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
              aria-label="Hapus Pencarian"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filteredSiklusList.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8 max-w-lg mx-auto">
          <FileText size={40} className="mx-auto text-neutral-300 mb-3" />
          <h3 className="text-lg font-bold text-neutral-900 mb-1">Tidak Ditemukan Artefak</h3>
          <p className="text-xs sm:text-sm text-neutral-500 mb-4">
            Pencarian "{searchQuery}" tidak cocok dengan siklus atau perangkat apapun.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveSiklus("semua");
            }}
            className="px-4 py-2 bg-neutral-950 text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* Siklus Sections */}
      <div className="space-y-16">
        {filteredSiklusList.map((siklus) => {
          const { rpp, mediaAjar, jobsheet } = siklus.items;

          return (
            <section
              key={siklus.id}
              id={`siklus-${siklus.key}`}
              className="bg-white rounded-3xl border border-neutral-200/90 shadow-sm overflow-hidden"
            >
              {/* Header Siklus */}
              <div className="p-6 sm:p-8 md:p-10 border-b border-neutral-200 bg-neutral-900 text-white">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[11px] font-bold uppercase tracking-wider">
                    <GraduationCap size={13} />
                    <span>{siklus.badge}</span>
                  </div>
                  <span className="text-neutral-400 text-xs font-mono">
                    SIKLUS 0{siklus.siklusNumber}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                  {siklus.title}
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-6 font-normal">
                  {siklus.deskripsi}
                </p>

                {/* Meta Information Tags */}
                <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs text-neutral-300">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10">
                    <School size={13} className="text-neutral-300" />
                    <span>{siklus.kelas}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10">
                    <BookOpen size={13} className="text-neutral-300" />
                    <span>{siklus.model}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10">
                    <Clock size={13} className="text-neutral-300" />
                    <span>{siklus.alokasi}</span>
                  </div>
                </div>
              </div>

              {/* 3 Component Cards Grid: RPP, Media Ajar, Jobsheet (Opsional) */}
              <div className="p-6 sm:p-8 md:p-10 bg-neutral-50/50">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-950">Perangkat Siklus {siklus.key}</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      3 Komponen Utama: RPP / Modul Ajar, Media Pembelajaran, dan Jobsheet Praktikum
                    </p>
                  </div>
                  <span className="text-xs font-medium text-neutral-400 hidden sm:inline-block">
                    3 Dokumen Terkait
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 1. RPP / MODUL AJAR */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-neutral-900 hover:shadow-lg transition-all duration-300 group">
                    <div>
                      {/* Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-neutral-950 text-white text-[10px] font-extrabold tracking-wider uppercase">
                          {rpp.tag}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                          <FileText size={18} />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Komponen 1
                      </div>
                      <h4 className="font-extrabold text-base sm:text-lg text-neutral-950 mb-2 leading-snug group-hover:text-neutral-900">
                        {rpp.nama}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {rpp.deskripsi}
                      </p>

                      <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center gap-1.5 mb-6">
                        <CheckCircle2 size={13} className="text-neutral-800" />
                        <span>{rpp.info}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setPreviewDoc({ ...rpp, siklusTitle: siklus.title })}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                      >
                        <Eye size={14} />
                        <span>Pratinjau</span>
                      </button>
                      <a
                        href={rpp.pdfUrl}
                        download
                        className="p-2.5 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:scale-[0.98] transition-all cursor-pointer"
                        title="Unduh Dokumen RPP"
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  </div>

                  {/* 2. MEDIA AJAR */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-neutral-900 hover:shadow-lg transition-all duration-300 group">
                    <div>
                      {/* Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-white text-[10px] font-extrabold tracking-wider uppercase">
                          {mediaAjar.tag}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                          <Presentation size={18} />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Komponen 2
                      </div>
                      <h4 className="font-extrabold text-base sm:text-lg text-neutral-950 mb-2 leading-snug group-hover:text-neutral-900">
                        {mediaAjar.nama}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {mediaAjar.deskripsi}
                      </p>

                      <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center gap-1.5 mb-6">
                        <CheckCircle2 size={13} className="text-neutral-800" />
                        <span>{mediaAjar.info}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setPreviewDoc({ ...mediaAjar, siklusTitle: siklus.title })}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                      >
                        <Eye size={14} />
                        <span>Pratinjau</span>
                      </button>
                      <a
                        href={mediaAjar.pdfUrl}
                        download
                        className="p-2.5 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:scale-[0.98] transition-all cursor-pointer"
                        title="Unduh Media Ajar"
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  </div>

                  {/* 3. JOBSHEET (OPSIONAL) */}
                  <div className="bg-white rounded-2xl border border-dashed border-neutral-300 p-6 flex flex-col justify-between hover:border-solid hover:border-neutral-900 hover:shadow-lg transition-all duration-300 group">
                    <div>
                      {/* Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-900 border border-neutral-300 text-[10px] font-extrabold tracking-wider uppercase">
                            Jobsheet
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold">
                            Opsional
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                          <ClipboardList size={18} />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                        Komponen 3 (Praktik)
                      </div>
                      <h4 className="font-extrabold text-base sm:text-lg text-neutral-950 mb-2 leading-snug group-hover:text-neutral-900">
                        {jobsheet.nama}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {jobsheet.deskripsi}
                      </p>

                      <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center gap-1.5 mb-6">
                        <CheckCircle2 size={13} className="text-neutral-800" />
                        <span>{jobsheet.info}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setPreviewDoc({ ...jobsheet, siklusTitle: siklus.title })}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-950 text-white text-xs font-bold hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                      >
                        <Eye size={14} />
                        <span>Pratinjau</span>
                      </button>
                      <a
                        href={jobsheet.pdfUrl}
                        download
                        className="p-2.5 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:scale-[0.98] transition-all cursor-pointer"
                        title="Unduh Jobsheet"
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* MODAL PRATINJAU DOKUMEN (PDF Viewer) */}
      {previewDoc && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/80">
              <div className="max-w-[70%]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 text-white">
                    {previewDoc.tag || "Dokumen"}
                  </span>
                  {previewDoc.isOptional && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                      Opsional
                    </span>
                  )}
                  <span className="text-xs text-neutral-500 truncate hidden sm:inline">
                    {previewDoc.siklusTitle}
                  </span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-neutral-950 truncate">
                  {previewDoc.nama} — {previewDoc.label}
                </h3>
              </div>

              {/* Action Buttons in Header */}
              <div className="flex items-center gap-2">
                <a
                  href={previewDoc.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors"
                  title="Unduh PDF"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Unduh</span>
                </a>
                <a
                  href={previewDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors"
                  title="Buka di Tab Baru"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Tab Baru</span>
                </a>
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-2 rounded-xl bg-neutral-200 hover:bg-neutral-300 text-neutral-900 transition-colors cursor-pointer"
                  aria-label="Tutup Pratinjau"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Embedded Iframe Viewer */}
            <div className="flex-1 bg-neutral-900 relative">
              <iframe
                src={`${previewDoc.pdfUrl}#toolbar=1`}
                className="w-full h-full border-none"
                title={`Pratinjau ${previewDoc.label}`}
              />
            </div>

            {/* Modal Footer Info */}
            <div className="px-6 py-3 border-t border-neutral-200 bg-white flex flex-wrap items-center justify-between text-xs text-neutral-500">
              <span className="truncate max-w-md">{previewDoc.deskripsi}</span>
              <span className="font-mono text-[11px] text-neutral-400">PDF Reader • PPG Calon Guru</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
