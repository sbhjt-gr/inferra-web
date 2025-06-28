import { Button } from "@/components/ui/button"
import { Download, Shield, Cpu, Battery, MessageSquare, RefreshCw, Settings } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import DeviceShowcase from "@/components/device-showcase"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <HeroSection />

        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Powerful AI, Right on Your Device</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Inferra brings cutting-edge AI capabilities to your device with privacy and performance at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-purple-500" />}
              title="On-Device AI Processing"
              description="All AI processing happens locally on your device - no data sent to cloud servers, ensuring complete privacy and offline accessibility."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Secure Authentication"
              description="Multiple sign-in options with enhanced security features, email verification, and protected local authentication state."
            />
            <FeatureCard
              icon={<Battery className="h-10 w-10 text-green-500" />}
              title="Smart Device Integration"
              description="Intelligent battery optimization, background processing, and cross-platform support for seamless operation."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-yellow-500" />}
              title="Conversational AI"
              description="Support for multiple AI models, chat history, haptic feedback, and a personalized user experience."
            />
            <FeatureCard
              icon={<RefreshCw className="h-10 w-10 text-red-500" />}
              title="Smart Updates & Downloads"
              description="Efficient model management with background downloads and a comprehensive notification system."
            />
            <FeatureCard
              icon={<Settings className="h-10 w-10 text-indigo-500" />}
              title="Customization"
              description="Personalize your experience with theme preferences, model configuration, storage management, and user profiles."
            />
          </div>
        </section>

        <DeviceShowcase />

        <section id="download" className="py-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-3xl p-12 max-w-5xl mx-auto shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Experience AI on Your Device Today</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Download Inferra now and unlock the power of on-device AI with privacy, performance, and personalization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
