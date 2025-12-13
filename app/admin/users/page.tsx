'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  member?: {
    role: string
    is_active: boolean
  }
}

export default function AdminUsersPage() {
  const { isWebmaster, token } = useAuth()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (isWebmaster) {
      fetchUsers()
    }
  }, [isWebmaster])
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/admin/users/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }
  
  if (!isWebmaster) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Accès refusé</h1>
          <p>Seul le webmaster peut accéder à cette page.</p>
        </div>
      </div>
    )
  }
  
  const getRoleLabel = (role: string) => {
    const roles: Record<string, string> = {
      'VISITOR': 'Visiteur',
      'MEMBER': 'Membre',
      'DEACON': 'Diacre',
      'ELDER': 'Ancien',
      'PASTOR': 'Pasteur',
      'GROUP_LEADER': 'Responsable de groupe',
      'ADMIN': 'Administrateur',
      'WEBMASTER': 'Webmaster',
    }
    return roles[role] || role
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestion des Utilisateurs</h1>
            <p className="text-gray-600">Créez et gérez les comptes des responsables</p>
          </div>
          <Link
            href="/admin/users/create"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Nouvel Utilisateur
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">{user.first_name} {user.last_name}</div>
                    <div className="text-sm text-gray-500">@{user.username}</div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.member?.role === 'WEBMASTER' ? 'bg-purple-100 text-purple-800' :
                      user.member?.role === 'ADMIN' ? 'bg-red-100 text-red-800' :
                      user.member?.role === 'PASTOR' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {getRoleLabel(user.member?.role || 'MEMBER')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.member?.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.member?.is_active ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Modifier
                    </Link>
                    <button className="text-red-600 hover:text-red-800">
                      Désactiver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}