import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

export function BetterSupport() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-balance">
              Better support, at any stage of the care journey.
            </h2>

            <p className="text-lg mb-8 leading-relaxed">
              From assisted living to memory care, SafelyYou provides breakthrough AI innovations to elevate care for
              seniors, helping to improve their well-being. We're proven to reduce falls, which is one of the leading
              reasons people turn to senior living. And now, with SafelyYou Halo™, we're offering unprecedented safety
              building-wide in communities, along with an unmatched level of wellness analytics for residents. Which
              means <span className="font-semibold">residents in SafelyYou communities are:</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg font-medium">safer than ever</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg font-medium">
                  their well-being is far better understood, and staff know more quickly what needs attention
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg font-medium">
                  and they can age in place longer in the communities they trust to care for them, helping to maintain
                  their independence
                </span>
              </div>
            </div>

            <p className="text-lg mb-8 leading-relaxed">
              When care needs increase, SafelyYou Halo™ can take that next step, too. It can add additional features
              from our proven solutions to meet greater wellness demands. So, SafelyYou is better support at every stage
              of the care journey.
            </p>

            <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold px-8 py-3 text-lg">
              Learn more about how we help
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/elderly-man-with-safelyou-devices-smiling-in-care-.jpg"
                alt="Elderly man in white polo shirt smiling with SafelyYou devices visible in background"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
