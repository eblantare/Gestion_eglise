// app/about/page.tsx - Page "À propos"
'use client'

import { motion } from 'framer-motion'
import { 
  Church, Users, Target, Heart, Calendar, BookOpen,
  ChevronRight, Star, Award, Globe, Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    { icon: <Heart className="w-8 h-8" />, title: 'Amour', description: 'Nous accueillons chacun avec amour et compassion.' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Enseignement', description: 'La Parole de Dieu est notre fondement.' },
    { icon: <Users className="w-8 h-8" />, title: 'Communauté', description: 'Nous grandissons ensemble dans la foi.' },
    { icon: <Globe className="w-8 h-8" />, title: 'Mission', description: 'Nous partageons l\'Évangile dans notre génération.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/wave.svg')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Church className="w-6 h-6" />
              <span className="font-semibold">Notre Histoire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              À propos de <span className="text-yellow-300">nous</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Une communauté de foi qui transforme des vies depuis plus de 15 ans à Défalé, Togo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre <span className="text-blue-600">Histoire</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Fondée en 2007, l'Église Grande Grâce de Défalé a commencé comme un petit groupe de croyants 
                désireux de vivre et de partager l'amour de Christ dans leur communauté.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Aujourd'hui, nous sommes une communauté florissante de plus de 200 membres, avec des ministères 
                dynamiques et un impact croissant dans la région.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-700">Années de service</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-700">Membres actifs</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Notre Vision</h3>
                      <p className="text-gray-600">
                        Être une communauté transformatrice qui influence positivement notre génération.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Notre Mission</h3>
                      <p className="text-gray-600">
                        Faire des disciples, équiper les leaders et servir la communauté avec amour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="text-purple-600">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chaque aspect de notre vie communautaire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Que vous soyez nouveau dans la foi ou en chemin depuis longtemps, 
              vous avez une place parmi nous.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/events"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg"
              >
                Voir nos événements
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-bold text-lg"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}