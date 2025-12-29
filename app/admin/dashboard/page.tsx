// app/dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Composant spinner local (ou importez depuis '@/components/LoadingSpinner')
function DashboardLoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement du tableau de bord...</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isAdmin, isWebmaster, isLoading: authLoading, isAuthenticated } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalEvents: 0,
    totalSermons: 0,
    totalPosts: 0,
  })
  const [recentActivity, setRecentActivity] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Rediriger si non authentifié ou non admin
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push('/login')
      } else if (!isAdmin && !isWebmaster) {
        // Afficher un message d'erreur au lieu de rediriger
        setLoading(false)
      } else {
        fetchStats()
      }
    }
  }, [authLoading, isAuthenticated, isAdmin, isWebmaster, router])

  const fetchStats = async () => {
    try {
      // Simuler des données (remplacez par vos appels API)
      setTimeout(() => {
        setStats({
          totalMembers: 156,
          totalEvents: 24,
          totalSermons: 48,
          totalPosts: 12,
        })
        
        setRecentActivity([
          { id: 1, type: 'member', action: 'Nouveau membre', user: 'Jean Dupont', time: 'Il y a 2 heures' },
          { id: 2, type: 'event', action: 'Événement créé', user: 'Marie Lambert', time: 'Il y a 4 heures' },
          { id: 3, type: 'post', action: 'Article publié', user: 'Paul Martin', time: 'Il y a 1 jour' },
        ])
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error fetching stats:', error)
      setLoading(false)
    }
  }

  // Afficher le spinner pendant le chargement
  if (authLoading || loading) {
    return <DashboardLoadingSpinner />
  }

  // Vérifier les permissions après le chargement
  if (!isAdmin && !isWebmaster) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Accès refusé</h1>
          <p className="text-gray-600">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
          <Link href="/" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord Administration</h1>
          <p className="text-gray-600">Gérez votre église et son contenu</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalMembers}</div>
            <div className="text-gray-700 font-semibold">Membres</div>
            <Link href="/admin/members" className="text-sm text-blue-600 hover:text-blue-800">
              Gérer →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.totalEvents}</div>
            <div className="text-gray-700 font-semibold">Événements</div>
            <Link href="/admin/events" className="text-sm text-green-600 hover:text-green-800">
              Gérer →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.totalSermons}</div>
            <div className="text-gray-700 font-semibold">Sermons</div>
            <Link href="/admin/sermons" className="text-sm text-purple-600 hover:text-purple-800">
              Gérer →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalPosts}</div>
            <div className="text-gray-700 font-semibold">Publications</div>
            <Link href="/admin/posts" className="text-sm text-orange-600 hover:text-orange-800">
              Gérer →
            </Link>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Actions rapides</h2>
            <div className="space-y-4">
              <Link 
                href="/admin/events/create" 
                className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">📅</span>
                </div>
                <div>
                  <div className="font-semibold">Créer un événement</div>
                  <div className="text-sm text-gray-600">Ajouter un nouvel événement au calendrier</div>
                </div>
              </Link>
              
              <Link 
                href="/admin/posts/create" 
                className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">📝</span>
                </div>
                <div>
                  <div className="font-semibold">Rédiger un article</div>
                  <div className="text-sm text-gray-600">Publier du nouveau contenu</div>
                </div>
              </Link>
              
              <Link 
                href="/admin/members/create" 
                className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600">👤</span>
                </div>
                <div>
                  <div className="font-semibold">Ajouter un membre</div>
                  <div className="text-sm text-gray-600">Enregistrer un nouveau membre</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Activité récente */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Activité récente</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'member' ? 'bg-blue-100' :
                    activity.type === 'event' ? 'bg-green-100' :
                    'bg-purple-100'
                  }`}>
                    <span className={
                      activity.type === 'member' ? 'text-blue-600' :
                      activity.type === 'event' ? 'text-green-600' :
                      'text-purple-600'
                    }>
                      {activity.type === 'member' ? '👤' :
                       activity.type === 'event' ? '📅' :
                       '📝'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{activity.action}</div>
                    <div className="text-sm text-gray-600">Par {activity.user}</div>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Droits spécifiques pour Webmaster */}
        {isWebmaster && (
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-2xl">👑</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Privilèges Webmaster</h3>
                <p className="text-gray-600">Vous avez accès à toutes les fonctionnalités d'administration</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/admin/settings" 
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="font-semibold mb-2">Paramètres système</div>
                <div className="text-sm text-gray-600">Configurer le site</div>
              </Link>
              
              <Link 
                href="/admin/media" 
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="font-semibold mb-2">Gestion des médias</div>
                <div className="text-sm text-gray-600">Images, vidéos, documents</div>
              </Link>
              
              <Link 
                href="/admin/users" 
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="font-semibold mb-2">Gestion des utilisateurs</div>
                <div className="text-sm text-gray-600">Rôles et permissions</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}