"use client"
import { Button } from "@/components/ui/button"
import { Camera, Wifi, AlertTriangle } from "lucide-react"
import { useState } from "react"

export function SafelyYouSafety() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const features = [
    {
      id: "wifi-camera",
      icon: Camera,
      title: "Cámaras WiFi desmontables",
      description: "Sistema completo desmontable y trasladable. Procesamiento local en la habitación con máxima seguridad.",
      details: "Cámaras WiFi que se instalan y desinstalan fácilmente, sin conexión a NVR. Todo el procesamiento de imagen y análisis se realiza localmente en la habitación, garantizando máxima privacidad y seguridad de datos."
    },
    {
      id: "all-in-one",
      icon: Wifi,
      title: "Equipo todo en uno",
      description: "Solución integral desmontable que incluye cámara, procesamiento y conectividad en un solo dispositivo.",
      details: "Dispositivo compacto que integra cámara, procesador de IA, conectividad WiFi y alimentación en una sola unidad. Fácil instalación y desmontaje sin necesidad de infraestructura adicional."
    },
    {
      id: "visual-alert",
      icon: AlertTriangle,
      title: "Alerta visual en campo",
      description: "Baliza de alerta visual que se activa en tiempo real para notificar al personal de emergencias.",
      details: "Sistema de alerta visual que se activa automáticamente cuando se detecta una situación de emergencia, proporcionando notificación inmediata al personal de enfermería y facilitando la respuesta rápida."
    }
  ]

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Tecnología desmontable que se adapta a tus necesidades
            </h2>

            <div className="text-white/90 text-lg leading-relaxed space-y-4">
              <p>
                AlertaCare opera de manera continua y ambiental en toda la residencia, identificando patrones de 
                seguridad, bienestar y carga de trabajo. Así, las intervenciones ocurren antes, los recursos se 
                asignan mejor y el plan de cuidados se vuelve más frecuente y efectivo.
              </p>

              <p>
                <strong>Combina IA en video con flujos clínicos prácticos para que el equipo de enfermería brinde un cuidado más personalizado, reduzca eventos evitables y aumente la permanencia de los residentes en su comunidad.</strong> 
                Sistema desmontable y trasladable con procesamiento local, sin conexión a NVR, garantizando máxima 
                privacidad y flexibilidad operacional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                <span>Intervenciones más tempranas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                <span>Optimización de recursos humanos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                <span>Reducción de eventos evitables</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                <span>Mayor permanencia de residentes</span>
              </div>
            </div>

            <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors">
              Ver soluciones desmontables
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Imagen principal - habitación con cámara */}
              <div className="relative">
                <img
                  src="/devices-camera-wifi-in-room.png"
                  alt="Dispositivo de monitoreo integrado en habitación de residente"
                  className="w-full rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setActiveFeature(activeFeature === "wifi-camera" ? null : "wifi-camera")}
                  className="absolute top-4 right-4 group"
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                    <Camera className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-[#FF6B35] rounded-full animate-ping opacity-20"></div>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Imagen secundaria - cámara oval */}
                <div className="relative">
                  <img
                    src="/camera-oval-in-room.png"
                    alt="Sistema de seguridad Alerta Care en entorno residencial"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <button
                    onClick={() => setActiveFeature(activeFeature === "all-in-one" ? null : "all-in-one")}
                    className="absolute top-2 right-2 group"
                  >
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      <Wifi className="w-4 h-4 text-[#FF6B35]" />
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-[#FF6B35] rounded-full animate-ping opacity-20"></div>
                  </button>
                </div>
                
                {/* Imagen terciaria - baliza en oficina de enfermería */}
                <div className="relative">
                  <img
                    src="/baliza-in-nurse-office.png"
                    alt="Sistema de alertas en oficina de enfermería"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <button
                    onClick={() => setActiveFeature(activeFeature === "visual-alert" ? null : "visual-alert")}
                    className="absolute top-2 right-2 group"
                  >
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      <AlertTriangle className="w-4 h-4 text-[#FF6B35]" />
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-[#FF6B35] rounded-full animate-ping opacity-20"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature detail modal */}
        {activeFeature && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveFeature(null)}
          >
            <div 
              className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveFeature(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Cerrar modal"
              >
                ×
              </button>
              {features.find(f => f.id === activeFeature) && (
                <>
                  <h3 className="text-xl font-bold text-primary mb-3 pr-8">
                    {features.find(f => f.id === activeFeature)?.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {features.find(f => f.id === activeFeature)?.details}
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
