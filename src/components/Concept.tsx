import { Baby, Users, Sparkles, Heart, Dumbbell, Activity } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imgPath } from "../lib/imgPath";

const CONCEPT_IMGS = [
  "WhatsApp Image 2026-02-09 at 11.42.47 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (4).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47 (5).jpeg",
  "WhatsApp Image 2026-02-09 at 11.42.47.jpeg",
  "WhatsApp Image 2026-02-09 at 11.46.23.jpeg",
];

export function Concept() {
  const publics = [
    {
      icon: Baby,
      image: imgPath(CONCEPT_IMGS[0]),
      title: "Baby Fighters (3–5 ans)",
      subtitle: "Découvrir le mouvement dès le plus jeune âge",
      description: "Des séances ludiques et pédagogiques pour éveiller les plus petits au mouvement, à la coordination et au respect des autres. Un premier contact avec le sport, pensé pour développer motricité, confiance et plaisir.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sparkles,
      image: imgPath(CONCEPT_IMGS[1]),
      title: "Kids & Juniors (6–12 ans)",
      subtitle: "Construire les bases physiques et mentales",
      description: "Des cours adaptés à leur âge, combinant coordination, discipline et confiance en soi. Le tout dans un environnement fun, sécurisé et encadré par des coachs attentifs.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      image: imgPath(CONCEPT_IMGS[2]),
      title: "Ados & Étudiants",
      subtitle: "Canaliser l'énergie, développer le potentiel",
      description: "Des entraînements dynamiques et motivants pour accompagner une énergie débordante. Un cadre idéal pour se dépenser, gagner en assurance et progresser techniquement.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      image: imgPath(CONCEPT_IMGS[3]),
      title: "Femmes",
      subtitle: "Pratiquer sereinement, à son rythme",
      description: "Des créneaux dédiés pour permettre aux femmes de s'entraîner dans un environnement confortable, bienveillant et motivant. L'objectif : progresser en confiance, sans pression, dans une ambiance positive.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Dumbbell,
      image: imgPath(CONCEPT_IMGS[4]),
      title: "Adultes",
      subtitle: "Performance, bien-être ou dépassement de soi",
      description: "Que ce soit pour apprendre, se défouler, se remettre en forme ou viser la compétition, nos cours s'adaptent à chaque objectif. Un accompagnement personnalisé pour une progression durable.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      image: imgPath(CONCEPT_IMGS[5]),
      title: "Seniors",
      subtitle: "Rester actif, en toute sécurité",
      description: "Une activité physique adaptée pour entretenir mobilité, équilibre et forme générale. Des coachs à l'écoute et une ambiance bienveillante pour pratiquer en toute confiance.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="concept" className="py-24 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            PLUS ULTRA —{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text font-bold">LES ARTS MARTIAUX POUR TOUS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text mb-6">
            One for All
          </h3>
          <p className="text-xl text-gray-300 font-semibold mb-4">
            Une vision inclusive et exigeante des arts martiaux
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-gray-200 text-lg leading-relaxed text-center">
            Chez Plus Ultra, nous défendons une approche moderne et inclusive des arts martiaux.
            Ici, chacun trouve sa place, quel que soit son âge, son niveau ou son objectif.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed text-center">
            De la petite enfance aux seniors, des débutants aux compétiteurs, des femmes aux curieux en quête de dépassement, nos cours sont conçus pour accompagner chaque pratiquant à son rythme, dans un cadre structuré, sécurisé et bienveillant.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed text-center font-medium">
            Nos programmes s'adaptent aux objectifs, au niveau, à l'âge et aux préférences de chacun.
            Que vous veniez pour vous défouler, apprendre à vous défendre, améliorer votre condition physique ou repousser vos limites, vous êtes au bon endroit.
          </p>
        </div>

        {/* Nos Publics Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-black text-white">
            NOS <span className="text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text font-bold">PUBLICS</span>
          </h3>
        </div>

        {/* Publics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {publics.map((item, index) => (
            <div key={item.title} className="transform-gpu">
              <Card className="bg-black/60 border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-500 backdrop-blur-md relative overflow-hidden group h-full">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>

                <div className="relative z-10">
                  {/* Image */}
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <ImageWithFallback 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-30 mix-blend-overlay`}></div>
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-black text-xl mb-2">
                    {item.title}
                  </h4>

                  {/* Subtitle */}
                  <p className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-bold text-sm mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl`}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-200 text-xl font-medium max-w-3xl mx-auto">
            Peu importe votre parcours, votre âge ou votre condition physique —{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-bold">
              Plus Ultra vous accueille comme vous êtes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}