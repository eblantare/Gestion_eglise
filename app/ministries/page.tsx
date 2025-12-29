// frontend/app/ministries/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, Music, BookOpen, Heart, Target, 
  ChevronRight, Sparkles, Church, Mic, Gamepad2
} from 'lucide-react'

export default function MinistriesPage() {
  const ministries = [
    {
      id: 1,
      title: "CDEJ-RAFISSA",
      description: "Centre des jeunes pour le développement spirituel et social",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      href: "/ministries/cdej-rafissa",
      stats: "150+ Jeunes"
    },
    {
      id: 2,
      title: "Louange & Adoration",
      description: "Ministère de musique et de louange",
      icon: <Music className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      href: "/ministries/louange",
      stats: "30 Membres"
    },
    {
      id: 3,
      title: "Enfants",
      description: "École du dimanche et activités pour enfants",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      href: "/ministries/enfants",
      stats: "50+ Enfants"
    },
    {
      id: 4,
      title: "Femmes",
      description: "Groupe de femmes pour le soutien mutuel",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      href: "/ministries/femmes",
      stats: "40+ Femmes"
    },
    {
      id: 5,
      title: "Évangélisation",
      description: "Mission et témoignage dans la communauté",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      href: "/ministries/evangelisation",
      stats: "Équipe active"
    },
    {
      id: 6,
      title: "Intercession",
      description: "Groupe de prière et d'intercession",
      icon: <Church className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      href: "/ministries/intercession",
      stats: "24/7 Prière"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Nos Ministères</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Des communautés dynamiques pour servir selon vos dons et passions
          </p>
        </div>
      </section>

      {/* Grille des Ministères */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={ministry.href}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow">
                    <div className={`bg-gradient-to-r ${ministry.color} p-8`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                          {ministry.icon}
                        </div>
                        <div className="text-white font-bold">{ministry.stats}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{ministry.title}</h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{ministry.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold flex items-center gap-2">
                          Découvrir
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}