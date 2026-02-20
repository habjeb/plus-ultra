import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const STORAGE_KEY = "promo-popup-seen";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChange = (next: boolean) => {
    if (!next) sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="border-purple-500/30 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 text-white shadow-2xl shadow-purple-500/20 sm:max-w-md"
      >
        <DialogHeader>
          <div className="flex items-center gap-2 text-purple-300 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Offres limitées</span>
          </div>
          <DialogTitle className="text-2xl font-black text-white text-left">
            Promos mi-saison en cours
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-left pt-2">
            Profitez d&apos;offres spéciales sur nos disciplines : Muay Thai, MMA, Boxe, JJB… 
            À partir de 225€ pour 6 mois sans engagement.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-400 hover:via-pink-400 hover:to-purple-400 text-white font-bold py-3 flex items-center justify-center gap-2"
          >
            <Link to="/promos">
              Voir les promos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => handleOpenChange(false)}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Plus tard
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
