import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/about" },
    { label: "Tarifs", path: "/programs" },
    { label: "Planning", path: "/planning" },
    { label: "Coachs", path: "/trainers" },
    { label: "Galerie", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    location.pathname === path || (path === "/" && location.pathname === "/");

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-xl border-b border-purple-400/30 z-50 shadow-2xl shadow-purple-500/20 transition-all duration-700 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/img/PUM.png"
                alt="Plus Ultra MMA"
                className="w-16 h-16 object-contain shrink-0"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-medium text-sm uppercase tracking-wide relative group ${
                    isActive(item.path)
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  } transition-colors duration-300`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-colors backdrop-blur-sm border border-white/20 shadow-lg shadow-purple-500/30"
              >
                <Link to="/contact">Rejoindre l'élite</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <Link to="/promos">Promos</Link>
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {typeof document !== "undefined" &&
        isMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 md:hidden"
            style={{ zIndex: 99999 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Fond : clic ferme le menu */}
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fermer le menu"
            />
            {/* Panneau menu au-dessus du header et du contenu */}
            <div className="relative mt-2 mx-2 py-6 bg-gradient-to-r from-slate-900/98 via-purple-900/98 to-slate-900/98 border border-purple-400/40 rounded-2xl shadow-xl shadow-purple-500/30">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-gray-200 hover:text-purple-300 transition-colors font-semibold text-base uppercase tracking-wide px-6 py-3 hover:bg-purple-500/10 rounded-lg mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 pt-4 flex flex-col gap-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wide shadow-lg shadow-purple-500/30"
                  >
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Rejoindre l'élite
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wide"
                  >
                    <Link to="/promos" onClick={() => setIsMenuOpen(false)}>
                      Promos
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
