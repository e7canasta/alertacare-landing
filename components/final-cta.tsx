"use client"

import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Probalo en tu residencia
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
              Coordinamos una demo personalizada y evaluamos juntos cómo AlertaCare puede mejorar la seguridad y el
              cuidado en tu institución.
            </p>
          </div>

          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-3"
            onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar demo gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
