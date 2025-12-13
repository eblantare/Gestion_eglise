// app/components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Chargement de l'administration...</p>
        <p className="text-gray-400 text-sm mt-2">Vérification des permissions</p>
      </div>
    </div>
  )
}