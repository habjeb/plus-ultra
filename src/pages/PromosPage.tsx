import { Link } from "react-router-dom";
import { Tag, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Plasma } from "../components/Plasma";

const OFFERS = [
  {
    title: "OFFRE SPÉCIALE 1 discipline mi-saison MUAY THAI",
    description: "1 discipline",
    price: "225€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 1 discipline mi-saison MMA",
    description: "1 discipline",
    price: "225€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 1 discipline mi-saison BOXE ANGLAISE",
    description: "1 discipline",
    price: "225€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 1 discipline mi-saison JJB",
    description: "1 discipline",
    price: "225€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 2 disciplines mi-saison MMA + MUAY THAI",
    description: "2 disciplines MMA + MUAY THAI",
    price: "275€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 2 disciplines mi-saison MMA + JJB",
    description: "2 disciplines MMA + JJB",
    price: "275€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 2 disciplines mi-saison MMA + BOXE",
    description: "2 disciplines MMA + BOXE",
    price: "275€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE 2 disciplines mi-saison MUAY-THAI + BOXE ANGLAISE",
    description: "2 disciplines MUAY-THAI + BOXE ANGLAISE",
    price: "275€",
    period: "par 6 mois sans engagement",
  },
  {
    title: "OFFRE SPÉCIALE ALL Accès mi-saison",
    description: "All Accès",
    price: "360€",
    period: "par 6 mois sans engagement",
  },
];

export function PromosPage() {
  return (
    <>
      {/* Background Plasma — uniquement sur la page Promos */}
      <div className="fixed inset-0 z-0 w-full min-h-screen pointer-events-none">
        <Plasma
          color="#a855f7"
          speed={0.8}
          scale={1.2}
          opacity={0.35}
          mouseInteractive={true}
        />
      </div>
      <section className="relative z-10 py-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            OFFRES <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">LIMITÉES</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Offres spéciales mi-saison : entraînez-vous à tarif réduit, sans engagement.
          </p>
        </div>

        <div className="space-y-0 rounded-xl overflow-hidden border border-gray-700/50 bg-slate-900/80 shadow-xl">
          {OFFERS.map((offer, index) => (
            <div
              key={offer.title}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 ${
                index < OFFERS.length - 1 ? "border-b border-gray-700/50" : ""
              } bg-white/5 hover:bg-white/10 transition-colors`}
            >
              <div className="flex-1">
                <h2 className="text-white font-bold text-lg mb-1">{offer.title}</h2>
                <p className="text-gray-400 text-sm">{offer.description}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-700/50 text-gray-200 text-sm">
                  <Tag className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>
                    <strong className="text-white">{offer.price}</strong> {offer.period}
                  </span>
                </div>
                <Button
                  asChild
                  size="icon"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shrink-0"
                  aria-label="Voir l'offre"
                >
                  <Link to="/contact">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Ces offres sont valables dans la limite des places disponibles. Contactez-nous pour réserver.
        </p>
        </div>
      </section>
    </>
  );
}
