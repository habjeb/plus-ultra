import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Programs() {
  const programs = [
    {
      title: "FULL ACCESS",
      level: "Adultes à partir de 18 ans",
      duration: "—",
      capacity: "—",
      description: "L'abonnement parfait pour les passionné-es qui veulent s'entraîner librement et autant qu'ils le souhaitent. Full Access, c'est la liberté totale d'accéder à tous les cours, toutes disciplines confondues, sans limite.",
      price: "59.99 € /mois",
      features: ["Accès illimité à tous les cours", "Sans engagement annuel", "Idéal pour les pratiquants réguliers et compétiteurs", "Flexibilité totale pour s'organiser selon son emploi du temps"],
      color: "purple"
    },
    {
      title: "ADO FIGHTERS",
      level: "Adolescents (12 à 16 ans)",
      duration: "—",
      capacity: "—",
      description: "Pensé pour les jeunes en quête de performance, de discipline et de dépassement de soi, cet abonnement donne accès à un large choix de cours chaque semaine dans un cadre structurant et motivant.",
      price: "400 € /an",
      features: ["Jusqu'à 7 cours/semaine", "Accès multi-disciplines", "Encadrement pédagogique et bienveillant", "1 mois offert pour les nouveaux bacheliers"],
      color: "pink"
    },
    {
      title: "KIDS FIGHTERS",
      level: "Enfants (6 à 11 ans)",
      duration: "—",
      capacity: "—",
      description: "L'abonnement idéal pour initier les plus jeunes à la pratique des sports de combat de manière ludique, encadrée et progressive. Une façon fun et éducative de développer coordination, respect et confiance en soi.",
      price: "350 € /an",
      features: ["Jusqu'à 4 cours/semaine", "Méthodes adaptées aux enfants", "Travail sur les valeurs : respect, discipline, esprit d'équipe", "Développement moteur et confiance", "Ambiance bienveillante, fun et stimulante"],
      color: "blue"
    },
    {
      title: "BABY FIGHTERS",
      level: "Très jeunes enfants (3 à 5 ans)",
      duration: "—",
      capacity: "—",
      description: "Une première approche douce et encadrée du mouvement et du sport de combat, pour éveiller les plus petits aux bases du corps, du rythme et du respect, dans un cadre ludique et sécurisé.",
      price: "300 € /an",
      features: ["2 cours/semaine", "Activités ludiques et motrices inspirées des arts martiaux", "Développement de la coordination et de l'attention", "Encadrement par des coachs spécialisés petite enfance", "Apprentissage du respect des consignes et des autres"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      blue: "from-blue-500 to-blue-600",
      red: "from-red-500 to-red-600",
      orange: "from-orange-500 to-orange-600",
      green: "from-green-500 to-green-600"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-transparent via-purple-800/20 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            LES TARIFS
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> PLUS ULTRA</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choisissez la formule qui vous correspond. Chaque programme est conçu pour vous accompagner vers vos objectifs.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[1000px]">
          {programs.map((program) => (
            <div key={program.title} className="transform-gpu h-full">
              <Card className="h-full flex flex-col bg-black/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden backdrop-blur-sm relative">
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="p-6 relative z-10 flex flex-col flex-1 min-h-0">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`bg-gradient-to-r ${getColorClasses(program.color)} text-white border-0 shadow-lg`}>
                        {program.level}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-black text-white relative">
                          {program.price}
                          <div className="absolute inset-0 bg-purple-400/20 blur-lg rounded -z-10" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>
                  </div>

                  {/* Info with icons */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-purple-400" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-purple-400" />
                      {program.capacity}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-1 min-h-0">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      INCLUS DANS L'ABONNEMENT
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li 
                          key={feature} 
                          className="text-gray-400 text-sm flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button asChild className={`w-full mt-auto bg-gradient-to-r ${getColorClasses(program.color)} text-white font-bold relative overflow-hidden group/btn flex items-center justify-center gap-2`}>
                    <Link to={`/contact?program=${encodeURIComponent(program.title)}`}>
                      <span className="relative z-10">JE M'INSCRIS</span>
                      <ArrowRight className="w-4 h-4 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-4">Frais de dossier</h3>
            <p className="text-gray-300 mb-6">
              Un seul frais de dossier par famille : <strong className="text-white">50 € maximum</strong>, même en cas d'inscriptions multiples.
            </p>
            <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 font-bold uppercase tracking-wide">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}