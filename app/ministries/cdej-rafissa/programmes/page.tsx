'use client'

import Image from 'next/image'
import { useState } from 'react'
import SsrSafe from '@/components/SsrSafe'
const programs = [
  {
    id: 1,
    title: 'École du Dimanche pour lee enfants',
    description: 'Enseignement biblique adapté aux enfants, chaque dimanche à 07h.',
    image: '/images/youth-bible.jpg',
    schedule: 'Dimanche 07h-09h',
    ageGroup: '2-12 ans',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Groupe de Louange des enfants et des jeunes RAFISSA',
    description: 'Formation musicale et spirituelle pour adorer Dieu en musique.',
    image: '/images/worship-team.jpg',
    schedule: 'Vendredi et Samedi 15h-17h',
    ageGroup: '10-30 ans',
    icon: '🎵'
  },
  {
    id: 3,
    title: 'Club Biblique ',
    description: 'Étude biblique et fellowship pour étudiants de la bible.',
    image: '/images/bible-study.jpg',
    schedule: 'Mercredi-Vendredi-samedi 18h-20h',
    ageGroup: '14-30 ans',
    icon: '🎓'
  },
  {
    id: 4,
    title: 'Sport & Spiritualité',
    description: 'Activités sportives suivies de moments de partage biblique.',
    image: '/images/sports.jpg',
    schedule: 'Mercredi 16h-18h',
    ageGroup: 'Tous âges',
    icon: '⚽'
  },
  {
    id: 5,
    title: 'Ateliers de Développement',
    description: 'Formations en leadership, communication et développement personnel.',
    image: '/images/workshop.jpg',
    schedule: 'Samedi 9h-12h',
    ageGroup: '18-35 ans',
    icon: '💼'
  },
  {
    id: 6,
    title: 'Mission Jeunesse',
    description: 'Actions sociales et évangélisation dans la communauté.',
    image: '/images/mission.jpg',
    schedule: 'Variable',
    ageGroup: '16-30 ans',
    icon: '🌍'
  }
]

export default function ProgrammesPage() {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null)

  return (
    <SsrSafe>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Programmes CDEJ- <span className="text-yellow-300">RAFISSA</span>
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Des programmes dynamiques et transformateurs pour équiper la jeunesse 
                à vivre pleinement sa foi et son potentiel.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-semibold">👥 150+ Jeunes</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-semibold">📅 6 Programmes</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-semibold">🎯 Impact Communautaire</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Inscription Rapide</h3>
                <p className="mb-6">Rejoignez nos programmes jeunesse dès maintenant !</p>
                <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-bold hover:bg-blue-100 transition">
                  S'inscrire Maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programmes Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Nos Programmes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez nos programmes variés conçus pour le développement intégral des jeunes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${selectedProgram === program.id ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => setSelectedProgram(program.id)}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{program.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {program.ageGroup}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.schedule}
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Ouvert à tous
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Prêt à faire la différence ?
          </h2>
          <p className="text-xl mb-12 opacity-95">
            Rejoignez-nous et découvrez comment votre foi peut transformer votre génération.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:-translate-y-1 text-lg">
              Devenir Membre
            </button>
            <button className="bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition text-lg">
              Voir le Calendrier
            </button>
          </div>
        </div>
      </div>
    </div>
    </SsrSafe>
  )
}