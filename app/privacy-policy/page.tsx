import Link from "next/link"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Last updated: June 11, 2025
              </p>

              <h2>1. Introduction</h2>
              <p>
                Ragionare/Inferra ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application ("App").
              </p>
              <p>
                By using Ragionare/Inferra, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Account Information</h3>
              <p>
                When you register for an Inferra account, we may collect:
              </p>
              <ul>
                <li>Email address</li>
                <li>Name/display name</li>
                <li>Authentication method (email/password, Google, or GitHub sign-in)</li>
              </ul>

              <h3>2.2 Device Information</h3>
              <p>
                For security purposes, we collect:
              </p>
              <ul>
                <li>Device platform (OS type)</li>
                <li>Operating system version</li>
                <li>Device type and brand</li>
              </ul>

              <h3>2.3 Usage Information</h3>
              <p>
                For security and service improvement, we collect:
              </p>
              <ul>
                <li>IP address</li>
                <li>Approximate location (city, region, country) derived from IP address</li>
                <li>Authentication timestamps</li>
                <li>Session information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Authenticate your identity and provide access to the App</li>
                <li>Protect your account from unauthorized access</li>
                <li>Improve the security of our service</li>
                <li>Send verification emails</li>
                <li>Notify you about important changes to our service</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Data Storage</h2>
              <p>
                Your account information is stored:
              </p>
              <ul>
                <li>In Firebase Authentication and Firestore database</li>
                <li>Securely on your device using Expo SecureStore for authentication state</li>
              </ul>
              <p>
                All data is transmitted using industry-standard encryption protocols.
              </p>

              <h2>5. On-Device AI Processing</h2>
              <p>
                Our core AI functionality operates entirely on your device:
              </p>
              <ul>
                <li>AI models run locally on your device</li>
                <li>Your conversations with AI models are stored locally and are not transmitted to our servers</li>
                <li>AI model downloads are processed through secure channels</li>
              </ul>

              <h2>6. Third-Party Services</h2>
              <p>
                We use the following third-party services:
              </p>
              <ul>
                <li>Firebase (Authentication, Firestore) - for account management and security</li>
                <li>Google Authentication - optional sign-in method</li>
                <li>GitHub Authentication - optional sign-in method</li>
                <li>IP information services (for security purposes only)</li>
              </ul>
              <p>
                Each third-party service has its own Privacy Policy and Terms of Service.
              </p>

              <h2>7. Security Measures</h2>
              <p>
                We implement several security measures to protect your information:
              </p>
              <ul>
                <li>Secure authentication with password complexity requirements</li>
                <li>Rate limiting to prevent brute force attacks</li>
                <li>Email verification</li>
                <li>Secure local storage of authentication state</li>
                <li>Encrypted data transmission</li>
                <li>Security monitoring for suspicious activities</li>
              </ul>

              <h2>8. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt-out of non-essential communications</li>
              </ul>

              <h2>9. Data Retention</h2>
              <p>
                We retain your account information for as long as your account is active or as needed to provide services. You can delete your account at any time through the App settings. Upon deletion, we will remove your personal information from our systems, though some information may be retained for legal purposes.
              </p>

              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
