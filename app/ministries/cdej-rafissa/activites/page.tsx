// C:\projets\frontend\app\cdej\activites\page.tsx
'use client'

import { motion } from 'framer-motion'
import { Activity, Calendar, Users, MapPin, Clock, Trophy } from 'lucide-react'

export default function ActivitesPage() {
  const activities = [
    {
      id: 1,
      title: "Tournoi Sportif Annuel",
      description: "Compétition sportive entre les différents groupes de jeunes",
      day: "Samedi",
      time: "8h - 18h",
      location: "Stade Municipal",
      participants: "100+",
      status: "À venir"
    },
    {
      id: 2,
      title: "Nuit de Louange",
      description: "Soirée spéciale de louange et d'adoration",
      day: "Vendredi",
      time: "19h - 23h",
      location: "Salle principale",
      participants: "80+",
      status: "Mensuel"
    },
    {
      id: 3,
      title: "Retraite Spirituelle",
      description: "Week-end de ressourcement et de communion fraternelle",
      day: "Samedi-Dimanche",
      time: "Toute la journée",
      location: "Campement Biblique",
      participants: "50",
      status: "Trimestriel"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Activités</h1>
          <p className="text-xl opacity-90">Des moments mémorables pour grandir ensemble</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Activités Régulières</h2>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      {activity.day}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2" />
                      {activity.time}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2" />
                      {activity.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-4 h-4 mr-2" />
                      {activity.participants}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Prochaines Dates</h2>
            {/* Calendrier des activités */}
          </div>
        </div>
      </div>
    </div>
  )
}