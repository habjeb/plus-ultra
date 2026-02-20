import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function MentionsLegales() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <section id="mentions-legales" className="py-16 px-4 bg-slate-950/95 border-t border-slate-800" aria-labelledby="mentions-legales-title">
      <div className="container mx-auto max-w-3xl">
        <h2 id="mentions-legales-title" className="text-2xl font-bold text-white mb-8">
          Mentions légales
        </h2>

        {/* Éditeur du site */}
        <div className="scroll-mt-24 mb-12">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Éditeur du site</h3>
          <ul className="text-slate-300 text-sm leading-relaxed space-y-1">
            <li><strong className="text-white">Plus Ultra MMA</strong></li>
            <li>Responsable de la publication : <strong className="text-white">MONG Rattana</strong></li>
            <li>Adresse : 30 chemin de la Gravière, 38200 Vienne</li>
            <li>Email : <a href="mailto:contact@plusultramma.fr" className="text-purple-400 hover:text-purple-300 transition-colors">contact@plusultramma.fr</a></li>
            <li>Téléphone : <a href="tel:+33627961384" className="text-purple-400 hover:text-purple-300 transition-colors">06 27 96 13 84</a></li>
          </ul>
        </div>

        {/* Propriété intellectuelle */}
        <div className="scroll-mt-24 mb-12">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Propriété intellectuelle</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            L'ensemble du contenu présent sur le site (textes, images, vidéos, logos, etc.) est la propriété exclusive de Plus Ultra MMA, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de ces éléments est interdite, sauf autorisation écrite préalable.
          </p>
        </div>

        {/* Données personnelles */}
        <div id="confidentialite" className="scroll-mt-24 mb-12">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Données personnelles</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-2">
            Les données personnelles collectées via le site sont traitées dans le respect du Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Pour toute demande relative à vos données personnelles, vous pouvez nous contacter à : <a href="mailto:contact@plusultramma.fr" className="text-purple-400 hover:text-purple-300 transition-colors">contact@plusultramma.fr</a>
          </p>
        </div>

        {/* Cookies */}
        <div id="cookies" className="scroll-mt-24 mb-12">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Cookies</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Le site peut utiliser des cookies à des fins de mesure d'audience ou de bon fonctionnement. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
          </p>
        </div>

        {/* Responsabilité */}
        <div id="cgu" className="scroll-mt-24 mb-12">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Responsabilité</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Plus Ultra MMA s'efforce de fournir des informations fiables et actualisées, mais ne saurait garantir l'exactitude, la complétude ou la mise à jour des informations diffusées. La responsabilité de l'éditeur ne saurait être engagée en cas d'erreur ou d'omission.
          </p>
        </div>

        <p className="text-slate-500 text-xs mt-8">
          Dernière mise à jour : février 2026. Plus Ultra MMA — 30 chemin de la Gravière, 38200 Vienne.
        </p>
      </div>
    </section>
  );
}
