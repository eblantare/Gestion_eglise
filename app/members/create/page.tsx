// app/admin/members/create/page.tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AdminGuard from '@/app/components/AdminGuard'

export default function CreateMemberPage() {
  const { isAdmin, isWebmaster } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Données du formulaire
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    role: 'MEMBER',
    is_active: true,
    address: '',
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const token = localStorage.getItem('access_token')
      const response = await fetch('http://localhost:8000/api/members/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess('Membre créé avec succès !')
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          role: 'MEMBER',
          is_active: true,
          address: '',
          notes: '',
        })
        
        // Rediriger après 2 secondes
        setTimeout(() => {
          router.push('/admin/members')
        }, 2000)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Erreur lors de la création du membre')
      }
    } catch (err) {
      setError('Erreur de connexion au serveur')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Retour à la page précédente"
              >
                ← Retour
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ajouter un nouveau membre</h1>
                <p className="text-gray-600 mt-2">Remplissez les informations du membre</p>
              </div>
            </div>
          </div>

          {/* Messages d'alerte */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg" role="alert">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg" role="alert">
              {success}
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6" aria-label="Formulaire d'ajout de membre">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.first_name}
                  onChange={handleChange}
                  aria-required="true"
                  placeholder="Entrez le prénom"
                />
              </div>
              
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.last_name}
                  onChange={handleChange}
                  aria-required="true"
                  placeholder="Entrez le nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  placeholder="email@exemple.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 1 23 45 67 89"
                  aria-describedby="phone-description"
                />
                <p id="phone-description" className="text-xs text-gray-500 mt-1">
                  Format international recommandé
                </p>
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Rôle *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.role}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby="role-description"
                >
                  <option value="VISITOR">Visiteur</option>
                  <option value="MEMBER">Membre</option>
                  <option value="DEACON">Diacre</option>
                  <option value="ELDER">Ancien</option>
                  <option value="PASTOR">Pasteur</option>
                  {isWebmaster && <option value="ADMIN">Administrateur</option>}
                  {isWebmaster && <option value="WEBMASTER">Webmaster</option>}
                </select>
                <p id="role-description" className="text-xs text-gray-500 mt-1">
                  {isWebmaster 
                    ? 'En tant que webmaster, vous pouvez attribuer tous les rôles'
                    : 'Vous pouvez attribuer les rôles jusqu\'à administrateur'}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.is_active}
                    onChange={handleChange}
                    aria-describedby="active-description"
                  />
                  <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
                    Actif
                  </label>
                </div>
                
                <p id="active-description" className="text-sm text-gray-500">
                  Si inactif, le membre ne pourra pas se connecter
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.address}
                onChange={handleChange}
                placeholder="Adresse complète du membre"
                aria-describedby="address-description"
              />
              <p id="address-description" className="text-xs text-gray-500 mt-1">
                Facultatif - pour les besoins internes uniquement
              </p>
            </div>

            <div className="mb-8">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Notes supplémentaires
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Informations supplémentaires sur le membre..."
                aria-describedby="notes-description"
              />
              <p id="notes-description" className="text-xs text-gray-500 mt-1">
                Ces notes ne sont visibles que par les administrateurs
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push('/admin/members')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                disabled={loading}
                aria-label="Annuler et retourner à la liste des membres"
              >
                Annuler
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={loading ? 'Création du membre en cours...' : 'Créer le membre'}
              >
                {loading ? 'Création en cours...' : 'Créer le membre'}
              </button>
            </div>
          </form>

          {/* Note sur les permissions */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg" role="note">
            <div className="flex items-center gap-3">
              <span className="text-blue-600" aria-hidden="true">ℹ️</span>
              <div>
                <p className="text-blue-800 text-sm">
                  {isWebmaster 
                    ? 'En tant que webmaster, vous pouvez créer tous types de membres, y compris d\'autres administrateurs et webmasters.'
                    : 'En tant qu\'administrateur, vous pouvez créer des membres avec des rôles jusqu\'à administrateur.'}
                </p>
                <p className="text-blue-600 text-xs mt-1">
                  Un email sera automatiquement envoyé au nouveau membre avec ses informations de connexion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  )
}