import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import DocCard from "../components/DocCard";
import { DOKUMENTASI_LIST } from "../data/content";

export default function Dokumentasi() {
  const [filter, setFilter] = useState("Semua");
  const [lightbox, setLightbox] = useState(null);

  const categories = ["Semua", "Mengajar", "Diskusi"];

  const filteredData = filter === "Semua" 
    ? DOKUMENTASI_LIST 
    : DOKUMENTASI_LIST.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight mb-4">Dokumentasi Kegiatan</h1>
        <p className="text-neutral-600 text-lg max-w-2xl">
          Dokumentasi visual rangkaian aktivitas mengajar, pendampingan scaffolding, presentasi karya, dan koordinasi reflektif.
        </p>
        <div className="h-1 w-16 bg-neutral-950 rounded-full mt-6 mb-8"></div>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                filter === cat
                  ? "bg-neutral-950 text-white shadow-xs"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid menggunakan komponen DocCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData?.map((item) => (
          <DocCard 
            key={item.id} 
            item={item} 
            onExpand={(imgUrl, data) => setLightbox({ url: imgUrl, title: data.title })} 
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <img 
                src={lightbox.url} 
                alt={lightbox.title || "Dokumentasi kegiatan"} 
                className="max-h-[80vh] rounded-3xl shadow-2xl border-4 border-white/10 object-contain" 
              />
              <h2 className="text-white mt-6 text-xl font-bold text-center">{lightbox.title}</h2>
              <button 
                onClick={() => setLightbox(null)} 
                className="absolute -top-12 right-0 text-white hover:text-neutral-300 cursor-pointer"
                aria-label="Tutup Preview"
              >
                <X size={32} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
