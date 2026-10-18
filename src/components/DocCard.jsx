import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function DocCard({ item, onExpand }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-900 hover:shadow-xl transition-all">
      {/* CAROUSEL SECTION */}
      <div className="relative h-64 overflow-hidden bg-neutral-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={item.images[currentIndex]}
            alt={item.title || "Dokumentasi Kegiatan"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => onExpand(item.images[currentIndex], item)}
          />
        </AnimatePresence>

        {/* Tombol Navigasi Carousel */}
        {item.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevSlide}
              aria-label="Previous image"
              className="p-2 bg-neutral-950/80 hover:bg-neutral-950 text-white rounded-full shadow-md transition cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next image"
              className="p-2 bg-neutral-950/80 hover:bg-neutral-950 text-white rounded-full shadow-md transition cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Indikator Dots */}
        {item.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {item.images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-5 bg-white shadow-sm" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Badge Kategori */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-neutral-950/90 text-white backdrop-blur-md">
            {item.category}
          </span>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-neutral-950 group-hover:text-black">{item.title}</h3>
        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>
        <button 
          onClick={() => onExpand(item.images[currentIndex], item)}
          className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-black hover:gap-2 transition-all cursor-pointer"
        >
          <span>LIHAT DETAIL</span>
          <Search size={13} />
        </button>
      </div>
    </div>
  );
}
