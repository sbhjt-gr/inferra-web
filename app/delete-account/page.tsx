"use client"

import { useState } from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Trash2, AlertTriangle, Shield } from "lucide-react"

export default function DeleteAccount() {
  const [email, setEmail] = useState("")
  const [confirmationText, setConfirmationText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleDeleteRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (confirmationText !== "DELETE") {
      alert("Please type 'DELETE' to confirm account deletion")
      return
    }

    if (!email.trim()) {
      alert("Please enter your email address")
      return
    }

    setIsDeleting(true)
    
    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setShowConfirmation(true)
      } else {
        throw new Error('Failed to process deletion request')
      }
    } catch (error) {
      alert('An error occurred. Please try again or contact support.')
    } finally {
      setIsDeleting(false)
    }
  }

  if (showConfirmation) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <Shield className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-4">Deletion Request Received</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Your account deletion request has been submitted successfully. You will receive a confirmation email with further instructions.
                </p>
              </div>
              <Link href="/">
                <Button>Return to Home</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
            
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-6 flex items-center">
                <Trash2 className="h-10 w-10 mr-4 text-red-500" />
                Delete Your Account
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We're sorry to see you go. Please review the information below before proceeding with account deletion.
              </p>
            </div>

            <Alert variant="destructive" className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning: This action cannot be undone</AlertTitle>
              <AlertDescription>
                Account deletion is permanent and irreversible. Please make sure you want to proceed before continuing.
              </AlertDescription>
            </Alert>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <h2>What happens when you delete your account?</h2>
              <p>
                When you delete your Inferra account, the following data will be permanently removed:
              </p>
              <ul>
                <li>Your account profile and authentication information</li>
                <li>Email address and associated login credentials</li>
                <li>Account preferences and settings</li>
                <li>Any cloud-stored user data and configurations</li>
                <li>Authentication history and security logs</li>
              </ul>

              <h2>What data remains on your device?</h2>
              <p>
                Since Inferra processes AI data locally on your device, the following may remain until manually removed:
              </p>
              <ul>
                <li>Downloaded AI models stored locally</li>
                <li>Chat history and conversations with AI models</li>
                <li>App preferences stored in device storage</li>
                <li>Cached data and temporary files</li>
              </ul>
              <p>
                <strong>To completely remove all data:</strong> After account deletion, please uninstall the Inferra app from your device to remove all locally stored information.
              </p>

              <h2>Before you delete your account</h2>
              <p>
                Please consider the following alternatives:
              </p>
              <ul>
                <li><strong>Temporary break:</strong> You can simply uninstall the app and reinstall it later</li>
                <li><strong>Privacy concerns:</strong> Review our <Link href="/privacy-policy" className="text-red-500 hover:text-red-600">Privacy Policy</Link> to understand how we protect your data</li>
                <li><strong>Technical issues:</strong> Contact our support team at <a href="mailto:sage_mastermind@outlook.com" className="text-red-500 hover:text-red-600">sage_mastermind@outlook.com</a></li>
              </ul>

              <h2>Alternative: Data Download Request</h2>
              <p>
                If you want to keep a copy of your data before deletion, please contact us at <a href="mailto:sage_mastermind@outlook.com" className="text-red-500 hover:text-red-600">sage_mastermind@outlook.com</a> to request a data export before proceeding with deletion.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Account Deletion Request</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If you're certain you want to delete your account, please fill out the form below. You will receive an email confirmation before the deletion is processed.
              </p>
              
              <form onSubmit={handleDeleteRequest} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your account email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmation" className="block text-sm font-medium mb-2">
                    Type "DELETE" to confirm
                  </label>
                  <Input
                    id="confirmation"
                    type="text"
                    value={confirmationText}
                    onChange={(e) => setConfirmationText(e.target.value)}
                    placeholder="Type DELETE in capital letters"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="destructive"
                    disabled={isDeleting || confirmationText !== "DELETE"}
                    className="w-full"
                  >
                    {isDeleting ? "Processing..." : "Request Account Deletion"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="mb-2">
                <strong>Need help?</strong> Contact our support team at <a href="mailto:sage_mastermind@outlook.com" className="text-red-500 hover:text-red-600">sage_mastermind@outlook.com</a>
              </p>
              <p>
                For more information about your data and privacy rights, please review our <Link href="/privacy-policy" className="text-red-500 hover:text-red-600">Privacy Policy</Link> and <Link href="/terms-conditions" className="text-red-500 hover:text-red-600">Terms & Conditions</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 