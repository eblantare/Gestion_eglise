// frontend/app/admin/page.tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { 
  FileText, Calendar, Users, Image, Settings, 
  BookOpen, Activity, GraduationCap, Camera,
  ArrowRight, BarChart, Shield
} from 'lucide-react'

export default function AdminHomePage() {
  const { isAuthenticated, isAdmin, isWebmaster, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/auth/login?redirect=/admin')
      } else if (!isAdmin && !isWebmaster) {
        router.push('/')
      }
    }
  }, [isLoading, isAuthenticated, isAdmin, isWebmaster, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  const adminModules = [
    {
      title: 'Articles & Publications',
      description: 'Gérer les articles du blog et actualités',
      icon: <FileText className="w-8 h-8" />,
      href: '/admin/posts',
      color: 'from-blue-500 to-cyan-500',
      count: 12
    },
    {
      title: 'Événements',
      description: 'Gérer le calendrier des événements',
      icon: <Calendar className="w-8 h-8" />,
      href: '/admin/events',
      color: 'from-purple-500 to-pink-500',
      count: 8
    },
    {
      title: 'Membres',
      description: 'Gérer les membres de l\'église',
      icon: <Users className="w-8 h-8" />,
      href: '/admin/members',
      color: 'from-green-500 to-emerald-500',
      count: 156
    },
    {
      title: 'CDEJ-RAFISSA',
      description: 'Gestion du Centre des Jeunes',
      icon: <BookOpen className="w-8 h-8" />,
      href: '/admin/cdej',
      color: 'from-orange-500 to-red-500',
      count: 6
    },
    {
      title: 'Médias',
      description: 'Bibliothèque d\'images et vidéos',
      icon: <Image className="w-8 h-8" />,
      href: '/admin/media',
      color: 'from-yellow-500 to-amber-500',
      count: 45
    },
    {
      title: 'Paramètres',
      description: 'Configuration du site',
      icon: <Settings className="w-8 h-8" />,
      href: '/admin/settings',
      color: 'from-gray-600 to-gray-800',
      count: null
    }
  ]

  const cdejModules = [
    { title: 'Programmes', icon: <BookOpen className="w-5 h-5" />, href: '/admin/cdej/programmes' },
    { title: 'Activités', icon: <Activity className="w-5 h-5" />, href: '/admin/cdej/activites' },
    { title: 'Événements CDEJ', icon: <Calendar className="w-5 h-5" />, href: '/admin/cdej/evenements' },
    { title: 'Formations', icon: <GraduationCap className="w-5 h-5" />, href: '/admin/cdej/formations' },
    { title: 'Galleries', icon: <Camera className="w-5 h-5" />, href: '/admin/cdej/galleries' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Admin */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Administration</h1>
              <p className="text-blue-100 mt-2">
                Bienvenue dans le panneau de gestion du site
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-sm">Connecté en tant que</div>
                <div className="font-bold">
                  {isWebmaster ? 'Webmaster' : 'Administrateur'}
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-gray-600">Membres</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-gray-600">Événements</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-gray-600">Articles</div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">6</div>
                <div className="text-gray-600">Programmes CDEJ</div>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Modules d'administration */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modules de gestion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminModules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${module.color} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {module.icon}
                    </div>
                    {module.count !== null && (
                      <div className="text-white font-bold text-2xl">
                        {module.count}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">{module.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Accéder
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Modules CDEJ détaillés */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion CDEJ-RAFISSA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {cdejModules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">{module.icon}</div>
                  </div>
                  <div className="font-medium text-gray-900">{module.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Actions rapides */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions rapides</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              + Nouvel article
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
              + Nouvel événement
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
              + Nouveau membre
            </button>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium">
              + Nouveau programme CDEJ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}