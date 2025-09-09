"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-orange-500 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex-1">
          <p className="text-sm md:text-base font-medium">
            <span className="font-semibold">Directores médicos y administradores:</span> Mejore la seguridad y
            eficiencia operacional con SafelyYou. Evaluación gratuita de 60 días disponible en Lanús, Avellaneda y
            Quilmes. <span className="underline cursor-pointer hover:no-underline">Solicite su evaluación</span>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-orange-600 rounded-full transition-colors"
          aria-label="Cerrar banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
