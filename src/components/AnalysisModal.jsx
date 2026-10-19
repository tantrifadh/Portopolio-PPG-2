import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, RefreshCcw, FileText, Download, ExternalLink } from "lucide-react";

export default function AnalysisModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-neutral-200"
        >
          {/* Close Button - Floating */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full transition-all z-50 cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X size={20} />
          </button>

          <div className="p-8 md:p-10">
            {/* Judul Artefak / Seminar */}
            <div className="mb-8 max-w-[90%]">
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

            <div className="grid lg:grid-cols-5 gap-10">
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

              {/* KANAN: ANALISIS (3 Kolom) */}
              <div className="lg:col-span-3 space-y-8">
                <section>
                  <h3 className="flex items-center gap-2.5 font-bold text-neutral-900 mb-3 text-lg">
                    <div className="p-1.5 bg-neutral-100 rounded-lg text-neutral-900">
                      <Target size={18} />
                    </div>
                    Konteks & Tujuan
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
                    {data.analysis.context}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 bg-neutral-950 text-white rounded-2xl border border-neutral-900">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sm">
                      Kelebihan
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {data.analysis.strengths}
                    </p>
                  </div>
                  <div className="p-5 bg-neutral-100 rounded-2xl border border-neutral-200">
                    <h4 className="font-bold text-neutral-950 mb-2 flex items-center gap-2 text-sm">
                      Kendala & Tantangan
                    </h4>
                    <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                      {data.analysis.weaknesses}
                    </p>
                  </div>
                </div>

                <section>
                  <h3 className="flex items-center gap-2.5 font-bold text-neutral-900 mb-3 text-lg">
                    <div className="p-1.5 bg-neutral-100 rounded-lg text-neutral-900">
                      <Lightbulb size={18} />
                    </div>
                    Refleksi Pribadi
                  </h3>
                  <div className="border-l-2 border-neutral-950 pl-5 py-1">
                    <p className="text-neutral-700 italic text-sm leading-relaxed">
                      "{data.analysis.reflection}"
                    </p>
                  </div>
                </section>

                <section className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800">
                  <h3 className="flex items-center gap-2 font-bold mb-2.5 text-base text-white">
                    <RefreshCcw size={16} /> Rencana Tindak Lanjut & Perbaikan
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {data.analysis.improvement}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
