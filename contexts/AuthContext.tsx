// contexts/AuthContext.tsx - VERSION PROPRE ET FONCTIONNELLE
'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
}

interface Profile {
  id: number
  role: 'VISITOR' | 'MEMBER' | 'DEACON' | 'ELDER' | 'PASTOR' | 'ADMIN' | 'WEBMASTER'
  phone?: string
  is_active: boolean
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  isAdmin: boolean
  isWebmaster: boolean
  canManageContent: boolean
  canManageUsers: boolean
  canManageEverything: boolean
  login: (username: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  refreshUser: () => Promise<void>
}

interface RegisterData {
  username: string
  password: string
  email: string
  first_name: string
  last_name: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedToken = localStorage.getItem('access_token')
        const storedUser = localStorage.getItem('user')
        const storedProfile = localStorage.getItem('profile')
        
        if (storedToken && storedUser) {
          setToken(storedToken)
          setUser(JSON.parse(storedUser))
          
          if (storedProfile) {
            setProfile(JSON.parse(storedProfile))
          }
        }
      } catch (error) {
        console.error('Erreur initialisation auth:', error)
        // Nettoyer en cas d'erreur
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        localStorage.removeItem('profile')
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  // Helper functions
  const isAuthenticated = !!user && !!token
  const isAdmin = profile?.role === 'ADMIN' || profile?.role === 'WEBMASTER'
  const isWebmaster = profile?.role === 'WEBMASTER'
  const canManageUsers = isWebmaster
  const canManageContent = isAdmin || profile?.role === 'PASTOR'
  const canManageEverything = isWebmaster

  const login = async (username: string, password: string) => {
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:8000/api/members/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error('Identifiants invalides')
      }

      const data = await response.json()
      
      // Stocker les données
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
      localStorage.setItem('user', JSON.stringify(data.user))
      
      if (data.member) {
        localStorage.setItem('profile', JSON.stringify(data.member))
        setProfile(data.member)
      }
      
      setToken(data.access)
      setUser(data.user)
      
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData) => {
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:8000/api/members/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription')
      }

      const result = await response.json()
      
      // Stocker les données
      localStorage.setItem('access_token', result.access)
      localStorage.setItem('refresh_token', result.refresh)
      localStorage.setItem('user', JSON.stringify(result.user))
      
      if (result.member) {
        localStorage.setItem('profile', JSON.stringify(result.member))
        setProfile(result.member)
      }
      
      setToken(result.access)
      setUser(result.user)
      
      router.push('/')
    } catch (error) {
      console.error('Register error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Nettoyer le localStorage
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    localStorage.removeItem('profile')
    
    setToken(null)
    setUser(null)
    setProfile(null)
    
    router.push('/')
  }

  const refreshUser = async () => {
    if (!token) return
    
    try {
      const response = await fetch('http://localhost:8000/api/members/auth/me/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('user', JSON.stringify(data.user))
        if (data.member) {
          localStorage.setItem('profile', JSON.stringify(data.member))
          setProfile(data.member)
        }
        setUser(data.user)
      }
    } catch (error) {
      console.error('Refresh user error:', error)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      token,
      isAuthenticated,
      isLoading,
      isAdmin,
      isWebmaster,
      canManageContent,
      canManageUsers,
      canManageEverything,
      login,
      register,
      logout,
      refreshUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}