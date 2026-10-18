import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Users, FileCheck, ArrowRight, Sparkles, FolderGit2, ShieldCheck, Camera, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-24">
      {/* HERO SECTION - ELEGANT MONOCHROME (NO PHOTO) */}
      <section className="container mx-auto px-6 pt-12 md:pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Subtle Monochromatic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 bg-white text-neutral-800 text-xs font-semibold tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse"></span>
            PPG Calon Guru Gelombang 1 • 2026
          </div>

          {/* Editorial Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 leading-[1.1]">
              E-Portfolio <br />
              <span className="text-neutral-500 font-light italic">PPL Terbimbing</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Dokumentasi komprehensif perangkat pembelajaran, refleksi pedagogik, dan instrumen asesmen bidang studi Informatika.
            </p>
          </div>

          {/* Candidacy Meta Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 px-6 rounded-2xl bg-neutral-100/80 border border-neutral-200/80 text-sm text-neutral-700">
            <span className="font-semibold text-neutral-950">Tantri Fadhillah Asri, S.Kom</span>
            <span className="text-neutral-400 hidden sm:inline">•</span>
            <span>Bidang Studi: <strong className="text-neutral-900 font-medium">Informatika</strong></span>
            <span className="text-neutral-400 hidden sm:inline">•</span>
            <span>Sekolah PPL: <strong className="text-neutral-900 font-medium">SMK Negeri 2 Salatiga</strong></span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link 
              to="/artefak" 
              className="inline-flex items-center gap-2 bg-neutral-950 text-white px-8 py-3.5 rounded-xl hover:bg-neutral-800 transition font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              <span>Eksplorasi Artefak</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/profil" 
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white text-neutral-800 px-8 py-3.5 rounded-xl hover:bg-neutral-100 hover:text-neutral-950 transition font-medium shadow-xs"
            >
              <span>Profil Pendidik</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* STATS SUMMARY - MONOCHROME EDITORIAL */}
      <section className="border-y border-neutral-200 bg-white py-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Modul Ajar Terstruktur", count: "12", icon: BookOpen, desc: "PjBL & Diferensiasi" },
              { label: "Siklus Praktik Mengajar", count: "3 Siklus", icon: Users, desc: "Kelas X TKJ" },
              { label: "Media & LKPD Interaktif", count: "8+", icon: Award, desc: "TPACK & IoT Kit" },
              { label: "Jurnal Refleksi Mandiri", count: "15+", icon: FileCheck, desc: "Analisis Berkelanjutan" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 mx-auto md:mx-0">
                  <stat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-neutral-950 tracking-tight">{stat.count}</h3>
                <p className="text-sm font-semibold text-neutral-800 mt-1">{stat.label}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK EXPLORATION CARDS */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">Struktur Portofolio</h2>
          <p className="text-neutral-500 text-sm mt-2">Pilih menu navigasi untuk meninjau komponen portofolio secara terperinci.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Artefak Pembelajaran",
              desc: "Modul ajar berbasis PjBL IoT, media ajar, serta LKPD bertahap lengkap dengan analisis mendalam.",
              href: "/artefak",
              icon: FolderGit2,
              tag: "Perangkat",
            },
            {
              title: "Instrumen Penilaian",
              desc: "Hasil asesmen berkala dari Guru Pamong dan Dosen Pembimbing Lapangan (Lampiran 7 & 8).",
              href: "/penilaian",
              icon: ShieldCheck,
              tag: "Evaluasi",
            },
            {
              title: "Dokumentasi Praktik",
              desc: "Galeri visual kegiatan pendampingan proyek IoT siswa, presentasi hasil, dan bimbingan reflektif.",
              href: "/dokumentasi",
              icon: Camera,
              tag: "Galeri",
            },
            {
              title: "Model Guru & Misi",
              desc: "Visi guru profesional abad ke-21, roadmap 4 kompetensi strategis, dan karakter dasar pendidik.",
              href: "/misi",
              icon: Sparkles,
              tag: "Visi Misi",
            },
            {
              title: "E-Portfolio & Filosofi",
              desc: "Sintesis refleksi akhir PPL dan pendalaman ideologi pengajaran berakar pada Ki Hajar Dewantara.",
              href: "/e-portofolio-2",
              icon: GraduationCap,
              tag: "Refleksi",
            },
            {
              title: "Biografi Pendidik",
              desc: "Latar belakang akademik, motivasi mengajar, dan rekam jejak pendidikan tinggi di bidang Informatika.",
              href: "/profil",
              icon: Users,
              tag: "Identitas",
            },
          ].map((item, idx) => (
            <Link 
              key={idx}
              to={item.href}
              className="group bg-white p-7 rounded-2xl border border-neutral-200 hover:border-neutral-900 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors flex items-center justify-center text-neutral-800">
                    <item.icon size={22} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:translate-x-1 transition-transform">
                <span>Buka Bagian</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MOTIVATION QUOTE - ELEGANT EDITORIAL CARD */}
      <section className="container mx-auto px-6">
        <div className="bg-neutral-950 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden border border-neutral-900">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-neutral-400">
              Landasan Filosofi Mengajar
            </span>
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-neutral-100">
              “Menjadi pendidik bukan sekadar mentransfer ilmu, tetapi menuntun kodrat anak agar mencapai keselamatan dan kebahagiaan setinggi-tingginya.”
            </blockquote>
            <p className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              — Ki Hajar Dewantara
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
