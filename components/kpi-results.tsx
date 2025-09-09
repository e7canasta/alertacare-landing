"use client"
import { Brain, Target, Clock, Tablet, X } from "lucide-react"
import { useState } from "react"

export function KPIResults() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const features = [
    {
      id: "care-quality",
      icon: Brain,
      title: "Sabé qué cuidado se brinda",
      description: "Monitoreo inteligente que identifica automáticamente las actividades de cuidado diario, desde asistencia con medicamentos hasta apoyo en actividades básicas de la vida diaria.",
      position: "top-8 left-8",
      details: "Nuestra IA ambiental detecta y registra cada interacción de cuidado, proporcionando un registro detallado de la calidad y frecuencia del cuidado brindado a cada residente."
    },
    {
      id: "precision",
      icon: Target,
      title: "Con precisión sin compromisos",
      description: "Tecnología de precisión médica que elimina la subjetividad en la evaluación del cuidado, proporcionando datos objetivos y medibles.",
      position: "top-8 right-8",
      details: "Sensores ambientales de última generación capturan datos precisos sobre movimientos, interacciones y patrones de cuidado, eliminando la variabilidad humana en la documentación."
    },
    {
      id: "timing",
      icon: Clock,
      title: "Sabé cuándo se brinda el cuidado",
      description: "Registro temporal preciso de todas las actividades de cuidado, permitiendo optimizar horarios y garantizar la continuidad del servicio.",
      position: "bottom-8 left-8",
      details: "Timestamps automáticos para cada evento de cuidado, facilitando la planificación de turnos, identificación de patrones y mejora continua de los procesos operativos."
    },
    {
      id: "non-intrusive",
      icon: Tablet,
      title: "Medición sin dispositivos portátiles",
      description: "Solución completamente ambiental que no requiere que los residentes usen dispositivos, manteniendo su comodidad y dignidad.",
      position: "bottom-8 right-8",
      details: "Tecnología de sensores ambientales que funciona de manera invisible, sin interferir con la rutina diaria de los residentes, garantizando una experiencia natural y sin estrés."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-teal-800 text-balance max-w-4xl mx-auto">
            La primera solución de IA completamente ambiental para el cuidado de adultos mayores.
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main room image container */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/room1.png" 
              alt="Elderly care room with smart monitoring device" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

            {/* Interactive feature points */}
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.id} className={`absolute ${feature.position}`}>
                  <button
                    onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                    className="group relative"
                  >
                    {/* Feature point */}
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center mb-3 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      <IconComponent className="w-6 h-6 text-orange-500" />
                    </div>
                    
                    {/* Feature title */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg max-w-xs">
                      <h3 className="text-sm font-semibold text-teal-800 text-left">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-16 h-16 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Feature detail modal */}
          {activeFeature && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
                <button
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {(() => {
                  const feature = features.find(f => f.id === activeFeature)
                  if (!feature) return null
                  const IconComponent = feature.icon
                  
                  return (
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-teal-800">{feature.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="bg-teal-50 rounded-lg p-6">
                        <h4 className="font-semibold text-teal-800 mb-3">Beneficio operativo:</h4>
                        <p className="text-teal-700 leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
