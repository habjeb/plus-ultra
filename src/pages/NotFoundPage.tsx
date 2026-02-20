import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text mb-6">
          404
        </div>
        <h1 className="text-3xl font-black text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée.
          Pas de panique, retournez sur le ring !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 font-bold uppercase tracking-wide">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:text-white px-8 py-3 font-bold uppercase tracking-wide">
            <Link to="/contact">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
