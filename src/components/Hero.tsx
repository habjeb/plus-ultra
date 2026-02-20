import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Déclencher les animations après le montage du composant
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden z-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
              transitionDelay: '0.2s'
            }}
          >
            <h1 className="mb-6 tracking-tight relative">
              <div
                className="drop-shadow-2xl inline-block"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.3))",
                }}
              >
                <img
                  src="/img/PUM.png"
                  alt="Plus Ultra - One 4 All"
                  className="h-auto mx-auto block"
                  style={{ maxWidth: "280px" }}
                />
              </div>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full transform scale-150 -z-10" aria-hidden />
          </div>

          <p 
            className="text-xl md:text-2xl text-gray-300 mb-4 uppercase tracking-widest font-medium transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.4s'
            }}
          >
            Mixed Martial Arts Club
          </p>

          <p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.6s'
            }}
          >
            Rejoignez l'élite du combat. Dépassez vos limites. Devenez invincible.
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text font-bold">
              Rejoignez Plus Ultra - L'Élite du MMA.
            </span>
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.8s'
            }}
          >
            <Button asChild className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 text-white px-10 py-5 rounded-xl text-xl font-black uppercase tracking-wide transition-all duration-300 shadow-2xl shadow-purple-500/40 backdrop-blur-sm border border-white/30">
              <Link to="/contact">Rejoindre l'Élite</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-purple-300 text-purple-200 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:text-white px-10 py-5 rounded-xl text-xl font-black uppercase tracking-wide transition-all duration-300 backdrop-blur-sm bg-white/10 shadow-xl shadow-purple-500/20">
              <Link to="/gallery">Voir la galerie</Link>
            </Button>
          </div>

          <div 
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16 pt-8 border-t border-purple-500/30 transition-all duration-700 ease-out"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '1s'
            }}
          >
            {[
              { value: "500+", label: "Membres" },
              { value: "15+", label: "Coachs" },
              { value: "8", label: "Disciplines" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-1 relative">
                  {stat.value}
                  <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full scale-150 -z-10" aria-hidden />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 transition-all duration-700 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transitionDelay: '1.2s'
        }}
        aria-hidden
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}