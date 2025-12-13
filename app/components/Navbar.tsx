// C:\projets\frontend\app\components\Navbar.tsx - VERSION SIMPLIFIÉE
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Church, Users, Calendar,
  BookOpen, Home, MessageCircle, Phone, Sparkles
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated, isAdmin, isWebmaster } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Menu principal simplifié (sans dropdown)
  const menuItems = [
    { 
      label: 'Accueil', 
      href: '/', 
      icon: <Home className="w-4 h-4" /> 
    },
    { 
      label: 'À propos', 
      href: '/about', 
      icon: <Church className="w-4 h-4" /> 
    },
    { 
      label: 'Croyances', 
      href: '/beliefs', 
      icon: <BookOpen className="w-4 h-4" /> 
    },
    { 
      label: 'Ministères', 
      href: '/ministries', 
      icon: <Users className="w-4 h-4" />
      // SUPPRESSION du dropdown ici
    },
    { 
      label: 'Événements', 
      href: '/events', 
      icon: <Calendar className="w-4 h-4" /> 
    },
    { 
      label: 'Messages', 
      href: '/sermons', 
      icon: <MessageCircle className="w-4 h-4" /> 
    },
    { 
      label: 'Contact', 
      href: '/contact', 
      icon: <Phone className="w-4 h-4" /> 
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction pour vérifier si un lien est actif
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' 
        : 'bg-white/95 backdrop-blur-sm py-4'
      }
      border-b border-gray-100
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-tight">
                Église Grande Grâce
              </div>
              <div className="text-xs text-gray-500 leading-tight">
                Défalé • CDEJ-RAFISSA
              </div>
            </div>
          </Link>

          {/* Navigation Desktop - SIMPLIFIÉE (sans dropdown) */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-lg transition-all
                  ${isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }
                `}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {/* Bouton Admin ou Connexion */}
            {(isAdmin || isWebmaster) ? (
              <Link
                href="/admin"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Administration
              </Link>
            ) : isAuthenticated ? (
              <Link
                href="/profile"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Mon profil
              </Link>
            ) : (
              <div className="ml-4 flex gap-2">
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-blue-600 hover:text-blue-800 transition font-medium"
                >
                  Connexion
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            aria-label="Menu mobile"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile déroulant - SIMPLIFIÉ (sans dropdown) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-2 p-3 rounded-lg transition ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  {isAuthenticated ? (
                    <Link
                      href="/profile"
                      className="block w-full text-center py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mon compte
                    </Link>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/auth/login"
                        className="py-3 text-center text-blue-600 hover:text-blue-800 transition font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Connexion
                      </Link>
                      <Link
                        href="/auth/register"
                        className="py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        S'inscrire
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}