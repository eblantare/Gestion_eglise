// app/page.tsx - VERSION AMÉLIORÉE
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, Users, Calendar, BookOpen, Music, Heart,
  ChevronDown, Sparkles, Star, Church, Target, Trophy
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function HomePage() {
  const [currentVerse, setCurrentVerse] = useState(0)
  const { isAuthenticated } = useAuth()

  const verses = [
    "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi.",
    "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
    "L'amour est patient, il est plein de bonté; l'amour n'est point envieux.",
    "Cherchez premièrement le royaume et la justice de Dieu.",
    "Je puis tout par celui qui me fortifie."
  ]

  const ministries = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "CDEJ-RAFISSA",
      description: "Centre dynamique pour les jeunes",
      color: "from-blue-500 to-cyan-500",
      href: "/ministries/cdej-rafissa"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Louange",
      description: "Ministère de musique et d'adoration",
      color: "from-purple-500 to-pink-500",
      href: "/ministries/louange"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Enfants",
      description: "École du dimanche et activités",
      color: "from-green-500 to-emerald-500",
      href: "/ministries/enfants"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Femmes",
      description: "Groupe de soutien et d'enseignement",
      color: "from-red-500 to-pink-500",
      href: "/ministries/femmes"
    }
  ]

  const upcomingEvents = [
    {
      title: "Culte Dominical",
      date: "Dimanche, 9h",
      description: "Temps de louange et d'enseignement"
    },
    {
      title: "Soirée Jeunes",
      date: "Vendredi, 19h",
      description: "Rencontre spéciale pour la jeunesse"
    },
    {
      title: "Étude Biblique",
      date: "Mercredi, 18h",
      description: "Étude approfondie en petits groupes"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0">
          {/* Effets visuels */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8">
              <Sparkles size={20} />
              <span className="font-semibold">Bienvenue dans notre famille</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Église Grande Grâce
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Une communauté où la <span className="text-blue-600 font-semibold">grâce</span> rencontre la{' '}
              <span className="text-purple-600 font-semibold">vie</span>
            </p>
          </motion.div>

          {/* Verset défilant */}
          <motion.div
            key={currentVerse}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto border border-white/20">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-gray-800 italic font-serif mb-4">
                "{verses[currentVerse]}"
              </p>
              <div className="flex items-center justify-center gap-2">
                {verses.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentVerse
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3 text-lg font-bold"
                >
                  Mon profil
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/events"
                  className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-lg text-lg font-semibold"
                >
                  Voir les événements
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-3 text-lg font-bold"
                >
                  Se connecter
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/auth/register"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all transform hover:-translate-y-1 shadow-xl text-lg font-bold"
                >
                  Rejoindre notre famille
                </Link>
              </>
            )}
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Ministères */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Ministères</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des communautés dynamiques pour grandir ensemble dans la foi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={ministry.href}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-r ${ministry.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                      {ministry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {ministry.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {ministry.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/ministries"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              Voir tous nos ministères
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Prochains événements */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Prochains <span className="text-purple-600">Événements</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Rejoignez-nous pour des moments de communion, d'enseignement et de célébration.
              </p>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        <Calendar className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 mb-1">{event.date}</p>
                        <p className="text-gray-500">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Voir tous les événements
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-8 h-8 text-yellow-300" />
                    <h3 className="text-2xl font-bold">Événement Spécial</h3>
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Noël en Famille</h4>
                  <p className="text-blue-100 mb-6">
                    Une célébration magique de la naissance de Jésus avec musique, témoignages et partage.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold">24</div>
                      <div className="text-sm opacity-80">Décembre</div>
                    </div>
                    <div>
                      <div className="font-semibold">À partir de 18h</div>
                      <div className="opacity-90">Salle polyvalente</div>
                    </div>
                  </div>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                  >
                    Plus d'informations
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Une place vous attend
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Que vous soyez en quête spirituelle ou déjà engagé dans la foi, 
              vous trouverez chez nous une communauté accueillante et aimante.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/visit"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl font-bold text-lg"
              >
                Première visite ?
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 font-bold text-lg"
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