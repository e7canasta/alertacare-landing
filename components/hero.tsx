"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat bg-gray-800"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/elderly-woman-in-teal-shirt-smiling-in-healthcare-.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          {/* Content positioned on left side like AlertaCare */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Revolucioná tu enfoque del manejo de caídas.
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Aprovechá tecnología de IA avanzada y experiencia clínica especializada para reducir caídas, riesgos y costos mientras aumentás
                la estadía y el ROI.
              </p>
            </div>

            <div>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium"
                onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explorá AlertaCare IA™
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel dots at bottom like SafelyYou */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
