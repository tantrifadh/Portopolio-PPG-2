import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  }, [location.pathname, location.search]);

  return (
    <nav className="fixed w-full z-[100] bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
      <div className="container mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
        {/* Brand: Exactly matching image_12712776.png */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-[14px] bg-neutral-950 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <GraduationCap size={22} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-black text-base sm:text-lg tracking-tight leading-none text-neutral-950 uppercase">
              E-PORTFOLIO
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-neutral-500 tracking-[0.18em] uppercase leading-tight mt-0.5">
              PPG CALON GURU
            </span>
          </div>
        </Link>

        {/* Desktop Nav: Elegant Monochrome */}
        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => {
            const isRefleksi = link.hasDropdown;
            const isRefleksiActive = location.pathname === "/seminar";
            const isActive = location.pathname === link.href;

            if (isRefleksi) {
              return (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all py-1.5 px-3.5 rounded-full cursor-pointer ${
                      isRefleksiActive
                        ? "text-neutral-950 bg-neutral-100 ring-1 ring-neutral-200"
                        : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-neutral-950" : "text-neutral-400"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu: Clean Monochrome */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-neutral-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {link.dropdownItems.map((item) => {
                          const isCurrentTab =
                            location.pathname === "/seminar" &&
                            location.search.includes(`tab=${item.key}`);
                          return (
                            <Link
                              key={item.key}
                              to={item.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`block p-3 rounded-xl transition-all ${
                                isCurrentTab
                                  ? "bg-neutral-950 text-white shadow-xs"
                                  : "hover:bg-neutral-100 text-neutral-800"
                              }`}
                            >
                              <div className={`font-bold text-xs sm:text-sm ${isCurrentTab ? "text-white" : "text-neutral-950"}`}>
                                {item.label}
                              </div>
                              <div className={`text-[11px] mt-0.5 leading-snug ${isCurrentTab ? "text-neutral-300" : "text-neutral-500"}`}>
                                {item.desc}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-all py-1.5 px-3 rounded-full ${
                  isActive
                    ? "text-neutral-950 bg-neutral-100 ring-1 ring-neutral-200"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl border border-neutral-200 text-neutral-800 hover:bg-neutral-100 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 p-5 flex flex-col gap-2 shadow-xl">
          {NAV_LINKS.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.href} className="border-y border-neutral-100 py-2.5 my-1">
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
                    {link.name}
                  </div>
                  <div className="space-y-1 mt-1 pl-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                      >
                        <div className="font-semibold text-xs text-neutral-900">{item.label}</div>
                        <div className="text-[11px] text-neutral-500">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-neutral-950 text-white font-bold"
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
