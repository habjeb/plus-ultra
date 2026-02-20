import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Calendar } from "lucide-react";
import { imgPath } from "../lib/imgPath";
import { Link } from "react-router-dom";

const TRAINER_IMGS = [
  "Mathias_Poiron.jpeg",
  "Tom_Podvin.jpeg",
  "Tony_Bonnardel.jpeg",
  "Yannis_ghemmouri.jpeg",
  "Khalys_Cochet.jpeg",
];

export function Trainers() {
  const trainers = [
    {
      name: "Mathias Poiron",
      title: "Coach MMA — Actif circuit pro",
      image: imgPath(TRAINER_IMGS[0]),
      specialties: ["MMA", "Cage Warriors", "Striking"],
      experience: "Circuit pro",
      achievements: "Cage Warriors, circuit professionnel européen",
      description: "Toujours actif en compétition professionnelle, Mathias transmet son expérience du haut niveau et sa vision du combat en cage à l'élite du club.",
      students: "Pro"
    },
    {
      name: "Tom Podvin",
      title: "Coach Muay Thai — Actif circuit pro",
      image: imgPath(TRAINER_IMGS[1]),
      specialties: ["Muay Thai", "Thai Fight", "Kickboxing"],
      experience: "Circuit pro",
      achievements: "Thai Fight, King of Muay Thai, victoires sur le ring",
      description: "Compétiteur actif sur les plus grosses organisations de Muay Thai. Tom apporte l'authenticité du combat professionnel à chaque entraînement.",
      students: "Pro"
    },
    {
      name: "Tony Bonnardel",
      title: "Coach combat — Actif circuit pro",
      image: imgPath(TRAINER_IMGS[2]),
      specialties: ["Combat full contact", "Prépa pro", "Conditioning"],
      experience: "Circuit pro",
      achievements: "Circuit professionnel, préparation mentale et physique",
      description: "Toujours dans l'arène professionnelle, Tony insuffle intensité et discipline à l'équipe et forme les prochaines générations de combattants.",
      students: "Pro"
    },
    {
      name: "Yannis Ghemmouri",
      title: "Coach MMA — Actif circuit pro",
      image: imgPath(TRAINER_IMGS[3]),
      specialties: ["MMA", "Cage", "Grappling"],
      experience: "Circuit pro",
      achievements: "Compétitions professionnelles MMA, expérience cage",
      description: "Actif sur le circuit pro, Yannis allie technique de cage et pédagogie pour faire monter le niveau de tous les pratiquants du club.",
      students: "Pro"
    },
    {
      name: "Khalys Cochet",
      title: "Coach combat — Actif circuit pro",
      image: imgPath(TRAINER_IMGS[4]),
      specialties: ["Combat", "Prépa physique", "Élite"],
      experience: "Circuit pro",
      achievements: "Circuit professionnel, préparation athlètes de haut niveau",
      description: "Toujours engagé dans le circuit professionnel, Khalys apporte rigueur et niveau d'excellence à l'encadrement Plus Ultra.",
      students: "Pro"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ELITE
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> TRAINERS</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nos coachs sont toujours actifs sur le circuit professionnel — Cage Warriors, Thai Fight et organisations européennes. Ils transmettent au club le niveau et l’état d’esprit du haut niveau.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer) => (
            <Card key={trainer.name} className="bg-black/70 border-gray-800 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden backdrop-blur-sm">
              <div className="relative p-6">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Trainer Image and Basic Info */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-colors duration-300 shadow-lg shadow-purple-500/25 aspect-square">
                        <ImageWithFallback
                          src={trainer.image}
                          alt={trainer.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {trainer.name}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-3">{trainer.title}</p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {trainer.specialties.map((specialty) => (
                          <Badge key={specialty} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="w-4 h-4 text-purple-400 mr-1" />
                        <span className="text-white font-bold text-sm">{trainer.experience}</span>
                      </div>
                      <div className="text-xs text-gray-400 uppercase">Expérience</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-purple-400 mr-1" />
                        <span className="text-white font-bold text-sm">{trainer.students}</span>
                      </div>
                      <div className="text-xs text-gray-400 uppercase">Élèves</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award className="w-4 h-4 text-purple-400 mr-1" />
                        <span className="text-white font-bold text-sm">Élite</span>
                      </div>
                      <div className="text-xs text-gray-400 uppercase">Niveau</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="text-purple-400 font-semibold text-sm mb-1">Palmarès</div>
                    <div className="text-gray-300 text-sm">{trainer.achievements}</div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {trainer.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-black text-white mb-4">Entraînez-vous avec les meilleurs</h3>
            <p className="text-gray-300 mb-6">
              Nos coachs ont combattu au plus haut niveau et sont dévoués à vous aider à atteindre votre plein potentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?program=Personal+Training"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 text-center"
              >
                Réserver un Coaching Privé
              </Link>
              <Link
                to="/trainers"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 text-center"
              >
                Découvrir l'Équipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}