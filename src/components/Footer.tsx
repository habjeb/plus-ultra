import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type LegalSection = "all" | "confidentialite" | "cgu" | "cookies";

function MentionsLegalesModal({ open, onClose, section }: { open: boolean; onClose: () => void; section: LegalSection }) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, handleEscape]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-200"
      style={{ zIndex: 99999 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mentions légales"
    >
      <div
        className="relative bg-slate-950 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-950 border-b border-slate-700 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-xl font-bold text-white">Mentions légales</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/50 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-8">
          {section === "all" && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Éditeur du site</h3>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-1">
                <li><strong className="text-white">Plus Ultra MMA</strong></li>
                <li>Responsable de la publication : <strong className="text-white">MONG Rattana</strong></li>
                <li>Adresse : 30 chemin de la Gravière, 38200 Vienne</li>
                <li>Email : <a href="mailto:contact@plusultramma.fr" className="text-purple-400 hover:text-purple-300 transition-colors">contact@plusultramma.fr</a></li>
                <li>Téléphone : <a href="tel:+33627961384" className="text-purple-400 hover:text-purple-300 transition-colors">06 27 96 13 84</a></li>
              </ul>
            </div>
          )}

          {section === "all" && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Propriété intellectuelle</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                L'ensemble du contenu présent sur le site (textes, images, vidéos, logos, etc.) est la propriété exclusive de Plus Ultra MMA, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de ces éléments est interdite, sauf autorisation écrite préalable.
              </p>
            </div>
          )}

          {(section === "all" || section === "confidentialite") && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Données personnelles</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                Les données personnelles collectées via le site sont traitées dans le respect du Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pour toute demande relative à vos données personnelles, vous pouvez nous contacter à : <a href="mailto:contact@plusultramma.fr" className="text-purple-400 hover:text-purple-300 transition-colors">contact@plusultramma.fr</a>
              </p>
            </div>
          )}

          {(section === "all" || section === "cookies") && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Cookies</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Le site peut utiliser des cookies à des fins de mesure d'audience ou de bon fonctionnement. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </div>
          )}

          {(section === "all" || section === "cgu") && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Responsabilité</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Plus Ultra MMA s'efforce de fournir des informations fiables et actualisées, mais ne saurait garantir l'exactitude, la complétude ou la mise à jour des informations diffusées. La responsabilité de l'éditeur ne saurait être engagée en cas d'erreur ou d'omission.
              </p>
            </div>
          )}

          <p className="text-slate-500 text-xs pt-4 border-t border-slate-700">
            Dernière mise à jour : février 2026. Plus Ultra MMA — 30 chemin de la Gravière, 38200 Vienne.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalSection, setLegalSection] = useState<LegalSection>("all");

  const openLegal = (section: LegalSection) => {
    setLegalSection(section);
    setLegalOpen(true);
  };

  const quickLinks = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/about" },
    { label: "Concept", path: "/concept" },
    { label: "Tarifs", path: "/programs" },
    { label: "Promos", path: "/promos" },
    { label: "Planning", path: "/planning" },
    { label: "Coachs", path: "/trainers" },
    { label: "Galerie", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

  const programs = [
    { id: "full-access", label: "FULL ACCESS — Adultes", path: "/programs" },
    { id: "ado-fighters", label: "ADO FIGHTERS — Ados", path: "/programs" },
    { id: "kids-fighters", label: "KIDS FIGHTERS — Enfants", path: "/programs" },
    { id: "baby-fighters", label: "BABY FIGHTERS — Tout-petits", path: "/programs" },
  ];

  const socialLinks = [
    { id: "instagram", icon: Instagram, href: "https://www.instagram.com/plus.ultra_vienne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram Plus Ultra MMA" },
  ];

  return (
    <>
      <footer className="relative z-20 bg-gradient-to-t from-slate-950 via-slate-900 to-purple-950/80 border-t border-purple-400/30 overflow-hidden backdrop-blur-sm">
        {/* Motivational Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">PU</span>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-black tracking-tight">PLUS ULTRA</h3>
                  <p className="text-purple-400 text-sm uppercase tracking-widest">MMA CLUB</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Dépassez vos limites. Entraînez-vous comme un champion. Combattez comme un guerrier. Chez Plus Ultra MMA Club, on forge des champions sur le ring et dans la vie.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-black text-lg mb-6 uppercase tracking-wide">Liens rapides</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white font-black text-lg mb-6 uppercase tracking-wide">Nos Formules</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.id}>
                    <Link
                      to={program.path}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-black text-lg mb-6 uppercase tracking-wide">Nous trouver</h4>
              <div className="space-y-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=30+chemin+de+la+Gravi%C3%A8re+38200+Vienne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group"
                >
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 group-hover:text-purple-400 transition-colors">30 chemin de la Gravière</p>
                    <p className="text-gray-400 text-sm group-hover:text-purple-400/70 transition-colors">38200 Vienne</p>
                  </div>
                </a>
                
                <a href="tel:+33627961384" className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 group-hover:text-purple-400 transition-colors">06 27 96 13 84</span>
                </a>
              </div>

              {/* Hours */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                <h5 className="text-white font-bold mb-2">Horaires d'entraînement</h5>
                <p className="text-gray-300 text-sm">Lun-Ven : 7h - 21h</p>
                <p className="text-gray-300 text-sm">Samedi : 8h - 16h</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                  <p className="text-gray-400 text-sm">
                    © 2026 Plus Ultra MMA. Tous droits réservés.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <button onClick={() => openLegal("confidentialite")} className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" title="Politique de confidentialité">Confidentialité</button>
                    <span className="text-gray-600">•</span>
                    <button onClick={() => openLegal("all")} className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" title="Mentions légales">Mentions légales</button>
                    <span className="text-gray-600">•</span>
                    <button onClick={() => openLegal("cgu")} className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" title="Responsabilité">CGU</button>
                    <span className="text-gray-600">•</span>
                    <button onClick={() => openLegal("cookies")} className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" title="Cookies">Cookies</button>
                  </div>
                </div>
              
              <div className="text-center md:text-right">
                <p className="text-purple-400 font-bold text-sm uppercase tracking-wide">
                  Go Plus Ultra
                </p>
                <p className="text-gray-400 text-xs">Dépassez vos limites</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Mentions Légales */}
      <MentionsLegalesModal open={legalOpen} onClose={() => setLegalOpen(false)} section={legalSection} />
    </>
  );
}
