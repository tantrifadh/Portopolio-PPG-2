import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-neutral-950 group">
          <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
            <GraduationCap size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black leading-tight">E-PORTFOLIO</span>
            <span className="text-[10px] text-neutral-500 font-semibold tracking-widest uppercase">PPG Calon Guru</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.href} 
                to={link.href} 
                className={`text-sm font-medium transition-colors relative py-1.5 ${
                  isActive 
                    ? "text-neutral-950 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-950" 
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg border border-neutral-200 text-neutral-800 hover:bg-neutral-100 cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 absolute w-full left-0 p-6 flex flex-col gap-3 shadow-xl">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.href} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-neutral-900 text-white font-bold" 
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
