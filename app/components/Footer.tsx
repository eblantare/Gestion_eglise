// components/Footer.tsx - VERSION AMÉLIORÉE
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, Phone, MapPin, Clock, Facebook, 
  Instagram, Youtube, Send, Heart, Sparkles
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos croyances', href: '/beliefs' },
        { label: 'Ministères', href: '/ministries' },
        { label: 'Événements', href: '/events' },
        { label: 'Messages', href: '/sermons' },
      ]
    },
    {
      title: 'CDEJ-RAFISSA',
      links: [
        { label: 'Programmes Jeunesse', href: '/ministries/cdej-rafissa/programmes' },
        { label: 'Activités', href: '/ministries/cdej-rafissa/activites' },
        { label: 'Événements CDEJ', href: '/ministries/cdej-rafissa/evenements' },
        { label: 'Formations', href: '/ministries/cdej-rafissa/formations' },
        { label: 'Galleries', href: '/ministries/cdej-rafissa/galleries' },
        { label: 'Contact CDEJ', href: '/ministries/cdej-rafissa/contacts' },
      ]
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Médias', href: '/media' },
        { label: 'Témoignages', href: '/testimonies' },
        { label: 'Demande de prière', href: '/prayer' },
        { label: 'Faire un don', href: '/donate' },
        { label: 'Devenir bénévole', href: '/volunteer' },
      ]
    }
  ]

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simuler l'envoi
    setTimeout(() => {
      alert('Merci pour votre inscription à notre newsletter !')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Newsletter */}
        <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Restez Connecté</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Recevez nos actualités
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Inscrivez-vous pour recevoir les dernières nouvelles, événements et messages inspirants.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onSubmit={handleNewsletter}
              className="max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-blue-600 rounded-xl font-bold hover:from-gray-100 hover:to-white transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Envoi en cours...' : (
                    <>
                      <Send className="w-5 h-5" />
                      S'abonner
                    </>
                  )}
                </button>
              </div>
              <p className="text-center text-blue-100/70 text-sm mt-4">
                Nous respectons votre vie privée. Désabonnez-vous à tout moment.
              </p>
            </motion.form>
          </div>
        </div>

        {/* Contenu principal du footer */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Logo et description */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Église Grande Grâce</h3>
                    <p className="text-gray-400">Défalé • CDEJ-RAFISSA</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 max-w-md">
                  Une communauté de foi qui transforme des vies par la grâce de Dieu. 
                  Nous croyons en la puissance de l'amour, de la communauté et de la Parole de Dieu.
                </p>
                
                {/* Réseaux sociaux */}
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:bg-blue-600' },
                    { icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:bg-pink-600' },
                    { icon: <Youtube className="w-5 h-5" />, href: '#', color: 'hover:bg-red-600' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Sections de liens */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Coordonnées */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Adresse',
                  content: 'Rue du lycée face Hôtel-Défalé, Défalé, Togo'
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Téléphone',
                  content: '+228 70 46 73 68'
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: 'Email',
                  content: 'directeurdeprojettg0405@gmail.com'
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Culte dominical',
                  content: 'Dimanche 7h - 9h'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-blue-400">{item.icon}</div>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">{item.title}</h5>
                    <p className="text-gray-400">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Église de la Grande Grâce de Défalé. Tous droits réservés.
                </p>
              </div>
              
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-gray-500 hover:text-white transition">
                  Confidentialité
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition">
                  Conditions
                </Link>
                <Link href="/sitemap" className="text-gray-500 hover:text-white transition">
                  Plan du site
                </Link>
                <Link href="/admin" className="text-blue-400 hover:text-blue-300 transition">
                  Administration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}