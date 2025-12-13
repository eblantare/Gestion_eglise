// frontend/lib/useIsClient.tsx
'use client'

import { useState, useEffect } from 'react'

export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}

export function ClientOnly({ 
  children 
}: { 
  children: React.ReactNode 
}): React.ReactElement | null {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  return <>{children}</>; // ✅ JSX valide dans .tsx
}