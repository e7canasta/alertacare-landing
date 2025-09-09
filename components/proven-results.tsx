import { Button } from "@/components/ui/button"

export function ProvenResults() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Powerful solutions.
              <br />
              Proven results.
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Residentes en comunidades de adultos mayores que implementaron AlertaCare permanecieron 6 meses más 
              en promedio que aquellos sin el sistema de monitoreo inteligente.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
            >
              <a 
                href="/papers/VC_Whitepaper_Vador_Eversion.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver resultados completos del piloto
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Case Study Document Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">AlertaCare</h3>
                  <p className="text-sm text-gray-600">Reporte de Caso de Estudio</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 text-balance">
                  Residentes con AlertaCare permanecieron 6 meses más.
                </h4>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Un estudio integral en comunidades de adultos mayores argentinas demostró que los residentes 
                  que utilizaron el sistema de monitoreo inteligente AlertaCare tuvieron estadías significativamente 
                  más largas comparado con aquellos sin el servicio.
                </p>

                {/* Key Metrics */}
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">317</div>
                      <div className="text-xs text-gray-600">Average Length of stay difference</div>
                      <div className="text-lg font-semibold text-gray-900">days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-xs text-gray-600">Reduction in</div>
                      <div className="text-lg font-semibold text-gray-900">falls</div>
                    </div>
                  </div>
                </div>

                {/* Study Details */}
                <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <p>Estudio realizado durante 24 meses con 450+ residentes</p>
                  <p>Datos validados por firma independiente de análisis en salud</p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>

      {/* Second Section - Best Practices Series */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Best Practices Document Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">BP</span>
                </div>
                <div>
                  <h3 className="font-bold text-cyan-600 text-lg">Best Practices Series</h3>
                  <p className="text-sm text-gray-600">Capítulo 1: Fall Huddle</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 text-balance">
                  Huddle post-caída: Guía de mejores prácticas.
                </h4>

                <p className="text-sm text-gray-700 leading-relaxed">
                  El primer capítulo de nuestra serie de mejores prácticas para el sector de adultos mayores en Argentina. 
                  Una metodología estandarizada para análisis causa-raíz post-caída que optimiza tiempos de respuesta 
                  y mejora la calidad del cuidado en instituciones geriátricas.
                </p>

                {/* Key Benefits */}
                <div className="bg-cyan-50 rounded-lg p-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">&lt;10'</div>
                      <div className="text-xs text-gray-600">Tiempo promedio</div>
                      <div className="text-lg font-semibold text-gray-900">huddle</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">85%</div>
                      <div className="text-xs text-gray-600">Reducción en</div>
                      <div className="text-lg font-semibold text-gray-900">reincidencias</div>
                    </div>
                  </div>
                </div>

                {/* Series Details */}
                <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <p>Serie de mejores prácticas para geriátricos en Argentina</p>
                  <p>Metodologías validadas por equipos interdisciplinarios locales</p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-cyan-600/20 rounded-lg -z-10"></div>
          </div>

          <div className="text-white order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Mejores prácticas.
              <br />
              Resultados garantizados.
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              No solo implementamos la solución, sino que te acompañamos con las mejores prácticas 
              del sector geriátrico argentino. Metodologías probadas que garantizan el cumplimiento 
              de ROI y KPIs para directores médicos.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-white/90 font-semibold"
              asChild
            >
              <a 
                href="/papers/VC_Fall_Huddle_Best_Practices.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Descargar guía de mejores prácticas
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
