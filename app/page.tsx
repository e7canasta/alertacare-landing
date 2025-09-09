import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { KPIResults } from "@/components/kpi-results"
import { NurseOfficeKPI } from "@/components/nurse-office-kpi"
import { ResourcesGuides } from "@/components/resources-guides"
import { SecurityPrivacy } from "@/components/security-privacy"
import { SafelyYouSafety } from "@/components/safelyou-safety"
import { LeaderTestimonials } from "@/components/leader-testimonials"
import { BetterSupport } from "@/components/better-support"
import { SimpleInstallation } from "@/components/simple-installation"
import { FAQ } from "@/components/faq"
import { ProvenResults } from "@/components/proven-results"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <KPIResults />
      <NurseOfficeKPI />
      <ResourcesGuides />
      <SafelyYouSafety />
      <LeaderTestimonials />
      <ProvenResults />
      <SecurityPrivacy />
      <Footer />
    </main>
  )
}
