// C:\projets\frontend\app\cdej\page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar, Users, BookOpen, Camera, Mail, Activity, 
  GraduationCap, Music, Gamepad2, Globe, Heart,
  ChevronRight, Sparkles, Star, Target, Trophy
} from 'lucide-react'
import { useState } from 'react'

export default function CdejHomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Sections du CDEJ
  const sections = [
    {
      id: 1,
      title: "Programmes",
      description: "Nos programmes variés pour le développement intégral de la jeunesse",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      href:"/ministries/cdej-rafissa/programmes",
      stats: "6 Programmes",
      features: ["École du Dimanche", "Groupe de Louange", "Club Biblique"]
    },
    {
      id: 2,
      title: "Activités",
      description: "Événements et activités régulières pour dynamiser la jeunesse",
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      href:"/ministries/cdej-rafissa/activites",
      stats: "15+ Activités",
      features: ["Sports", "Retraites", "Sorties"]
    },
    {
      id: 3,
      title: "Événements",
      description: "Grands événements spéciaux et rencontres mémorables",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      href: "/ministries/cdej-rafissa/evenements",
      stats: "Prochain: 15 Déc",
      features: ["Concert de Noël", "Conférences", "Célébrations"]
    },
    {
      id: 4,
      title: "Formations",
      description: "Formations pour développer le leadership et les compétences",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      href: "/ministries/cdej-rafissa/formations",
      stats: "10 Formations",
      features: ["Leadership", "Musique", "Évangélisation"]
    },
    {
      id: 5,
      title: "Galleries",
      description: "Photos et vidéos de nos meilleurs moments",
      icon: <Camera className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      href: "/ministries/cdej-rafissa/galleries",
      stats: "200+ Photos",
      features: ["Albums", "Vidéos", "Témoignages"]
    },
    {
      id: 6,
      title: "Contacts",
      description: "Rejoignez-nous et contactez l'équipe CDEJ",
      icon: <Mail className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      href: "/ministries/cdej-rafissa/contacts",
      stats: "Équipe: 12",
      features: ["Bénévoles", "Responsables", "Mentors"]
    }
  ]

  // Témoignages
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Membre depuis 2 ans",
      content: "Le CDEJ a transformé ma vie spirituelle et sociale. Une vraie famille !",
      avatar: "👧"
    },
    {
      name: "Marc T.",
      role: "Responsable Louange",
      content: "J'ai découvert mes talents musicaux grâce aux formations du CDEJ.",
      avatar: "🎵"
    },
    {
      name: "Julie M.",
      role: "Bénévole",
      content: "Les activités sportives m'ont aidée à rencontrer des amis formidables.",
      avatar: "⚽"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section avec animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        {/* Effets de particules */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Centre des Jeunes</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              CDEJ-<span className="text-yellow-300">RAFISSA</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transformer des vies, équiper des leaders, inspirer une génération
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">👥 150+ Membres</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">🌟 6 Sections</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">🎯 Impact Communautaire</span>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/ministries/cdej-rafissa/contacts"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl text-lg"
              >
                Nous Rejoindre
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sections CDEJ - Grille animée */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Découvrez le <span className="text-blue-600">CDEJ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un centre complet dédié au développement intégral de la jeunesse
            </p>
          </motion.div>

          {/* Grille des sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={section.href}>
                  <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300 ${
                    hoveredCard === section.id ? 'shadow-2xl' : ''
                  }`}>
                    {/* Header avec gradient */}
                    <div className={`bg-gradient-to-r ${section.color} p-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          {section.icon}
                        </div>
                        <div className="text-white font-bold text-lg">
                          {section.stats}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {section.title}
                      </h3>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">
                        {section.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {section.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold flex items-center gap-2">
                          Explorer
                          <ChevronRight className="w-4 h-4" />
                        </span>
                        <motion.div
                          animate={{ 
                            scale: hoveredCard === section.id ? 1.2 : 1,
                            rotate: hoveredCard === section.id ? 360 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600">→</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques impressionnantes */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre <span className="text-purple-600">Impact</span> en Chiffres
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Jeunes Actifs", icon: <Users className="w-8 h-8" />, color: "text-blue-600" },
              { value: "6", label: "Programmes", icon: <BookOpen className="w-8 h-8" />, color: "text-purple-600" },
              { value: "50+", label: "Activités/An", icon: <Activity className="w-8 h-8" />, color: "text-green-600" },
              { value: "12", label: "Responsables", icon: <Target className="w-8 h-8" />, color: "text-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ils <span className="text-pink-600">Témoignent</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que disent les jeunes du CDEJ-RAFISSA
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Faire Partie de l'Aventure ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez une communauté dynamique qui va transformer votre vie et votre foi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/ministries/cdej-rafissa/contacts"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl"
                >
                  Nous Contacter
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/ministries/cdej-rafissa/programmes"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-bold text-lg"
                >
                  Voir les Programmes
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}