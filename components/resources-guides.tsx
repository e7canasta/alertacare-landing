import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ResourcesGuides() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-6xl font-bold text-orange-500">01</div>
              <h2 className="text-4xl font-bold text-teal-800 leading-tight">La plataforma más completa</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-700">Acompaña al residente durante todo su recorrido de cuidado</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-700">Apoya la seguridad, bienestar y entrega de cuidado</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-700">Ofrece integración directa con HCE y sistemas de llamada</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-700">Aumenta la estadía promedio en más de 4 meses</p>
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              Ver todas las soluciones
            </Button>
          </div>

          {/* Right side - Device mockups */}
          <div className="relative">
            <div className="relative">
              {/* Laptop mockup */}
              <div className="bg-gray-800 rounded-t-2xl p-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/dashboard.png"
                    alt="Dashboard de AlertaCare en laptop"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="bg-gray-800 h-6 rounded-b-2xl"></div>

              {/* Mobile mockup - positioned over laptop */}
              <div className="absolute -bottom-8 -left-8 transform rotate-12">
                <div className="w-48">
                  <img 
                    src="/welcome-mobile.png" 
                    alt="App móvil de AlertaCare" 
                    className="w-full h-auto" 
                    style={{ 
                      filter: 'brightness(1.05) contrast(1.1) saturate(0.95)',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
