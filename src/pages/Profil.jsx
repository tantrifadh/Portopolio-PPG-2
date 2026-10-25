import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { User, MapPin, GraduationCap, Target } from "lucide-react";

export default function Profil() {
  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs />
      <div className="grid md:grid-cols-3 gap-12">
        {/* Foto & Identitas Dasar */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold border-b border-neutral-100 pb-2.5 text-neutral-950">Identitas Diri</h2>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3 text-neutral-700">
                <User size={18} className="text-neutral-950 shrink-0" />
                <span className="font-medium text-neutral-900">Tantri Fadhillah Asri, S.Kom</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <GraduationCap size={18} className="text-neutral-950 shrink-0" />
                <span>PPG Calon Guru — 2026</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <MapPin size={18} className="text-neutral-950 shrink-0" />
                <span>SMK Negeri 2 Salatiga</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narasi Profil */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Biografi & Motivasi</span>
              <h1 className="text-3xl font-extrabold text-neutral-950 tracking-tight mt-1">Profil Calon Guru</h1>
            </div>

            <div className="space-y-6 text-neutral-700 leading-relaxed text-base">
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <h3 className="flex items-center gap-2 font-bold text-neutral-900 text-lg mb-2">
                  <Target size={20} className="text-neutral-950" /> Inspirasi Menjadi Guru
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Ketertarikan saya menjadi guru berawal saat menjadi asisten laboratorium komputer di kampus. Saat itu, saya sering membantu mahasiswa yang masih kesulitan menggunakan komputer dan memahami materi praktikum. Dari pengalaman tersebut, saya merasa senang ketika bisa membantu orang lain belajar dan memahami sesuatu yang sebelumnya dianggap sulit.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <h3 className="flex items-center gap-2 font-bold text-neutral-900 text-lg mb-2">
                  <Target size={20} className="text-neutral-950" /> Tujuan Menjadi Guru Profesional
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Saya ingin menjadi guru yang dapat membimbing peserta didik dengan sabar dan membantu mereka mengembangkan kemampuan, khususnya di bidang teknologi dan informatika. Selain menyampaikan materi, saya juga ingin menjadi pendidik yang mampu memotivasi peserta didik agar lebih percaya diri dalam belajar dan meraih cita-citanya.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Pendidikan */}
          <section className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-xs">
            <h2 className="text-2xl font-bold text-neutral-950 mb-6">Riwayat Pendidikan</h2>
            <div className="border-l-2 border-neutral-300 ml-3 space-y-8 pl-6">
              {[
                { year: "2026", title: "PPG Informatika", school: "Universitas Kristen Satya Wacana", desc: "Program Profesi Guru Calon Guru Gelombang 1" },
                { year: "2020 - 2024", title: "S1 Teknik Informatika", school: "Universitas Dian Nuswantoro", desc: "Lulusan Sarjana Komputer (S.Kom)" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-neutral-950 rounded-full border-2 border-white ring-2 ring-neutral-200"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">{item.year}</span>
                  <h4 className="font-bold text-lg text-neutral-950 mt-0.5">{item.title}</h4>
                  <p className="text-sm font-medium text-neutral-700">{item.school}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
