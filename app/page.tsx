import { Button } from "@/components/ui/button"
import { Download, Shield, Cpu, Network, Eye, FileText, Server, Zap } from "lucide-react"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Powerful AI, Complete Privacy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Run large language models entirely on your device with multimodal capabilities, local network sharing, and zero cloud dependency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-purple-500" />}
              title="On-Device AI Processing"
              description="Run large language models completely on your device using Apple MLX and llama.cpp. Zero data sent to cloud servers, complete privacy guaranteed."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10 text-blue-500" />}
              title="Local Network Server"
              description="Share your AI assistant across devices on your WiFi network. Access from tablets, laptops, or desktops via simple REST APIs with QR code setup."
            />
            <FeatureCard
              icon={<Eye className="h-10 w-10 text-green-500" />}
              title="Vision & Multimodal AI"
              description="Analyze images with vision-capable models like SmolVLM2. Built-in camera support, OCR text extraction, and multimodal projector integration."
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-yellow-500" />}
              title="Document Processing & RAG"
              description="Extract text from PDFs and images with local OCR. Retrieval-Augmented Generation for context-aware responses from your documents."
            />
            <FeatureCard
              icon={<Network className="h-10 w-10 text-red-500" />}
              title="Multiple AI Providers"
              description="Support for local models plus Gemini, ChatGPT, DeepSeek, Claude, and Apple Intelligence. Switch seamlessly between providers."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-indigo-500" />}
              title="Optimized Performance"
              description="Background model downloads, auto-start server, persistent connections, and battery-efficient operation with wake lock support."
            />
          </div>
        </section>

        <DeviceShowcase />

        <section className="py-20">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950 rounded-3xl p-12 max-w-5xl mx-auto shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Features at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Local Network Server</h3>
                  <p className="text-sm text-white/75">Share AI across devices via WiFi with REST APIs, QR codes, and WebSocket support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Vision & OCR</h3>
                  <p className="text-sm text-white/75">Analyze images, extract text, built-in camera integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Document RAG</h3>
                  <p className="text-sm text-white/75">PDF/image OCR processing, document ingestion, context-aware retrieval</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Multiple Providers</h3>
                  <p className="text-sm text-white/75">Local models + Gemini, ChatGPT, DeepSeek, Claude, Apple Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="py-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-3xl p-12 max-w-5xl mx-auto shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Experience Private AI Today</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Download Inferra and run powerful AI models completely on your device. Share across your network, analyze images, process documents—all without cloud dependency.
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
