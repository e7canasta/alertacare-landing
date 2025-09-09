import { Wrench, MapPin, CheckCircle } from "lucide-react"

export function SimpleInstallation() {
  const features = [
    {
      icon: Wrench,
      title: "Sin obra fija",
      description: "Sistema portátil y adaptable, sin necesidad de cableado ni infraestructura especial",
    },
    {
      icon: MapPin,
      title: "Ubicación estratégica",
      description: "Esquina superior de la habitación con campo visual sin baño",
    },
    {
      icon: CheckCircle,
      title: "Puesta en marcha rápida",
      description: "Sector operativo en 1 día promedio con check-list de QA",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Instalación simple</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Implementación rápida y sin complicaciones para tu residencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
