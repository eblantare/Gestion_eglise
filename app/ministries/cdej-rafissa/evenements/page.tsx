// C:\projets\frontend\app\cdej\evenements\page.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, Clock, MapPin, Users, Ticket, Star,
  ChevronRight, Music, Gamepad2, BookOpen, Heart
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function EvenementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  // Catégories d'événements
  const categories = [
    { id: 'all', label: 'Tous', color: 'bg-blue-100 text-blue-800' },
    { id: 'spiritual', label: 'Spirituels', color: 'bg-purple-100 text-purple-800' },
    { id: 'cultural', label: 'Culturels', color: 'bg-green-100 text-green-800' },
    { id: 'sport', label: 'Sportifs', color: 'bg-orange-100 text-orange-800' },
    { id: 'social', label: 'Sociaux', color: 'bg-pink-100 text-pink-800' }
  ]

  // Événements à venir
  const upcomingEvents = [
    {
      id: 1,
      title: "Grand Concert de Noël",
      description: "Une soirée magique de musique, louange et célébration de la naissance de Jésus",
      date: "24 Décembre 2024",
      time: "18h00 - 23h00",
      location: "Salle Polyvalente",
      category: "spiritual",
      featured: true,
      seats: 200,
      registered: 150,
      icon: <Music className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Tournoi de Football Inter-jeunes",
      description: "Compétition sportive pour renforcer l'esprit d'équipe et la fraternité",
      date: "15 Décembre 2024",
      time: "8h00 - 18h00",
      location: "Stade Municipal",
      category: "sport",
      featured: true,
      seats: 100,
      registered: 85,
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Conférence : 'Être Sel et Lumière'",
      description: "Enseignement sur l'impact des jeunes dans la société moderne",
      date: "10 Janvier 2025",
      time: "16h00 - 19h00",
      location: "Salle de Conférence",
      category: "spiritual",
      featured: false,
      seats: 80,
      registered: 45,
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Soirée Talent Show",
      description: "Découvrez les talents cachés de nos jeunes (musique, danse, poésie...)",
      date: "18 Janvier 2025",
      time: "19h00 - 22h00",
      location: "Scène Ouverte",
      category: "cultural",
      featured: false,
      seats: 120,
      registered: 75,
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500"
    },
    {
      id: 5,
      title: "Action Humanitaire : Distribution",
      description: "Journée de partage et d'aide aux personnes démunies de la communauté",
      date: "25 Janvier 2025",
      time: "9h00 - 16h00",
      location: "Quartiers Défavarisés",
      category: "social",
      featured: true,
      seats: 50,
      registered: 32,
      icon: <Heart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Nuit de Prière et Jeûne",
      description: "Vigile spirituelle pour la jeunesse et les défis de notre génération",
      date: "30 Janvier 2025",
      time: "20h00 - 6h00",
      location: "Chapelle Principale",
      category: "spiritual",
      featured: false,
      seats: 100,
      registered: 60,
      icon: <Clock className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    }
  ]

  // Filtrage des événements
  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory)

  // Prochain événement majeur
  const nextMajorEvent = upcomingEvents.find(event => event.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section avec animation */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        {/* Effets visuels */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Calendar className="w-6 h-6" />
              <span className="font-semibold">Événements CDEJ-RAFISSA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Nos <span className="text-yellow-300">Événements</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
              Des moments inoubliables pour vivre la foi, la fraternité et le fun !
            </p>
            
            {/* Compteur d'événements */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm opacity-90">Événements à venir</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-90">Événements spéciaux</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <div className="text-3xl font-bold">492</div>
                <div className="text-sm opacity-90">Participants total</div>
              </div>
            </div>
            
            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/ministries/cdej-rafissa/contacts"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-2xl text-lg"
              >
                <Ticket className="w-6 h-6" />
                S'inscrire au Prochain Événement
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id 
                    ? `${category.color} scale-105 shadow-lg` 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Événement Principal */}
      {nextMajorEvent && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prochain <span className="text-purple-600">Événement Majeur</span>
              </h2>
              <p className="text-gray-600">Ne manquez pas cet événement spécial !</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Icone et Badge */}
                  <div className="relative">
                    <div className={`w-24 h-24 bg-gradient-to-br ${nextMajorEvent.color} rounded-2xl flex items-center justify-center text-white`}>
                      {nextMajorEvent.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      À LA UNE
                    </div>
                  </div>
                  
                  {/* Détails */}
                  <div className="flex-1 text-white">
                    <h3 className="text-3xl font-bold mb-4">{nextMajorEvent.title}</h3>
                    <p className="text-blue-100 mb-6">{nextMajorEvent.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5" />
                        <div>
                          <div className="text-sm opacity-80">Date</div>
                          <div className="font-semibold">{nextMajorEvent.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5" />
                        <div>
                          <div className="text-sm opacity-80">Heure</div>
                          <div className="font-semibold">{nextMajorEvent.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <div>
                          <div className="text-sm opacity-80">Lieu</div>
                          <div className="font-semibold">{nextMajorEvent.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5" />
                        <div>
                          <div className="text-sm opacity-80">Places</div>
                          <div className="font-semibold">{nextMajorEvent.registered}/{nextMajorEvent.seats}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Inscriptions</span>
                        <span>{Math.round((nextMajorEvent.registered / nextMajorEvent.seats) * 100)}% complet</span>
                      </div>
                      <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(nextMajorEvent.registered / nextMajorEvent.seats) * 100}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                        />
                      </div>
                    </div>
                    
                    {/* Boutons d'action */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center gap-3">
                        <Ticket className="w-5 h-5" />
                        Réserver ma place
                      </button>
                      <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition font-bold">
                        Plus d'infos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grille des Événements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tous nos <span className="text-blue-600">Événements</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez tous les événements passionnants que nous organisons pour la jeunesse
            </p>
          </motion.div>

          {/* Grille */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setSelectedEvent(event.id)}
                onMouseLeave={() => setSelectedEvent(null)}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 transition-all duration-300 ${
                  selectedEvent === event.id ? 'border-blue-500 shadow-2xl' : 'border-transparent'
                }`}
              >
                {/* En-tête avec gradient */}
                <div className={`bg-gradient-to-r ${event.color} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {event.icon}
                    </div>
                    {event.featured && (
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                        SPÉCIAL
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>
                  
                  {/* Détails */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{event.registered}/{event.seats} inscrits</span>
                    </div>
                  </div>
                  
                  {/* Boutons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                      S'inscrire
                    </button>
                    <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                     aria-label="Plus de détails" title="Plus de détails">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier des Événements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Calendrier <span className="text-purple-600">Complet</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Ne manquez aucun événement ! Téléchargez notre calendrier ou synchronisez-le avec votre agenda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Télécharger le Calendrier
                  </button>
                  <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition">
                    Synchroniser
                  </button>
                </div>
              </div>
              
              {/* Mini-calendrier visuel */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="grid grid-cols-7 gap-2 text-center mb-6">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                      <div key={i} className="text-gray-500 font-semibold">{day}</div>
                    ))}
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const hasEvent = [15, 18, 24, 25, 30].includes(day); // Jours avec événements
                      return (
                        <div
                          key={i}
                          className={`p-2 rounded-lg ${hasEvent ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-700'}`}
                        >
                          {day}
                        </div>
                      )
                    })}
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Événement CDEJ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Événement spécial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <Ticket className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Organisez votre propre événement
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Vous avez une idée d'événement ? Nous pouvons vous aider à la réaliser !
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/ministries/cdej-rafissa/contacts"
                  className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl"
                >
                  Proposer un événement
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/ministries/cdej-rafissa/activites"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-bold text-lg"
                >
                  Voir les activités
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}