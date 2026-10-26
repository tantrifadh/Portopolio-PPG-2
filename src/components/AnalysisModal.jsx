import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, RefreshCcw, FileText, Download, ExternalLink, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export default function AnalysisModal({ isOpen, onClose, data }) {
  const [activeCourseId, setActiveCourseId] = useState(null);

  if (!isOpen || !data) return null;

  const currentCourse = data.mataKuliah 
    ? (activeCourseId ? data.mataKuliah.find(m => m.id === activeCourseId) : data.mataKuliah[0])
    : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/75 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl border border-neutral-200"
        >
          {/* Close Button - Floating */}
          <button 
            onClick={onClose} 
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full transition-all z-50 cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X size={20} />
          </button>

          <div className="p-6 sm:p-8 md:p-10">
            {/* Judul Artefak / Seminar */}
            <div className="mb-8 max-w-[85%]">
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
                {data.category ? `Lembar Analisis & Refleksi • ${data.category}` : "Lembar Analisis Artefak"}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-950 leading-tight mt-1">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-sm text-neutral-600 mt-1.5 font-medium leading-relaxed">
                  {data.subtitle}
                </p>
              )}
              <div className="h-0.5 w-16 bg-neutral-950 mt-3 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* KIRI: PDF PREVIEW (2 Kolom) */}
              <div className="lg:col-span-2 space-y-5">
                <div className="group relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100 aspect-[3/4]">
                  {data.pdfUrl ? (
                    <iframe
                      src={`${data.pdfUrl}#toolbar=1`}
                      className="w-full h-full"
                      title="PDF Preview"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-neutral-400">
                      <FileText size={48} className="mb-3 opacity-30" />
                      <p className="text-sm">Dokumen PDF tidak ditemukan</p>
                    </div>
                  )}
                </div>

                {/* Tombol Download & View */}
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={data.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white text-neutral-800 border border-neutral-300 rounded-xl font-semibold hover:bg-neutral-100 transition-all text-xs"
                  >
                    <ExternalLink size={15} /> Buka Tab Baru
                  </a>
                  <a 
                    href={data.pdfUrl} 
                    download
                    className="flex items-center justify-center gap-2 py-3 bg-neutral-950 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-all text-xs shadow-xs"
                  >
                    <Download size={15} /> Unduh PDF
                  </a>
                </div>
              </div>

              {/* KANAN: ANALISIS / 4C (3 Kolom) */}
              <div className="lg:col-span-3 space-y-6">
                {data.fourC ? (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-neutral-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                          Model Refleksi 4C
                        </span>
                        <h3 className="font-extrabold text-neutral-950 text-base">
                          Kerangka Refleksi 4C
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[10px] font-bold uppercase border border-neutral-200">
                        Connection • Challenge • Concept • Change
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {/* C1 - Connection */}
                      <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                            C1
                          </span>
                          <h4 className="font-bold text-xs uppercase tracking-wide text-neutral-950">
                            Connection (Keterkaitan)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                          {data.fourC.connection}
                        </p>
                      </div>

                      {/* C2 - Challenge */}
                      <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                            C2
                          </span>
                          <h4 className="font-bold text-xs uppercase tracking-wide text-neutral-950">
                            Challenge (Tantangan)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                          {data.fourC.challenge}
                        </p>
                      </div>

                      {/* C3 - Concept */}
                      <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                            C3
                          </span>
                          <h4 className="font-bold text-xs uppercase tracking-wide text-neutral-950">
                            Concept (Konsep Kunci)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                          {data.fourC.concept}
                        </p>
                      </div>

                      {/* C4 - Change */}
                      <div className="bg-neutral-950 text-white p-4 sm:p-5 rounded-2xl border border-neutral-900 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded bg-white text-neutral-950 text-[11px] font-bold flex items-center justify-center shrink-0">
                            C4
                          </span>
                          <h4 className="font-bold text-xs uppercase tracking-wide text-white">
                            Change (Perubahan Praktik)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                          {data.fourC.change}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {data.analysis?.context && (
                      <section>
                        <h3 className="flex items-center gap-2.5 font-bold text-neutral-900 mb-2.5 text-base">
                          <div className="p-1.5 bg-neutral-100 rounded-lg text-neutral-900">
                            <Target size={16} />
                          </div>
                          Konteks &amp; Tujuan
                        </h3>
                        <p className="text-neutral-700 leading-relaxed text-xs sm:text-sm bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
                          {data.analysis.context}
                        </p>
                      </section>
                    )}

                    {(data.analysis?.strengths || data.analysis?.weaknesses) && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {data.analysis?.strengths && (
                          <div className="p-4 sm:p-5 bg-neutral-950 text-white rounded-2xl border border-neutral-900">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                              Kelebihan
                            </h4>
                            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                              {data.analysis.strengths}
                            </p>
                          </div>
                        )}
                        {data.analysis?.weaknesses && (
                          <div className="p-4 sm:p-5 bg-neutral-100 rounded-2xl border border-neutral-200">
                            <h4 className="font-bold text-neutral-950 mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                              Kendala &amp; Tantangan
                            </h4>
                            <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                              {data.analysis.weaknesses}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {data.analysis?.reflection && (
                      <section>
                        <h3 className="flex items-center gap-2.5 font-bold text-neutral-900 mb-2 text-base">
                          <div className="p-1.5 bg-neutral-100 rounded-lg text-neutral-900">
                            <Lightbulb size={16} />
                          </div>
                          Refleksi Pribadi
                        </h3>
                        <div className="border-l-2 border-neutral-950 pl-4 py-1">
                          <p className="text-neutral-700 italic text-xs sm:text-sm leading-relaxed">
                            "{data.analysis.reflection}"
                          </p>
                        </div>
                      </section>
                    )}

                    {data.analysis?.improvement && (
                      <section className="bg-neutral-900 text-white p-5 rounded-2xl border border-neutral-800">
                        <h3 className="flex items-center gap-2 font-bold mb-2 text-sm text-white">
                          <RefreshCcw size={15} /> Rencana Tindak Lanjut &amp; Perbaikan
                        </h3>
                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                          {data.analysis.improvement}
                        </p>
                      </section>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* BREAKDOWN REFLEKSI PER MATA KULIAH (MODEL 4C) */}
            {data.mataKuliah && data.mataKuliah.length > 0 && (
              <div className="mt-12 pt-10 border-t border-neutral-200">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] uppercase font-bold tracking-wider text-neutral-800 mb-2">
                    <Sparkles size={12} className="text-neutral-950" />
                    Kerangka Analisis 4C (Semester 1)
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-950 tracking-tight">
                    Breakdown Refleksi Per Mata Kuliah
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl">
                    Analisis mendalam per mata kuliah inti semester 1 menggunakan model refleksi 4C (Connection, Challenge, Concept, Change).
                  </p>
                </div>

                {/* Tab selector mata kuliah */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {data.mataKuliah.map((mk) => {
                    const isSelected = (currentCourse && currentCourse.id === mk.id);
                    return (
                      <button
                        key={mk.id}
                        onClick={() => setActiveCourseId(mk.id)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? "bg-neutral-950 text-white shadow-sm"
                            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                        }`}
                      >
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-neutral-800 text-neutral-200">
                          {mk.code}
                        </span>
                        <span>{mk.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* 4C Cards for Selected Course */}
                {currentCourse && (
                  <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-neutral-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                          {currentCourse.code} • {currentCourse.sks}
                        </span>
                        <h4 className="text-lg font-bold text-neutral-950">
                          {currentCourse.name}
                        </h4>
                        <p className="text-xs text-neutral-600 mt-0.5">
                          {currentCourse.summary}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* 1. Connection */}
                      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-6 h-6 rounded-md bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                            C1
                          </span>
                          <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                            Connection (Keterkaitan)
                          </h5>
                        </div>
                        <p className="text-xs text-neutral-700 leading-relaxed flex-grow">
                          {currentCourse.fourC.connection}
                        </p>
                      </div>

                      {/* 2. Challenge */}
                      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-6 h-6 rounded-md bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                            C2
                          </span>
                          <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                            Challenge (Tantangan)
                          </h5>
                        </div>
                        <p className="text-xs text-neutral-700 leading-relaxed flex-grow">
                          {currentCourse.fourC.challenge}
                        </p>
                      </div>

                      {/* 3. Concept */}
                      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-6 h-6 rounded-md bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                            C3
                          </span>
                          <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                            Concept (Konsep Kunci)
                          </h5>
                        </div>
                        <p className="text-xs text-neutral-700 leading-relaxed flex-grow">
                          {currentCourse.fourC.concept}
                        </p>
                      </div>

                      {/* 4. Change */}
                      <div className="bg-white p-5 rounded-xl border border-neutral-900 shadow-xs flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-6 h-6 rounded-md bg-neutral-950 text-white text-xs font-bold flex items-center justify-center">
                            C4
                          </span>
                          <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-950">
                            Change (Perubahan Praktik)
                          </h5>
                        </div>
                        <p className="text-xs text-neutral-800 font-medium leading-relaxed flex-grow">
                          {currentCourse.fourC.change}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

