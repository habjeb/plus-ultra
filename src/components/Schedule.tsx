import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, User, Target, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const scheduleData = {
  'Lundi': [
    {
      time: '07:00 - 08:30',
      class: 'MMA Débutant',
      trainer: 'Marcus "Steel" Rodriguez',
      level: 'Débutant',
      type: 'MMA',
      spots: 8
    },
    {
      time: '18:00 - 19:30',
      class: 'Boxe Anglaise',
      trainer: 'Sofia "Lightning" Chen',
      level: 'Intermédiaire',
      type: 'Boxe',
      spots: 12
    },
    {
      time: '19:45 - 21:15',
      class: 'Jiu-Jitsu Brésilien',
      trainer: 'Carlos "Serpent" Silva',
      level: 'Avancé',
      type: 'Jiu-Jitsu',
      spots: 6
    }
  ],
  'Mardi': [
    {
      time: '06:30 - 08:00',
      class: 'Kickboxing Matinal',
      trainer: 'Anna "Storm" Kowalski',
      level: 'Tous niveaux',
      type: 'Kickboxing',
      spots: 10
    },
    {
      time: '17:30 - 19:00',
      class: 'MMA Technique',
      trainer: 'Marcus "Steel" Rodriguez',
      level: 'Intermédiaire',
      type: 'MMA',
      spots: 8
    },
    {
      time: '19:30 - 21:00',
      class: 'Grappling',
      trainer: 'Victor "Titan" Petrov',
      level: 'Avancé',
      type: 'Grappling',
      spots: 10
    }
  ],
  'Mercredi': [
    {
      time: '12:00 - 13:30',
      class: 'MMA Express',
      trainer: 'Sofia "Lightning" Chen',
      level: 'Intermédiaire',
      type: 'MMA',
      spots: 8
    },
    {
      time: '18:00 - 19:30',
      class: 'Muay Thai',
      trainer: 'Anna "Storm" Kowalski',
      level: 'Tous niveaux',
      type: 'Muay Thai',
      spots: 12
    },
    {
      time: '20:00 - 21:30',
      class: 'Combat Libre',
      trainer: 'Victor "Titan" Petrov',
      level: 'Expert',
      type: 'Combat',
      spots: 6
    }
  ],
  'Jeudi': [
    {
      time: '07:00 - 08:30',
      class: 'Boxe Technique',
      trainer: 'Marcus "Steel" Rodriguez',
      level: 'Intermédiaire',
      type: 'Boxe',
      spots: 10
    },
    {
      time: '17:00 - 18:30',
      class: 'Jiu-Jitsu Débutant',
      trainer: 'Carlos "Serpent" Silva',
      level: 'Débutant',
      type: 'Jiu-Jitsu',
      spots: 8
    },
    {
      time: '19:00 - 20:30',
      class: 'MMA Sparring',
      trainer: 'Sofia "Lightning" Chen',
      level: 'Avancé',
      type: 'MMA',
      spots: 6
    }
  ],
  'Vendredi': [
    {
      time: '18:00 - 19:30',
      class: 'Kickboxing Power',
      trainer: 'Anna "Storm" Kowalski',
      level: 'Intermédiaire',
      type: 'Kickboxing',
      spots: 12
    },
    {
      time: '19:45 - 21:15',
      class: 'MMA Elite',
      trainer: 'Victor "Titan" Petrov',
      level: 'Expert',
      type: 'MMA',
      spots: 4
    }
  ],
  'Samedi': [
    {
      time: '09:00 - 10:30',
      class: 'MMA Open Mat',
      trainer: 'Tous les coaches',
      level: 'Tous niveaux',
      type: 'MMA',
      spots: 15
    },
    {
      time: '11:00 - 12:30',
      class: 'Technique Avancée',
      trainer: 'Carlos "Serpent" Silva',
      level: 'Avancé',
      type: 'Technique',
      spots: 8
    },
    {
      time: '14:00 - 16:00',
      class: 'Sparring Session',
      trainer: 'Marcus "Steel" Rodriguez',
      level: 'Intermédiaire+',
      type: 'Sparring',
      spots: 10
    }
  ],
  'Dimanche': [
    {
      time: '10:00 - 11:30',
      class: 'Recovery & Mobility',
      trainer: 'Sofia "Lightning" Chen',
      level: 'Tous niveaux',
      type: 'Recovery',
      spots: 12
    },
    {
      time: '16:00 - 17:30',
      class: 'Conditioning Elite',
      trainer: 'Anna "Storm" Kowalski',
      level: 'Avancé',
      type: 'Conditioning',
      spots: 8
    }
  ]
};

const typeColors = {
  'MMA': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'Boxe': 'bg-gradient-to-r from-red-500 to-orange-500',
  'Jiu-Jitsu': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'Kickboxing': 'bg-gradient-to-r from-green-500 to-teal-500',
  'Muay Thai': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'Grappling': 'bg-gradient-to-r from-indigo-500 to-purple-500',
  'Combat': 'bg-gradient-to-r from-red-600 to-pink-600',
  'Technique': 'bg-gradient-to-r from-slate-500 to-blue-500',
  'Sparring': 'bg-gradient-to-r from-orange-500 to-red-500',
  'Recovery': 'bg-gradient-to-r from-green-400 to-blue-400',
  'Conditioning': 'bg-gradient-to-r from-purple-600 to-pink-600'
};

const levelColors = {
  'Débutant': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Intermédiaire': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Avancé': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Expert': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Tous niveaux': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Intermédiaire+': 'bg-purple-500/20 text-purple-300 border-purple-500/30'
};

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Lundi');
  const [selectedType, setSelectedType] = useState('Tous');

  const days = Object.keys(scheduleData);
  const types = ['Tous', ...Object.keys(typeColors)];

  const filteredClasses = selectedType === 'Tous' 
    ? scheduleData[selectedDay] 
    : scheduleData[selectedDay].filter(cls => cls.type === selectedType);

  return (
    <section id="planning" className="py-20 px-4 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 py-[21px]">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text mb-6 tracking-tight font-bold">
            Planning des Champions
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Rejoignez l'élite des combattants. Chaque cours est conçu pour forger des champions. 
            Votre parcours vers l'excellence commence ici.
          </p>
        </div>

        {/* Day Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {days.map((day) => (
            <Button
              key={day}
              onClick={() => setSelectedDay(day)}
              variant={selectedDay === day ? "default" : "outline"}
              className={`transition-all duration-300 ${
                selectedDay === day 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25 text-white' 
                  : 'glass border-white/30 hover:bg-white/15 text-slate-200 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              {day}
            </Button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {types.map((type) => (
            <Button
              key={type}
              onClick={() => setSelectedType(type)}
              variant="outline"
              size="sm"
              className={`transition-all duration-300 ${
                selectedType === type 
                  ? 'bg-white/20 border-white/40 text-white' 
                  : 'glass border-white/30 hover:bg-white/15 text-slate-200 hover:text-white'
              }`}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <Card key={classItem.class + classItem.time} className="glass-dark border-white/10 overflow-hidden group hover:border-purple-500/30 transition-colors duration-300">
              <div className="p-6">
                {/* Class Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`${typeColors[classItem.type]} rounded-full px-3 py-1 text-xs font-semibold text-white`}>
                    {classItem.type}
                  </div>
                  <Badge className={`${levelColors[classItem.level]} border`}>
                    {classItem.level}
                  </Badge>
                </div>

                {/* Class Name */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {classItem.class}
                </h3>

                {/* Time */}
                <div className="flex items-center mb-3 text-slate-300">
                  <Clock className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="font-medium">{classItem.time}</span>
                </div>

                {/* Trainer */}
                <div className="flex items-center mb-3 text-slate-300">
                  <User className="w-4 h-4 mr-2 text-pink-400" />
                  <span>{classItem.trainer}</span>
                </div>

                {/* Available Spots */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-slate-300">
                    <Target className="w-4 h-4 mr-2 text-green-400" />
                    <span>{classItem.spots} places disponibles</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button asChild className="w-full btn-3d bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  <Link to={`/contact?program=${encodeURIComponent(classItem.class)}`}>
                    Réserver ma Place
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-dark border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 premium-text">
              Prêt à Rejoindre l'Élite ?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Plus Ultra MMA - Là où les champions naissent. 
              Chaque entraînement vous rapproche de votre meilleure version.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-3d bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 shadow-lg shadow-purple-500/25">
                <Link to="/contact?program=Cours+d%27Essai+Gratuit">
                  Cours d'Essai Gratuit
                </Link>
              </Button>
              <Button asChild
                variant="outline" 
                className="glass border-white/30 hover:bg-white/15 text-white hover:text-white px-8 py-3 font-semibold"
              >
                <Link to="/contact">
                  Programme Personnalisé
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}