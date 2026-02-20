import { Hero } from "../components/Hero";
import FloatingLines from "../components/ui/FloatingLines";
import { PromoPopup } from "../components/PromoPopup";

export function HomePage() {
  return (
    <>
      <PromoPopup />
      {/* Background FloatingLines — uniquement sur la page d'accueil */}
      <div className="fixed inset-0 z-0 w-full min-h-screen pointer-events-none bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950">
        <FloatingLines
          linesGradient={['#5227FF', '#FF9FFC', '#a855f7']}
          enabledWaves={['top', 'middle', 'bottom']}
          animationSpeed={1}
          interactive={false}
          parallax={true}
          parallaxStrength={0.2}
          mixBlendMode="screen"
        />
      </div>
      <div className="relative z-10 min-h-screen">
        <Hero />
      </div>
    </>
  );
}
