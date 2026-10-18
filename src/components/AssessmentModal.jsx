import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, CheckCircle2, Download, ExternalLink, Award } from "lucide-react";

export default function AssessmentModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose} 
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-neutral-200"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-neutral-200 p-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-900">
                <FileText size={20} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{data.category}</span>
                <h2 className="text-xl font-bold text-neutral-950">{data.title}</h2>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-neutral-100 text-neutral-700 rounded-full transition cursor-pointer"
              aria-label="Tutup Modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8 grid lg:grid-cols-2 gap-10">
            {/* KIRI: PDF PREVIEW */}
            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100 aspect-[3/4]">
                <iframe src={`${data.pdfUrl}#toolbar=0`} className="w-full h-full" title="PDF Preview" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href={data.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-white text-neutral-800 border border-neutral-300 rounded-xl font-semibold hover:bg-neutral-100 transition-all text-xs">
                  <ExternalLink size={15} /> Buka Tab Baru
                </a>
                <a href={data.pdfUrl} download className="flex items-center justify-center gap-2 py-3 bg-neutral-950 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-all text-xs shadow-xs">
                  <Download size={15} /> Unduh PDF
                </a>
              </div>
            </div>

            {/* KANAN: GARIS BESAR PENILAIAN */}
            <div className="space-y-6">
              <div className="bg-neutral-950 text-white p-7 rounded-2xl border border-neutral-900">
                <p className="text-neutral-400 font-bold uppercase tracking-widest text-[10px] mb-1">Akumulasi Nilai Akhir</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-5xl font-black text-white">{data.score}</h3>
                  <span className="text-neutral-400 text-sm font-medium">/ 100</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-neutral-950 flex items-center gap-2">
                  <Award size={18} className="text-neutral-900" /> Garis Besar Penilaian
                </h4>
                
                <div className="space-y-3">
                  {data.outline?.map((point, index) => (
                    <div key={index} className="flex gap-3.5 p-4 bg-neutral-50 rounded-xl border border-neutral-200 group hover:border-neutral-900 transition-colors">
                      <div className="mt-0.5">
                        <CheckCircle2 size={18} className="text-neutral-900" />
                      </div>
                      <p className="text-neutral-700 leading-relaxed font-normal text-xs sm:text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-neutral-100 rounded-xl border border-neutral-200">
                <p className="text-xs text-neutral-600 italic font-normal">
                  * Penilaian dilakukan secara komprehensif untuk melihat capaian linier kompetensi mahasiswa selama PPL Terbimbing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
