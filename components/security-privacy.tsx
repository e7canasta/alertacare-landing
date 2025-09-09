import { Button } from "@/components/ui/button"

export function SecurityPrivacy() {
  const kpis = [
    {
      value: "35%",
      description: "Reducción en rotación de personal de enfermería",
    },
    {
      value: "40%",
      description: "Reducción en caídas",
    },
    {
      value: "4+ meses",
      description: "Aumento en permanencia de residentes",
    },
    {
      value: "60%",
      description: "Reducción en costos legales y traslados",
    },
  ]

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Creá el cambio que tu organización necesita.</h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            AlertaCare entrega resultados consistentes. Construido con aprendizajes de más de 500,000 horas 
            de monitoreo acumuladas, nuestra IA está más que probada y estabilizada.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kpis.map((kpi, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{kpi.value}</div>
              <div className="text-sm text-primary-foreground/80 text-pretty leading-relaxed">{kpi.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">Monitoreo, observaciones e insights</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Perfectamente integrados para apoyar un cuidado más conectado, coordinado y consistente.
          </p>
          <Button size="lg" className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-8">
            Programar demo
          </Button>
        </div>
      </div>
    </section>
  )
}
