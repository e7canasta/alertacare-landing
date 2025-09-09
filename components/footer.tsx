import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-xl">AlertaCare</span>
            </div>
            <p className="text-background/80 text-pretty leading-relaxed">
              Tecnología IA para hacer más seguro el cuidado de personas con demencia y adultos mayores.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">Av. Independencia 2581, San Cristóbal, CABA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">011 3534-3427</span>
              </div>
              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">+54 9 11 2883-5917</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">care@visiona.app</span>
              </div>
            </div>
          </div>

          {/* Demo Form */}
          <div id="demo-form" className="space-y-4">
            <h3 className="font-semibold text-lg">Solicitar demo</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Residencia / Institución"
                className="w-full px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-medium transition-colors"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">© 2025 AlertaCare. Todos los derechos reservados.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
