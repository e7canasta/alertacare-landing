"use client"
import { Wifi, Monitor, Bell, MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function NurseOfficeKPI() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const features = [
    {
      id: "wifi-beacon",
      icon: Wifi,
      title: "Baliza WiFi inteligente",
      description: "Sistema de monitoreo ambiental que detecta automáticamente la presencia y actividades de los residentes sin necesidad de dispositivos portátiles.",
      position: "top-8 left-8",
      details: "La baliza WiFi utiliza tecnología de detección ambiental avanzada para identificar patrones de movimiento, presencia en habitaciones y actividades diarias, proporcionando datos precisos sin interferir con la rutina de los residentes."
    },
    {
      id: "central-panel",
      icon: Monitor,
      title: "Panel central de monitoreo",
      description: "Dashboard en tiempo real que muestra el estado de todos los residentes y habitaciones, permitiendo supervisión centralizada y eficiente.",
      position: "top-8 right-8",
      details: "El panel central proporciona una vista completa del estado de cada habitación, con indicadores visuales claros que permiten al personal de enfermería identificar rápidamente situaciones que requieren atención inmediata."
    },
    {
      id: "instant-notifications",
      icon: Bell,
      title: "Notificaciones instantáneas",
      description: "Sistema de alertas en tiempo real que notifica inmediatamente al personal sobre eventos importantes o situaciones que requieren atención.",
      position: "bottom-8 left-8",
      details: "Las notificaciones instantáneas se activan automáticamente cuando se detectan patrones inusuales, emergencias o cuando los residentes necesitan asistencia, garantizando una respuesta rápida del personal de cuidado."
    },
    {
      id: "whatsapp-chatbot",
      icon: MessageCircle,
      title: "Chatbot con notificaciones WhatsApp",
      description: "Sistema de comunicación inteligente que envía actualizaciones y alertas directamente a WhatsApp del personal de cuidado.",
      position: "bottom-8 right-8",
      details: "El chatbot 'Ey Care' integra notificaciones automáticas por WhatsApp, permitiendo al personal recibir actualizaciones importantes, reportes de estado y alertas críticas directamente en sus dispositivos móviles, mejorando la comunicación y respuesta del equipo."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-teal-800 text-balance max-w-4xl mx-auto">
            Monitoreo centralizado desde la oficina de enfermería
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Supervisión inteligente que conecta toda la información del cuidado en un solo lugar
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main nurse office image container */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/nurse-office-room.png" 
              alt="Oficina de enfermería con sistema de monitoreo centralizado" 
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
