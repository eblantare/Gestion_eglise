// C:\projets\frontend\app\cdej\formations\page.tsx
'use client'

import { GraduationCap, Users, Clock, Target } from 'lucide-react'

export default function FormationsPage() {
  const formations = [
    {
      title: "Leadership Chrétien",
      duration: "3 mois",
      level: "Débutant",
      places: "25 places"
    },
    {
      title: "Musique & Louange",
      duration: "2 mois",
      level: "Tous niveaux",
      places: "20 places"
    },
    {
      title: "Évangélisation",
      duration: "1 mois",
      level: "Intermédiaire",
      places: "30 places"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Formations</h1>
          <p className="text-xl opacity-90">Développez vos talents et votre leadership</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <GraduationCap className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">{formation.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3" />
                  Durée: {formation.duration}
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 mr-3" />
                  Niveau: {formation.level}
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3" />
                  {formation.places}
                </div>
              </div>
              
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700">
                S'inscrire
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}