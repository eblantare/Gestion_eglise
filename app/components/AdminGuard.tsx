// app/components/AdminGuard.tsx
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface AdminGuardProps {
  children: React.ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { user, isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    console.log('AdminGuard - Debug:', { 
      user, 
      isAdmin, 
      isLoading,
      isChecking 
    })
    
    if (!isLoading) {
      console.log('AdminGuard - Vérification des droits:', { user, isAdmin })
      
      if (!user) {
        console.log('AdminGuard - Pas d\'utilisateur, redirection vers /login')
        router.push('/login?redirect=/admin')
      } else if (!isAdmin) {
        console.log('AdminGuard - Utilisateur non admin, redirection vers /')
        router.push('/')
      } else {
        console.log('AdminGuard - Accès autorisé')
        setIsChecking(false)
      }
    }
  }, [user, isAdmin, isLoading, router])

  if (isLoading || isChecking) {
    console.log('AdminGuard - Affichage du loading spinner')
    return <LoadingSpinner />
  }

  console.log('AdminGuard - Rendu des enfants')
  return <>{children}</>
}