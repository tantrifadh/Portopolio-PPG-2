import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import AnalysisModal from "../components/AnalysisModal";
import { SEMINAR_LIST } from "../data/content";
import { FileText, ArrowRight, Sparkles, BookOpen, Target, Award, Rocket } from "lucide-react";

export default function Seminar() {
  const [selectedSeminar, setSelectedSeminar] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Refleksi Semester",
    "Refleksi Komprehensif",
    "Visi & Desain Masa Depan"
  ];

  const filteredList = activeCategory === "Semua"
    ? SEMINAR_LIST
    : SEMINAR_LIST.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <Breadcrumbs />

      {/* Header Halaman Seminar */}
      <div className="mb-12">
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] uppercase font-bold tracking-widest text-neutral-700 mb-3">
          <Sparkles size={12} className="text-neutral-900" />
          Mata Kuliah Seminar PPG
        </div> */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight mb-4">
          Seminar PPG
        </h1>
        <p className="text-neutral-600 text-lg max-w-3xl leading-relaxed">
          Kumpulan refleksi komprehensif, evaluasi pembelajaran semester 1 &amp; 2, artikulasi visi pendidikan Indonesia menuju guru profesional abad ke-21.
        </p>
        <div className="h-1 w-16 bg-neutral-950 rounded-full mt-6 mb-8"></div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-neutral-950 text-white shadow-xs"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Kartu Seminar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredList.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedSeminar(item)}
            className="cursor-pointer group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-900 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            {/* Bagian Atas Kartu */}
            <div className="relative h-44 p-7 bg-neutral-100/80 group-hover:bg-neutral-900 transition-colors duration-300 flex flex-col justify-between">
              {/* Badge Tags */}
              {/* <div className="flex flex-wrap gap-1.5 relative z-10">
                {item.tags?.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 bg-white/90 group-hover:bg-neutral-800 group-hover:text-neutral-200 text-neutral-800 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}

              {/* Kutipan Deskripsi */}
              <div className="relative z-10">
                {/* <p className="text-neutral-700 group-hover:text-neutral-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal transition-colors">
                  "{item.description}"
                </p> */}
              </div>
            </div>

            {/* Bagian Bawah Kartu */}
            <div className="p-6 flex flex-col flex-grow justify-between bg-white">
              <div className="mb-6">
                {/* <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1 block">
                  {item.category}
                </span> */}
                <h3 className="font-bold text-lg mb-1.5 text-neutral-900 group-hover:text-neutral-950 transition-colors">
                  {item.title}
                </h3>
                {/* {item.subtitle && (
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                )} */}
                <div className="h-0.5 w-8 bg-neutral-300 group-hover:w-16 group-hover:bg-neutral-900 transition-all duration-300 mt-3"></div>
              </div>

              <button 
                className="w-full flex items-center justify-center gap-2 bg-neutral-950 text-white py-3.5 rounded-xl font-semibold hover:bg-neutral-800 transition-all active:scale-[0.98] text-sm cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSeminar(item);
                }}
              >
                <FileText size={16} /> 
                <span>Buka Lembar Analisis</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Tambahan di Bawah Grid
      <div className="mt-16 p-8 bg-white rounded-2xl border border-neutral-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-base font-bold text-neutral-950">
            Tujuan Mata Kuliah Seminar PPG
          </h4>
          <p className="text-sm text-neutral-600 max-w-2xl">
            Membekali calon guru dengan kemampuan metakognisi, berpikir kritis, serta kemandirian melakukan refleksi berkelanjutan untuk terus meningkatkan kualitas pembelajaran peserta didik.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-xl bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200">
            5 Dokumen Utama
          </div>
        </div>
      </div> */}

      {/* Modal Detail Analisis Seminar */}
      <AnalysisModal 
        isOpen={Boolean(selectedSeminar)} 
        onClose={() => setSelectedSeminar(null)} 
        data={selectedSeminar} 
      />
    </div>
  );
}
