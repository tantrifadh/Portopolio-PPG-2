import React from "react";
import { FileText, ArrowRight } from "lucide-react";

export default function ArtifactCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-900 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* BAGIAN ATAS: Deskripsi Singkat */}
      <div className="relative h-44 p-7 bg-neutral-100/80 group-hover:bg-neutral-900 transition-colors duration-300 flex flex-col justify-between">
        {/* Badge Tags */}
        <div className="flex gap-2 relative z-10">
          {item.tags?.map((tag, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 bg-white/90 group-hover:bg-neutral-800 group-hover:text-neutral-200 text-neutral-800 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Konten Deskripsi Singkat */}
        <div className="relative z-10">
          <p className="text-neutral-700 group-hover:text-neutral-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal transition-colors">
            "{item.description || item.analysis?.context?.substring(0, 120) + "..."}"
          </p>
        </div>
      </div>

      {/* BAGIAN BAWAH: Judul & Tombol */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2 text-neutral-900 group-hover:text-neutral-950 transition-colors">
            {item.title}
          </h3>
          <div className="h-0.5 w-8 bg-neutral-300 group-hover:w-16 group-hover:bg-neutral-900 transition-all duration-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-neutral-950 text-white py-3.5 rounded-xl font-semibold hover:bg-neutral-800 transition-all active:scale-[0.98] text-sm cursor-pointer">
          <FileText size={16} /> 
          <span>Detail Analisis</span>
          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
}
