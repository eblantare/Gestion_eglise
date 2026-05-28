'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Users, Calendar,
  BookOpen, Home, MessageCircle, Phone, Church
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Navbar() {
  const pathname = usePathname()
  const { isAuthenticated, isAdmin, isWebmaster } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Accueil', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'À propos', href: '/about', icon: <Church className="w-4 h-4" /> },
    { label: 'Croyances', href: '/beliefs', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Ministères', href: '/ministries', icon: <Users className="w-4 h-4" /> },
    { label: 'Événements', href: '/events', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Messages', href: '/sermons', icon: <MessageCircle className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* ===== NAVBAR GLASS ===== */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* ================= LOGO + TEXTE CIRCULAIRE ================= */}
          <Link href="/" className="flex items-center">

            <div className="relative w-16 h-16 flex items-center justify-center">

              {/* LOGO */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 shadow-md bg-white z-10"
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={48}
                  height={48}
                  className="object-cover"
                  priority
                  unoptimized
                />
              </motion.div>

              {/* TEXTE CIRCULAIRE */}
              <svg
                className="absolute w-16 h-16 animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>

                <text fontSize="9" fill="#2563eb" fontWeight="600">
                  <textPath href="#circlePath">
                    EGLISE • DE • LA • GRANDE • GRÂCE • DEFALE
                  </textPath>
                </text>
              </svg>

            </div>

          </Link>

          {/* ================= MENU CENTER ================= */}
          <div className="hidden lg:flex items-center gap-1">

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full
                  text-sm font-medium whitespace-nowrap
                  transition-all duration-200
                  ${isActive(item.href)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            ))}

          </div>

          {/* ================= RIGHT ================= */}
          <div className="hidden lg:flex items-center gap-3">

            {isAdmin || isWebmaster ? (
              <Link
                href="/admin"
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow"
              >
                Admin
              </Link>
            ) : isAuthenticated ? (
              <Link
                href="/profile"
                className="px-4 py-2 rounded-full bg-green-600 text-white text-sm"
              >
                Profil
              </Link>
            ) : (
              <>
                <Link href="/auth/login" className="text-sm text-gray-700 whitespace-nowrap">
                  Connexion
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm whitespace-nowrap"
                >
                  S’inscrire
                </Link>
              </>
            )}

          </div>

          {/* ================= MOBILE ================= */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-blue-600 text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b shadow"
          >
            <div className="px-4 py-3 space-y-2">

              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 whitespace-nowrap"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}