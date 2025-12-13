// frontend/middleware.ts - VERSION CORRIGÉE
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value
  const path = request.nextUrl.pathname

  // Routes publiques qui ne nécessitent pas d'authentification
  const publicPaths = [
    '/', 
    '/auth/login', 
    '/auth/register',
    '/auth/forgot-password',
    '/events',
    '/sermons',
    '/contact',
    '/about',
    '/beliefs',
    '/ministries',
    '/cdej',
    '/cdej/programmes'
  ]
  
  // Routes protégées nécessitant une authentification
  const protectedPaths = [
    '/profile',
    '/dashboard',
    '/members'
  ]
  
  // Routes admin seulement
  const adminPaths = [
    '/admin',
    '/admin/dashboard',
    '/admin/members',
    '/admin/events',
    '/admin/sermons',
    '/admin/posts',
    '/admin/media',
    '/admin/settings',
    '/admin/users'
  ]

  // Vérifier si c'est une route admin
  const isAdminPath = adminPaths.some(adminPath => path.startsWith(adminPath))
  
  // Vérifier si c'est une route protégée
  const isProtectedPath = protectedPaths.some(protectedPath => path.startsWith(protectedPath))
  
  // Si c'est une route publique, laisser passer
  const isPublicPath = publicPaths.some(publicPath => 
    path === publicPath || path.startsWith(`${publicPath}/`)
  )

  // Récupérer les informations utilisateur
  const userData = request.cookies.get('user')?.value
  let userRole = 'VISITOR'
  let isAdmin = false
  let isWebmaster = false
  
  if (userData) {
    try {
      const user = JSON.parse(userData)
      userRole = user.member?.role || 'VISITOR'
      isAdmin = userRole === 'ADMIN'
      isWebmaster = userRole === 'WEBMASTER'
    } catch (e) {
      console.error('Error parsing user data:', e)
    }
  }

  // Redirection si non authentifié sur route protégée
  if ((isProtectedPath || isAdminPath) && !token) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('redirect', path)
    return NextResponse.redirect(loginUrl)
  }

  // Redirection si non admin sur route admin
  if (isAdminPath && !(isAdmin || isWebmaster)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Redirection si webmaster seulement sur certaines routes
  if (path.startsWith('/admin/users') && !isWebmaster) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  // Redirection si déjà connecté sur login/register
  if ((path === '/auth/login' || path === '/auth/register') && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Ajouter des headers de sécurité
  const response = NextResponse.next()
  
  // Headers de sécurité
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

// CORRECTION ICI : La regex doit être correctement formée
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|public).*)/',
  ],
}