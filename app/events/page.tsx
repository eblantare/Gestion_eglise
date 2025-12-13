// frontend/app/events/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react'

interface Event {
  id: number
  title: string
  description: string
  event_type: string
  date: string
  location: string
  speaker: string
  is_published: boolean
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    // Nous créerons l'API Django pour les événements après
    fetch('http://localhost:8000/api/events/')
      .then(res => res.json())
      .then(data => {
        setEvents(data)
        setLoading(false)
      })
      .catch(() => {
        // Données de démo en cas d'erreur
        setEvents([
          {
            id: 1,
            title: "Culte Dominical",
            description: "Temps de louange, adoration et enseignement biblique pour toute la famille.",
            event_type: "SERVICE",
            date: "2024-12-15T09:00:00",
            location: "Salle principale",
            speaker: "Pasteur Jean Martin",
            is_published: true
          },
          {
            id: 2,
            title: "Noël en Famille",
            description: "Célébration spéciale de Noël avec musique, témoignages et partage.",
            event_type: "SPECIAL",
            date: "2024-12-24T18:00:00",
            location: "Salle polyvalente",
            speaker: "Équipe de louange",
            is_published: true
          }
        ])
        setLoading(false)
      })
  }, [])

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true
    return event.event_type === filter
  })

  const eventTypes = [
    { id: 'all', label: 'Tous', color: 'bg-blue-100 text-blue-800' },
    { id: 'SERVICE', label: 'Cultes', color: 'bg-purple-100 text-purple-800' },
    { id: 'PRAYER', label: 'Prières', color: 'bg-green-100 text-green-800' },
    { id: 'BIBLE_STUDY', label: 'Études', color: 'bg-orange-100 text-orange-800' },
    { id: 'YOUTH', label: 'Jeunesse', color: 'bg-pink-100 text-pink-800' },
    { id: 'SPECIAL', label: 'Spéciaux', color: 'bg-red-100 text-red-800' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Événements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les prochaines rencontres de notre communauté et planifiez votre participation.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilter(type.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === type.id 
                    ? `${type.color} scale-105 shadow-lg` 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Événements */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des événements...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-2xl shadow-lg"
          >
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Aucun événement à venir
            </h3>
            <p className="text-gray-600 mb-6">
              Revenez bientôt pour découvrir nos prochaines activités.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Voir le calendrier complet
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* En-tête */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                        event.event_type === 'SERVICE' ? 'bg-blue-100 text-blue-800' :
                        event.event_type === 'SPECIAL' ? 'bg-red-100 text-red-800' :
                        event.event_type === 'YOUTH' ? 'bg-pink-100 text-pink-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.event_type === 'SERVICE' ? 'Culte' :
                         event.event_type === 'SPECIAL' ? 'Événement spécial' :
                         event.event_type === 'YOUTH' ? 'Jeunesse' : 'Étude biblique'}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>

                  {/* Détails */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Date et heure</div>
                        <div className="text-sm">
                          {new Date(event.date).toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                          {' • '}
                          {new Date(event.date).toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Lieu</div>
                        <div className="text-sm">{event.location}</div>
                      </div>
                    </div>
                    
                    {event.speaker && (
                      <div className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Intervenant</div>
                          <div className="text-sm">{event.speaker}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-medium">
                      S'inscrire
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition font-medium">
                      Ajouter au calendrier
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Organisez votre propre événement
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Vous souhaitez organiser une réunion, une étude biblique ou un événement spécial ?
            Contactez-nous pour réserver un créneau.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:-translate-y-1">
            Proposer un événement
          </button>
        </motion.div>
      </div>
    </div>
  )
}