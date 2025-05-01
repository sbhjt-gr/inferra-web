import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DeviceShowcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">See Inferra in Action</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Experience the power and versatility of on-device AI across different features and use cases.
        </p>
      </div>

      <Tabs defaultValue="chat" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="customization">Customization</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Inferra Chat Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Conversational AI</h3>
                  <p className="text-white/80">
                    Engage with multiple AI models, save your chat history, and enjoy a personalized experience with
                    haptic feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="models" className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Inferra Models Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Smart Model Management</h3>
                  <p className="text-white/80">
                    Download, update, and remove AI models as needed with efficient background processing and
                    notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Inferra Security Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Secure Authentication</h3>
                  <p className="text-white/80">
                    Multiple sign-in options with enhanced security features, email verification, and protected local
                    authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="customization" className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Inferra Customization Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Personalized Experience</h3>
                  <p className="text-white/80">
                    Customize themes, adjust model settings, manage storage, and create personalized user profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
