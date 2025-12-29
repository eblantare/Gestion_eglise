'use client'

import { useState } from 'react'

interface Sermon {
  id: number
  title: string
  preacher: string
  date: string
  duration: string
  audio_url: string
  video_url: string
}

export default function SermonsPage() {
  const [sermons] = useState<Sermon[]>([
    {
      id: 1,
      title: "La puissance de la foi",
      preacher: "Pasteur Jean Martin",
      date: "2024-01-14",
      duration: "45:20",
      audio_url: "#",
      video_url: "#"
    },
    {
      id: 2,
      title: "L'amour inconditionnel",
      preacher: "Ancien Paul Dubois",
      date: "2024-01-07",
      duration: "38:15",
      audio_url: "#",
      video_url: "#"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Sermons et enseignements
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sermons.map(sermon => (
            <div key={sermon.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{sermon.title}</h3>
                <p className="text-gray-600 mb-4">Par {sermon.preacher}</p>
                
                <div className="flex items-center justify-between text-gray-700 mb-6">
                  <span>{new Date(sermon.date).toLocaleDateString('fr-FR')}</span>
                  <span>Durée : {sermon.duration}</span>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Écouter
                  </button>
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Regarder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Plus de sermons seront bientôt disponibles. Revenez régulièrement !
          </p>
          <a 
            href="http://localhost:8000/admin" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Gérer les sermons (Admin)
          </a>
        </div>
      </div>
    </div>
  )
}