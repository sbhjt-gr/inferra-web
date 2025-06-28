import Link from "next/link"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function TermsConditions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm mb-6 text-red-500 hover:text-red-600"
            >
              ← Back to home
            </Link>
            <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Last updated: April 30, 2025
              </p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using Inferra ("the App"), you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of the terms, you may not access or use the App.
              </p>

              <h2>2. Account Registration and Security</h2>
              <p>
                When you create an account with us, you must provide accurate and complete information. You are solely responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account and password</li>
                <li>Restricting access to your device and account</li>
                <li>Accepting responsibility for all activities that occur under your account</li>
              </ul>
              <p>
                We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
              </p>

              <h2>3. Authentication Methods</h2>
              <p>
                The App offers multiple authentication methods:
              </p>
              <ul>
                <li>Email and password authentication</li>
                <li>Google sign-in</li>
                <li>GitHub sign-in</li>
              </ul>
              <p>
                By using these authentication methods, you agree to comply with their respective terms of service in addition to these Terms and Conditions.
              </p>

              <h2>4. On-Device AI Processing</h2>
              <p>
                The App provides AI functionality that operates on your device:
              </p>
              <ul>
                <li>You may download and use the AI models available within the App</li>
                <li>You retain ownership of any content you create using these AI models</li>
                <li>You may not reverse engineer, decompile, or attempt to extract the AI models</li>
                <li>You may not redistribute or share the AI models outside the App</li>
              </ul>

              <h2>5. User Content and Conduct</h2>
              <p>
                You are responsible for all content you create, share, or transmit through the App. You agree not to use the App to:
              </p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon any intellectual property rights</li>
                <li>Harass, abuse, or harm others</li>
                <li>Distribute malware or engage in malicious activities</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>
                The App and its original content, features, and functionality are owned by Inferra and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not modify, reproduce, distribute, or create derivative works based on any part of the App without explicit permission.
              </p>

              <h2>7. Third-Party Services</h2>
              <p>
                The App integrates with third-party services:
              </p>
              <ul>
                <li>Firebase Authentication and Firestore for account management</li>
                <li>Google and GitHub authentication providers</li>
                <li>Various external API services for security and functionality</li>
              </ul>
              <p>
                Your use of these services is subject to their respective terms and privacy policies.
              </p>

              <h2>8. Device Permissions</h2>
              <p>
                The App requires certain permissions to function properly. By installing and using the App, you grant permission for:
              </p>
              <ul>
                <li>Storage access (to store AI models and user data locally)</li>
                <li>Network access (for authentication and model downloads)</li>
              </ul>
              <p>
                You may revoke these permissions at any time through your device settings, but this may impact App functionality.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Inferra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul>
                <li>Your use or inability to use the App</li>
                <li>Any content obtained through the App</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Any other matter relating to the App</li>
              </ul>

              <h2>10. Service Modifications</h2>
              <p>
                We reserve the right to:
              </p>
              <ul>
                <li>Modify or discontinue the App or any part of it without notice</li>
                <li>Update the App to add or remove features</li>
                <li>Change the terms of service or pricing at any time</li>
              </ul>
              <p>
                We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the App.
              </p>

              <h2>11. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice, for any reason including, without limitation, if you breach these Terms and Conditions.
              </p>
              <p>
                Upon termination, your right to use the App will immediately cease. You may also delete your account at any time through the App settings.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page.
              </p>
              <p>
                Your continued use of the App after any changes to the Terms constitutes your acceptance of the new Terms.
              </p>

              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                <a href="mailto:sage_mastermind@outlook.com">sage_mastermind@outlook.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 