// frontend/components/AdminSidebar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, FileText, Calendar, Users, 
  Image, Settings, BookOpen, LogOut, ChevronLeft,
  ChevronRight, Shield
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const { logout, user } = useAuth()

  const menuItems = [
    {
      title: 'Tableau de bord',
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: '/admin',
      exact: true
    },
    {
      title: 'Articles',
      icon: <FileText className="w-5 h-5" />,
      href: '/admin/posts'
    },
    {
      title: 'Événements',
      icon: <Calendar className="w-5 h-5" />,
      href: '/admin/events'
    },
    {
      title: 'Membres',
      icon: <Users className="w-5 h-5" />,
      href: '/admin/members'
    },
    {
      title: 'CDEJ',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/admin/cdej',
      submenu: [
        { title: 'Programmes', href: '/admin/cdej/programmes' },
        { title: 'Activités', href: '/admin/cdej/activites' },
        { title: 'Événements CDEJ', href: '/admin/cdej/evenements' },
        { title: 'Formations', href: '/admin/cdej/formations' },
        { title: 'Galleries', href: '/admin/cdej/galleries' },
      ]
    },
    {
      title: 'Médias',
      icon: <Image className="w-5 h-5" />,
      href: '/admin/media'
    },
    {
      title: 'Paramètres',
      icon: <Settings className="w-5 h-5" />,
      href: '/admin/settings'
    }
  ]

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <aside className={`
      bg-white h-screen shadow-xl transition-all duration-300
      ${collapsed ? 'w-20' : 'w-64'}
      flex flex-col
    `}>
      {/* Header sidebar */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Admin Panel</div>
                <div className="text-xs text-gray-500">Église Grande Grâce</div>
              </div>
            </div>
          )}
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={collapsed ? "Étendre le menu" : "Réduire le menu"}
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const active = isActive(item.href, item.exact)
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg transition-colors
                    ${active 
                      ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                    ${collapsed ? 'justify-center' : ''}
                  `}
                >
                  <div className={active ? 'text-blue-600' : 'text-gray-500'}>
                    {item.icon}
                  </div>
                  {!collapsed && (
                    <span className="font-medium">{item.title}</span>
                  )}
                </Link>
                
                {/* Sous-menu CDEJ */}
                {item.submenu && !collapsed && isActive(item.href) && (
                  <div className="ml-10 mt-2 space-y-1">
                    {item.submenu.map((subitem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subitem.href}
                        className={`
                          flex items-center gap-2 p-2 text-sm rounded transition-colors
                          ${pathname === subitem.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                          }
                        `}
                      >
                        <div className="w-1 h-1 bg-current rounded-full"></div>
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer sidebar */}
      <div className="p-4 border-t">
        {!collapsed && user && (
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">
                  {user.first_name?.charAt(0)}{user.last_name?.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {user.first_name} {user.last_name}
                </div>
                <div className="text-xs text-gray-500">Administrateur</div>
              </div>
            </div>
          </div>
        )}
        
        <button
          onClick={logout}
          className={`
            w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 
            rounded-lg transition-colors ${collapsed ? 'justify-center' : ''}
          `}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Se déconnecter</span>}
        </button>
      </div>
    </aside>
  )
}