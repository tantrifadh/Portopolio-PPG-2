import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ArtifactCard from "../components/ArtifactCard";
import AnalysisModal from "../components/AnalysisModal";
import { ARTEFAK_LIST } from "../data/content";

export default function Artefak() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <Breadcrumbs />
      
      {/* Header Halaman */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight mb-4">
          Artefak Pembelajaran
        </h1>
        <p className="text-neutral-600 text-lg max-w-2xl leading-relaxed">
          Daftar dokumen perangkat pembelajaran, media interaktif, dan hasil karya siswa yang telah disusun selama masa PPL Terbimbing.
        </p>
        <div className="h-1 w-16 bg-neutral-950 rounded-full mt-6"></div>
      </div>

      {/* Grid Artefak */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTEFAK_LIST?.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedArtifact(item)}
            className="cursor-pointer group"
          >
            <ArtifactCard item={item} />
          </div>
        ))}
      </div>

      {/* Modal Detail Analisis */}
      <AnalysisModal 
        isOpen={Boolean(selectedArtifact)} 
        onClose={() => setSelectedArtifact(null)} 
        data={selectedArtifact} 
      />
    </div>
  );
}
