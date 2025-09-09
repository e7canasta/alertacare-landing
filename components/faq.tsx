import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Se graba todo el tiempo?",
      answer:
        "No, AlertaCare sólo captura y guarda el video cuando detecta un evento de caída. El resto del tiempo, el video se procesa localmente y se descarta automáticamente.",
    },
    {
      question: "¿Cómo se protege la privacidad de los residentes?",
      answer:
        "Requerimos consentimiento del residente o responsable legal, no grabamos audio, las cámaras no apuntan al baño, y sólo guardamos clips de eventos específicos.",
    },
    {
      question: "¿Los residentes necesitan usar dispositivos?",
      answer:
        "No, AlertaCare funciona sin wearables ni dispositivos que el residente deba portar. La detección es completamente automática mediante cámaras con IA.",
    },
    {
      question: "¿Qué recibe el equipo de cuidado cuando ocurre una caída?",
      answer:
        "El equipo recibe una alerta inmediata en tiempo real más el clip de video del evento para evaluar la situación y tomar decisiones informadas sobre la atención necesaria.",
    },
    {
      question: "¿Puedo ver reportes de los resultados?",
      answer:
        "Sí, entregamos informes PDF bimestrales con KPIs específicos del piloto/implementación, incluyendo métricas de caídas, tiempos de respuesta y derivaciones.",
    },
    {
      question: "¿Qué pasa si la habitación es compartida?",
      answer:
        "En habitaciones compartidas, ambos residentes (o sus responsables legales) deben dar su consentimiento para habilitar el servicio AlertaCare.",
    },
    {
      question: "¿Cuánto tiempo toma la instalación?",
      answer:
        "La instalación es rápida y sin obra. Un sector típico queda operativo en 1 día promedio, incluyendo configuración y check-list de calidad.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre AlertaCare
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-pretty">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-pretty leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
