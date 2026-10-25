import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Artefak from "./pages/Artefak";
import Seminar from "./pages/Seminar";
import Dokumentasi from "./pages/Dokumentasi";
import Misi from "./pages/Misi";

// Helper component to scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/artefak" element={<Artefak />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/misi" element={<Misi />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
