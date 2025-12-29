// Version avec gestion d'accessibilité avancée
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, profile, logout } = useAuth()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Gestion de la navigation au clavier
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isOpen])

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-4">
        <Link 
          href="/auth/login" 
          className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
        >
          Connexion
        </Link>
        <Link 
          href="/auth/register" 
          className="bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-semibold transition"
        >
          Inscription
        </Link>
      </div>
    )
  }

  const getInitials = () => {
    if (!user) return '?'
    return `${user.first_name?.[0] || ''}${user.last_name?.[0] || ''}`.toUpperCase()
  }

  const getRoleLabel = () => {
    if (!profile) return 'Visiteur'
    
    const roles: Record<string, string> = {
      'VISITOR': 'Visiteur',
      'MEMBER': 'Membre',
      'DEACON': 'Diacre',
      'ELDER': 'Ancien',
      'PASTOR': 'Pasteur',
      'ADMIN': 'Administrateur',
      'WEBMASTER': 'Webmaster',
    }
    
    return roles[profile.role] || 'Visiteur'
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center space-x-3 hover:bg-white/10 px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label={`Menu de ${user?.first_name} ${user?.last_name}`}
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="menu"
        aria-controls="user-menu"
        id="user-menu-button"
      >
        <div className="w-10 h-10 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold">
          {getInitials()}
        </div>
        <div className="text-left hidden md:block">
          <div className="font-semibold">{user?.first_name} {user?.last_name}</div>
          <div className="text-sm text-blue-200">{getRoleLabel()}</div>
        </div>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
          ref={menuRef}
          id="user-menu"
          className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden z-50"
          role="menu"
          aria-labelledby="user-menu-button"
          aria-orientation="vertical"
        >
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="font-bold">{user?.first_name} {user?.last_name}</div>
            <div className="text-sm opacity-90">{getRoleLabel()}</div>
          </div>
          
          <div className="py-2">
            <Link 
              href="/profile" 
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition focus:outline-none focus:bg-gray-100"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={-1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Mon Profil
            </Link>
            
            <Link 
              href="/profile/edit" 
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition focus:outline-none focus:bg-gray-100"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={-1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Modifier Profil
            </Link>
            
            <Link 
              href="/profile/settings" 
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition focus:outline-none focus:bg-gray-100"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={-1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Paramètres
            </Link>
            
            <div className="border-t border-gray-200 my-2" role="separator" aria-hidden="true"></div>
            
            <button
              type="button"
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition text-left focus:outline-none focus:bg-red-50"
              role="menuitem"
              tabIndex={-1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Déconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  )
}