// frontend/app/admin/layout.tsx
'use client'

import { ReactNode } from 'react'
import AdminSidebar from '@/components/AdminSidebar'
import AdminGuard from '@/app/components/AdminGuard'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </AdminGuard>
  )
}