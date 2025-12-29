// frontend/components/SsrSafe.tsx
'use client'

import { ReactNode, useEffect, useState } from 'react'

interface SsrSafeProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function SsrSafe({ children, fallback = null }: SsrSafeProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}