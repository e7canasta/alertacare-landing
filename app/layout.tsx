import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PromotionalBanner } from "@/components/promotional-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "AlertaCare - Reducí caídas y elevá el cuidado con IA clínica",
  description:
    "Video con IA + soporte clínico para residencias de larga estadía. Menos caídas, menos derivaciones y decisiones con evidencia.",
  generator: "AlertaCare",
  keywords: "caídas, IA, residencias geriátricas, cuidado de adultos mayores, detección de caídas, Argentina",
  openGraph: {
    title: "AlertaCare - Tecnología IA para prevenir caídas",
    description: "Reducí caídas hasta 40% con video IA y soporte clínico 24/7",
    type: "website",
    locale: "es_AR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <PromotionalBanner />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
