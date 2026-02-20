import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ZoomIn, Play } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { imgPath } from "../lib/imgPath";
import { Link } from "react-router-dom";

function videoPath(filename: string): string {
  return `/video/${encodeURIComponent(filename)}`;
}

const STAGE_IMGS = [
  "WhatsApp Image 2026-02-09 at 11.42.43.jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.46 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.46 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.46.jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (4).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (5).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47.jpeg",
];

const VIDEO_FILES = [
  "WhatsApp Video 2026-02-09 at 11.41.15.mp4",
  "WhatsApp Video 2026-02-09 at 11.41.23.mp4",
  "WhatsApp Video 2026-02-10 at 08.49.22.mp4",
];

const CONTENDERS_IMGS = [
  "WhatsApp Image 2026-02-09 at 11.46.23.jpeg",
  "WhatsApp Image 2026-02-09 at 11.46.48.jpeg",
  "WhatsApp Image 2026-02-09 at 11.46.49 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.46.49.jpeg",
  "WhatsApp Image 2026-02-09 at 11.46.55.jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.04 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.04.jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.06.jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (4).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (5).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (6).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (7).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12 (8).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.12.jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (4).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (5).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (6).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (7).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13 (8).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.13.jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (4).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (5).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (6).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14 (7).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.14.jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (4).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (5).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (6).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (7).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (8).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (9).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (10).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15 (11).jpeg",
  "WhatsApp Image 2026-02-09 at 11.47.15.jpeg",
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("stage");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[number] | null>(null);

  const categories = [
    { id: "stage", label: "Stage" },
    { id: "contenders", label: "Contenders" },
    { id: "training", label: "Vidéo" }
  ];

  const galleryItems = [
    ...VIDEO_FILES.map((filename, i) => ({
      id: 5 + i,
      type: "video" as const,
      category: "training",
      src: videoPath(filename),
      alt: "Vidéo Plus Ultra MMA",
      title: `Vidéo #${i + 1}`,
    })),
    ...STAGE_IMGS.map((filename, i) => ({
      id: 10 + i,
      type: "image" as const,
      category: "stage",
      src: imgPath(filename),
      alt: "Stage GregMMA",
      title: "Stage GregMMA",
    })),
    ...CONTENDERS_IMGS.map((filename, i) => ({
      id: 100 + i,
      type: "image" as const,
      category: "contenders",
      src: imgPath(filename),
      alt: "Combat Strike Fight - Contenders",
      title: `Contenders #${i + 1}`,
    })),
  ];

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

  // Fermer la lightbox avec Escape
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKey);
    // Empêcher le scroll du body
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxItem, closeLightbox]);

  return (
    <section id="gallery" className="py-24 bg-transparent relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%2040l40-40h-40z%22/%3E%3Cpath%20d%3D%22m0%2040l40-40h-40z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            GALERIE &
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> MOMENTS</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Vivez l'intensité, la détermination et l'esprit de communauté qui définissent Plus Ultra MMA Club.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-black/50 text-gray-400 border border-gray-700 hover:border-purple-500/50 hover:text-purple-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with 3D Effects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1000px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-black/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform-gpu"
              onClick={() => setLightboxItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`Voir en plein écran : ${item.title}`}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightboxItem(item); } }}
            >
              {/* Media with 3D effects */}
              <div className="relative aspect-square overflow-hidden">
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center border-2 border-white/50">
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                
                {/* Enhanced overlay with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
                
                {/* Zoom/Play icon on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-purple-600/90 transition-colors duration-300 border border-purple-400/20">
                    {item.type === "video" ? <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" /> : <ZoomIn className="w-4 h-4 text-white" />}
                  </div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 glass-dark">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded" />
                </div>

                {/* Holographic border effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-400/50 transition-all duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-black text-white mb-4">Rejoignez la Communauté</h3>
            <p className="text-gray-300 mb-6">
              Faites partie de la famille Plus Ultra et créez vos propres moments de victoire.
            </p>
            <Link
              to="/programs"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              Commencer l'Aventure
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Lightbox ────────────────────────────────────────────────── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-purple-600/80 transition-colors duration-300"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Media container */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === "video" ? (
              <video
                src={lightboxItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl shadow-purple-500/20"
              />
            ) : (
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl shadow-purple-500/20"
              />
            )}

            {/* Title bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <h3 className="text-white font-bold text-xl">{lightboxItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
