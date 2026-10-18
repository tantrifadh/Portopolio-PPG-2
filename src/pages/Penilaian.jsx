import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import AssessmentModal from "../components/AssessmentModal";
import { DATA_PENILAIAN } from "../data/content";
import { FileCheck, ChevronRight, Star } from "lucide-react";

export default function Penilaian() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight mb-4">Penilaian PPL</h1>
        <p className="text-neutral-600 text-lg">Hasil evaluasi perangkat dan praktik mengajar oleh Guru Pamong serta Dosen Pembimbing Lapangan.</p>
        <div className="h-1 w-16 bg-neutral-950 rounded-full mt-6"></div>
      </div>

      <div className="grid gap-5">
        {DATA_PENILAIAN?.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelected(item)}
            className="group bg-white p-7 rounded-2xl border border-neutral-200 hover:border-neutral-900 hover:shadow-lg transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <FileCheck size={26} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 group-hover:text-neutral-950">{item.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-6 self-end md:self-center">
              <div className="text-right">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Skor Penilaian</p>
                <div className="flex items-center gap-1.5 justify-end">
                  <Star size={16} className="fill-neutral-900 text-neutral-900" />
                  <span className="text-2xl font-black text-neutral-950">{item.score}</span>
                  <span className="text-xs text-neutral-400 font-semibold">/100</span>
                </div>
              </div>
              <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-500 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <AssessmentModal 
        isOpen={Boolean(selected)} 
        onClose={() => setSelected(null)} 
        data={selected} 
      />
    </div>
  );
}
