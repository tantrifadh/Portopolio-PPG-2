import React from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Shield, Users, BookOpen, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { MISI_DATA } from "../data/content";

const IconMap = { BookOpen, Cpu, Users, Shield };

export default function Misi() {
  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-neutral-50 text-neutral-900">
      <Breadcrumbs />

      {/* HERO SECTION: VISI */}
      <section className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-neutral-950 text-white p-10 md:p-16 rounded-3xl border border-neutral-900 overflow-hidden shadow-xl"
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-white">
              <Target size={24} />
            </div>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-[0.3em]">
              Visi & Model Guru Yang Dituju
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              "{MISI_DATA.visi}"
            </h2>
          </div>
        </motion.div>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* MISI SECTION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-950 border border-neutral-200">
              <Rocket size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Langkah Strategis</span>
              <h3 className="text-2xl font-extrabold text-neutral-950">Misi Profesional</h3>
            </div>
          </div>
          <div className="space-y-4">
            {MISI_DATA.misi.map((misi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-neutral-200 shadow-xs hover:border-neutral-900 transition-colors"
              >
                <div className="mt-0.5">
                  <CheckCircle2 size={18} className="text-neutral-950 shrink-0" />
                </div>
                <p className="font-medium text-neutral-700 text-sm leading-relaxed">{misi}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* KOMPETENSI ROADMAP */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-950 border border-neutral-200">
              <Sparkles size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Pengembangan Diri</span>
              <h3 className="text-2xl font-extrabold text-neutral-950">Kompetensi Inti</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MISI_DATA.kompetensi.map((komp, i) => {
              const Icon = IconMap[komp.icon];
              return (
                <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col items-start group hover:border-neutral-900 transition-colors">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-950 mb-4 border border-neutral-200 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-bold text-base text-neutral-950 mb-1.5">{komp.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{komp.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* KARAKTER GURU PROFESIONAL */}
      <section className="mt-16">
        <div className="bg-neutral-950 text-white p-10 md:p-14 rounded-3xl border border-neutral-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-md text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-400">Pondasi Sikap</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1 mb-2">Karakter Pendidik</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Nilai-nilai integritas dasar yang diinternalisasi dalam setiap proses interaksi pengajaran.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {MISI_DATA.karakter.map((char, i) => (
                <span 
                  key={i} 
                  className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-bold text-neutral-200 hover:border-white transition-colors"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
