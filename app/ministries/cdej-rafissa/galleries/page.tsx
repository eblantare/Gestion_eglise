// C:\projets\frontend\app\cdej\galleries\page.tsx
'use client'

import { Camera, Video, Image } from 'lucide-react'

export default function GalleriesPage() {
  const galleries = [
    { title: "Retraite 2023", count: "45 photos", type: "Album" },
    { title: "Concert de Noël", count: "60 photos", type: "Album" },
    { title: "Tournoi Sportif", count: "3 vidéos", type: "Vidéos" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Galleries</h1>
          <p className="text-xl opacity-90">Souvenirs et moments mémorables</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-amber-300 flex items-center justify-center">
                {gallery.type === "Vidéos" ? (
                  <Video className="w-16 h-16 text-amber-600" />
                ) : (
                  <Image className="w-16 h-16 text-amber-600" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
                <p className="text-gray-600 mb-4">{gallery.count}</p>
                <button className="w-full bg-amber-600 text-white py-2 rounded-lg">
                  Voir {gallery.type}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}