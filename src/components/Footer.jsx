import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  MapPin, 
  ArrowUp, 
  ChevronRight, 
  School 
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Identitas & Deskripsi */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                <GraduationCap size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight">E-Portfolio PPL</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Dokumentasi digital perjalanan Praktik Pengalaman Lapangan (PPL) Terbimbing PPG Calon Guru. Wadah refleksi dan pengembangan kompetensi guru profesional.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat (Penting untuk Penilai) */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
              Navigasi Utama
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Profil Mahasiswa", href: "/profil" },
                { name: "Artefak Pembelajaran", href: "/artefak" },
                { name: "Instrumen Penilaian", href: "/penilaian" },
                { name: "Dokumentasi Praktik", href: "/dokumentasi" },
                { name: "Visi & Misi Pendidik", href: "/misi" },
                { name: "E-Portfolio & Filosofi", href: "/e-portofolio-2" }
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="flex items-center gap-2 hover:text-white transition-colors group">
                    <ChevronRight size={14} className="text-neutral-600 group-hover:text-white" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Lokasi PPL */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
              Kontak & Lokasi PPL
            </h4>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <School size={18} className="text-neutral-300 shrink-0 mt-0.5" />
                <p>
                  <span className="text-white block font-medium">Sekolah PPL:</span>
                  SMK Negeri 2 Salatiga <br />
                  Jl. Parikesit, Dukuh, Kec. Sidomukti, Kota Salatiga, Jawa Tengah
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-neutral-300 shrink-0 mt-0.5" />
                <p>
                  <span className="text-white block font-medium">LPTK Penyelenggara:</span>
                  Universitas Kristen Satya Wacana
                </p>
              </div>
            </div>
          </div>

          {/* Kolom 4: Sertifikasi & Akreditasi */}
          <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800">
            <div className="space-y-4">
              <p className="text-xs uppercase font-bold tracking-widest text-neutral-500">Motto Pendidik</p>
              <p className="text-xs leading-relaxed text-neutral-300 italic">
                "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan Anda bisa mengubah dunia."
              </p>
              <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">— Nelson Mandela</p>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright & Back to Top */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} <span className="text-neutral-300 font-medium">Tantri Fadhillah Asri, S.Kom</span>. Bidang Studi Informatika — PPG Calon Guru.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-neutral-950 px-5 py-2 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Ke Atas <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
