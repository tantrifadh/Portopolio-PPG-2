import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
      <Link to="/" className="hover:text-neutral-950 flex items-center gap-1.5 transition-colors">
        <Home size={15} /> Beranda
      </Link>
      {paths.map((p, i) => (
        <div key={i} className="flex items-center gap-2 capitalize">
          <ChevronRight size={14} className="text-neutral-400" />
          <span className={i === paths.length - 1 ? "text-neutral-950 font-bold" : "hover:text-neutral-800"}>
            {p.replace("-", " ")}
          </span>
        </div>
      ))}
    </nav>
  );
}
