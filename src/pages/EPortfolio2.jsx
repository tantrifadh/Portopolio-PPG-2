import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, MessageSquare, Quote, Star, GraduationCap } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { EPORTFOLIO_2_DATA } from "../data/content";

export default function EPortfolio2() {
  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-neutral-50 text-neutral-900">
      <Breadcrumbs />

      {/* Header Halaman */}
      <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Refleksi Kritis & Filosofi</span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950">E-Portfolio 2</h1>
        <div className="h-1 w-16 bg-neutral-950 mx-auto rounded-full mt-2 mb-4"></div>
        <p className="text-neutral-600 text-base sm:text-lg">
          Sintesis pengalaman praktis, refleksi mendalam, dan ideologi pengajaran sebagai calon guru profesional.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* KOLOM KIRI: REFLEKSI AKHIR PPL */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-950 border border-neutral-200">
              <Lightbulb size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Evaluasi Pembelajaran</span>
              <h2 className="text-2xl font-extrabold text-neutral-950">Refleksi Akhir</h2>
            </div>
          </div>

          <div className="space-y-4">
            {/* Pembelajaran */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-xs hover:border-neutral-900 transition-colors"
            >
              <h4 className="flex items-center gap-2 font-bold text-neutral-950 mb-3 uppercase tracking-wider text-xs">
                <BookOpen size={16} /> Apa yang dipelajari?
              </h4>
              <p className="text-neutral-700 leading-relaxed text-sm">
                {EPORTFOLIO_2_DATA.refleksi.pembelajaran}
              </p>
            </motion.div>

            {/* Tantangan */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 }}
              className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-xs hover:border-neutral-900 transition-colors"
            >
              <h4 className="flex items-center gap-2 font-bold text-neutral-950 mb-3 uppercase tracking-wider text-xs">
                <Star size={16} /> Tantangan & Solusi
              </h4>
              <p className="text-neutral-700 leading-relaxed text-sm">
                {EPORTFOLIO_2_DATA.refleksi.tantangan}
              </p>
            </motion.div>

            {/* Umpan Balik */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.16 }}
              className="bg-neutral-950 text-white p-7 rounded-2xl border border-neutral-900 shadow-md"
            >
              <h4 className="flex items-center gap-2 font-bold text-neutral-200 mb-3 uppercase tracking-wider text-xs">
                <MessageSquare size={16} /> Umpan Balik Akhir
              </h4>
              <p className="text-neutral-300 leading-relaxed text-sm italic">
                "{EPORTFOLIO_2_DATA.refleksi.umpanBalik}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* KOLOM KANAN: FILOSOFI MENGAJAR */}
        <section className="space-y-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-950 border border-neutral-200">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Filosofi Pendidik</span>
              <h2 className="text-2xl font-extrabold text-neutral-950">Ideologi Pengajaran</h2>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-xs relative overflow-hidden">
              <Quote size={120} className="absolute -top-6 -right-6 text-neutral-100 -z-0" strokeWidth={1} />

              <div className="relative z-10 space-y-6 text-justify">
                {/* Paragraf 1 dengan Drop Cap */}
                <p className="text-neutral-700 leading-relaxed text-base first-letter:text-5xl first-letter:font-extrabold first-letter:text-neutral-950 first-letter:mr-2.5 first-letter:float-left first-letter:leading-none">
                  {EPORTFOLIO_2_DATA.filosofi[0]}
                </p>

                {/* Paragraf 2 - Highlight Tengah */}
                <div className="border-l-2 border-neutral-950 pl-5 py-2">
                  <p className="text-neutral-800 leading-relaxed text-sm italic font-medium">
                    {EPORTFOLIO_2_DATA.filosofi[1]}
                  </p>
                </div>

                {/* Paragraf 3 */}
                <p className="text-neutral-700 leading-relaxed text-sm">
                  {EPORTFOLIO_2_DATA.filosofi[2]}
                </p>
              </div>

              {/* Nilai Inti (Core Values) */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-2 relative z-10">
                {["Menuntun", "Kodrat Zaman", "Berdiferensiasi", "Reflektif"].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Call-out Quote Ki Hajar Dewantara */}
            <div className="flex items-center gap-4 px-6 py-5 bg-neutral-950 rounded-2xl text-white border border-neutral-900 shadow-sm">
              <div className="text-white shrink-0">
                <Star size={24} className="fill-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm italic font-normal text-neutral-300 leading-relaxed">
                  "Apapun yang diperbuat oleh seseorang itu, hendaknya dapat bermanfaat bagi dirinya sendiri, bermanfaat bagi bangsanya, dan bermanfaat bagi manusia di dunia pada umumnya."
                </p>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-2">
                  — Ki Hajar Dewantara
                </p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
