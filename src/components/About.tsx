import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imgPath } from "../lib/imgPath";
import { Shield, Target, Trophy, Users } from "lucide-react";
import { Card } from "./ui/card";
import { useScrollAnimation, getAnimationClass } from "../hooks/useScrollAnimation";

const gradientText = "text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text font-bold";

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  
  const features = [
    { icon: Shield, title: "Elite Training", description: "Professional-grade facilities with state-of-the-art equipment and expert guidance." },
    { icon: Target, title: "Precision Focus", description: "Structured programs designed to improve technique, strength, and mental fortitude." },
    { icon: Trophy, title: "Championship Level", description: "Train alongside competitors and champions in a motivating environment." },
    { icon: Users, title: "Community", description: "Join a brotherhood of warriors committed to excellence and mutual respect." }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" aria-hidden />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className={`mb-8 ${getAnimationClass(isVisible, "animate-fade-in-up")}`}>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                REJOIGNEZ L'<span className={gradientText}> ÉLITE</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded" />
            </div>

            <p className={`text-gray-200 text-xl leading-relaxed mb-6 font-medium ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-100")}`}>
              Plus Ultra Martial Arts, c'est avant tout une aventure humaine et une passion commune pour les sports de combat.
            </p>

            <p className={`text-gray-200 text-lg leading-relaxed mb-4 ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-200")}`}>
              Née à Bron sous forme associative, la team a grandi au fil des années autour de cours de MMA, boxe thaï, boxe anglaise et lutte, ouverts à toutes et à tous. Des entraînements authentiques, dans un esprit familial, où chacun·e avait sa place, que ce soit pour se défouler, apprendre, progresser ou se dépasser.
            </p>

            <p className={`text-gray-200 text-lg leading-relaxed mb-4 ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-300")}`}>
              Aujourd'hui, cette belle énergie nous pousse à aller <span className={gradientText}>Plus Ultra</span> — plus loin. Et c'est à Vienne que l'aventure continue avec l'ouverture de notre propre salle : un espace moderne, convivial, et 100% dédié aux arts martiaux et sports de combat.
            </p>

            <p className={`text-gray-200 text-lg leading-relaxed mb-4 ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-400")}`}>
              Notre salle est ouverte à tous les niveaux, tous les âges et tous les genres. Que tu sois débutant·e curieux·se, pratiquant·e régulier·ère ou compétiteur·rice acharné·e, tu trouveras ici un lieu pour t'entraîner, progresser et partager dans le respect, la bienveillance et la détermination.
            </p>

            <p className={`text-gray-200 text-lg leading-relaxed mb-4 ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-500")}`}>
              Chez Plus Ultra, on croit à la force du collectif. On s'élève ensemble, on se pousse mutuellement, et on avance pas à pas, sans jugement, mais avec passion. C'est ça, l'âme Plus Ultra : un club où l'on vient autant pour le sport que pour l'humain.
            </p>

            <p className={`text-gray-200 text-xl leading-relaxed mb-8 font-bold ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-600")}`}>
              Rejoins la team. Dépasse-toi. Deviens Plus Ultra.
              <br />
              <span className={gradientText}>Votre légende commence ici.</span>
            </p>

            <div className={`mb-8 mt-12 ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-700")}`}>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                POURQUOI CHOISIR <span className={gradientText}>PLUS ULTRA</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Approche inclusive et structurée",
                  "Programmes adaptés à tous les âges et niveaux",
                  "Encadrement professionnel et attentif",
                  "Ambiance respectueuse et motivante",
                  "Vision moderne des arts martiaux"
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-gray-200 text-lg">
                    <span className="text-purple-400 text-2xl font-bold mt-[-4px]">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`grid sm:grid-cols-2 gap-4 ${getAnimationClass(isVisible, "animate-fade-in-up", "animation-delay-800")}`}>
              {features.map((feature) => (
                <Card key={feature.title} className="bg-black/50 border-purple-500/20 p-4 hover:border-purple-500/40 transition-colors backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className={`relative lg:mt-[140px] ${getAnimationClass(isVisible, "animate-fade-in-right", "animation-delay-300")}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={imgPath("WhatsApp Image 2026-02-09 at 11.46.48.jpeg")}
                alt="MMA Dojo Interior"
                className="w-full h-[700px] lg:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black text-purple-400">10+</div>
                      <div className="text-xs text-gray-400 uppercase">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-purple-400">24/7</div>
                      <div className="text-xs text-gray-400 uppercase">Access</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-purple-400">100%</div>
                      <div className="text-xs text-gray-400 uppercase">Dedication</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" aria-hidden />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
