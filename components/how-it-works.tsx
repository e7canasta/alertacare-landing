"use client"

import { Shield, Heart, Users, TrendingUp, FileText, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HowItWorks() {
  const leftFeatures = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Detección de caídas 24/7 con IA líder en la industria, video claro, análisis de causas",
    },
    {
      icon: Heart,
      title: "Bienestar",
      description:
        "Controles virtuales, evaluaciones nocturnas automatizadas, evaluación de calidad del sueño, actividades de la vida diaria",
    },
    {
      icon: Users,
      title: "Personal",
      description: "Horas de cuidado, horas de AVD, horas de personal, informes de varianza y patrones",
    },
  ]

  const rightFeatures = [
    {
      icon: TrendingUp,
      title: "Análisis predictivo",
      description: "Tendencias de riesgo, eficiencia del personal, ocupación, riesgo, benchmarking",
    },
    {
      icon: FileText,
      title: "Reportes detallados",
      description:
        "Más de 50 puntos de datos, más de 100 reportes personalizables, dashboards organizacionales y comunitarios",
    },
    {
      icon: Settings,
      title: "Integración",
      description: "API RESTful completa, FHIR / HL7, personalizable, SSO y eCall",
    },
  ]

  return (
    <section id="plataforma" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-800 text-balance leading-tight">
            Una plataforma construida para lo que viene.
            <br />
            Entregando lo que necesitás ahora.
          </h2>
          <p className="text-lg text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
            AlertaCare ofrece tecnología innovadora que resuelve los desafíos de hoy y escala para las necesidades del
            mañana, desde manejo de caídas y operaciones hasta asignación de personal y aumentos de ocupación.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left column - Features */}
          <div className="space-y-12">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-teal-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center column - Dashboard image */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg max-w-sm overflow-hidden">
              <Image
                src="/dashboard-mockup1.png"
                alt="AlertaCare Dashboard - Claridad"
                width={400}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-12">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-teal-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-medium"
            onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver todas las soluciones
          </Button>
        </div>
      </div>
    </section>
  )
}
