// C:\projets\frontend\app\layout.tsx - CORRIGÉ
'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

// Importer dynamiquement les composants pour éviter les erreurs SSR
const Navbar = dynamic(() => import('@/app/components/Navbar'), { ssr: true })
const Footer = dynamic(() => import('@/app/components/Footer'), { ssr: true })
const PageTransition = dynamic(() => import('@/app/components/PageTransition'), { ssr: true })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')
  
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <title>Église Grande Grâce Défalé - CDEJ-RAFISSA</title>
        <meta name="description" content="Communauté chrétienne dynamique où la grâce rencontre la vie. Découvrez nos ministères, événements et activités jeunesse." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          {/* Navbar présente partout sauf sur les pages d'administration */}
          {!isAdminPage && <Navbar />}
          
          <main className={!isAdminPage ? "pt-16" : ""}>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          
          {/* Footer présent partout sauf sur les pages d'administration et d'authentification */}
          {!isAdminPage && !pathname?.startsWith('/auth') && <Footer />}
        </AuthProvider>
      </body>
    </html>
  )
}