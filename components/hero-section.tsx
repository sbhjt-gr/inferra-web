import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              AI on Your Device
            </span>
            <br />
            Privacy. Performance. Personalization.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Inferra brings powerful AI models directly to your device, ensuring privacy, offline accessibility, and high
            performance without compromising on capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              Download Now
            </Button>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-75"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <img src="/placeholder.svg?height=600&width=800" alt="Inferra App Interface" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
