import { Button } from "@/components/ui/button"

export function LeaderTestimonials() {
  const videos = [
    {
      title: "Ver el contexto cambia el cuidado",
      thesis: "La revisión en video reduce incertidumbre clínica y acelera decisiones post-caída",
      audience: "Dirección médica + jefatura de enfermería",
      cta: "Ver guía de reuniones post-caída",
      duration: "2:30",
      transcript: "En este video exploramos cómo la revisión de videos de incidentes puede transformar la toma de decisiones clínicas, reduciendo la incertidumbre y mejorando los tiempos de respuesta post-caída.",
      keyPoints: [
        "Reducción de incertidumbre clínica",
        "Aceleración de decisiones post-caída",
        "Mejora en tiempos de respuesta"
      ]
    },
    {
      title: "Huddle post-caída en <10' (paso a paso)",
      thesis: "Cómo estandarizar el análisis causa-raíz con un mini-huddle interdisciplinario",
      audience: "Coordinador/a y enfermería de noche",
      cta: "Descargar checklist + plantilla",
      duration: "3:15",
      transcript: "Una guía práctica para implementar huddles post-caída eficientes que permiten análisis causa-raíz estandarizado en menos de 10 minutos con equipos interdisciplinarios.",
      keyPoints: [
        "Huddles estandarizados en <10 minutos",
        "Análisis causa-raíz interdisciplinario",
        "Proceso paso a paso documentado"
      ]
    },
    {
      title: "Dotación inteligente nocturna",
      thesis: "Ajustar rondas, horarios de baño y apoyos según patrones reales (no supuestos)",
      audience: "Dirección médica + supervisión operativa",
      cta: "Armar piloto de 14 días",
      duration: "2:45",
      transcript: "Descubre cómo optimizar la dotación nocturna basándose en patrones reales de comportamiento y necesidades, no en supuestos tradicionales.",
      keyPoints: [
        "Optimización basada en datos reales",
        "Ajuste de rondas y horarios",
        "Piloto de implementación de 14 días"
      ]
    }
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-gray-200"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full border border-gray-200"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full border border-gray-200"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 rounded-full border border-gray-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          {/* YouTube Channel Pill */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm font-medium text-red-700">De nuestro canal en YouTube</span>
            <a 
              href="https://www.youtube.com/@CareVisiona" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-red-600 hover:text-red-800"
            >
              @CareVisiona
            </a>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contenido educativo para líderes en cuidado.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Videos consultivos que abordan las mejores prácticas en cuidado de adultos mayores, 
            análisis de caídas y optimización de procesos operativos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Video Thumbnail Placeholder */}
                <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-700">{video.duration}</div>
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {video.thesis}
                  </p>

                  {/* Audience */}
                  <div className="mb-4">
                    <span className="text-xs font-medium text-cyan-600 bg-cyan-50 px-2 py-1 rounded">
                      {video.audience}
                    </span>
                  </div>

                  {/* Key Points */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Puntos clave:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {video.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-cyan-600 border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300"
                  >
                    {video.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Channel Button */}
        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold"
            asChild
          >
            <a 
              href="https://www.youtube.com/@CareVisiona" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Ver canal completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
