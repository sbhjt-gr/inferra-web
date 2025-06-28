import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      )
    }

    const deletionToken = generateDeletionToken()
    const expiryTime = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    try {
      await sendDeletionConfirmationEmail(email, deletionToken)
      
      return NextResponse.json(
        { 
          message: 'Account deletion request received. Check your email for confirmation instructions.',
          status: 'pending'
        },
        { status: 200 }
      )
    } catch (emailError) {
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again.' },
        { status: 500 }
      )
    }

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

function generateDeletionToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) +
         Date.now().toString(36)
}

async function sendDeletionConfirmationEmail(email: string, token: string) {
  const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourapp.com'}/confirm-deletion?token=${token}&email=${encodeURIComponent(email)}`
  
  const emailTemplate = `
    <h2>Account Deletion Request - Inferra</h2>
    <p>We received a request to delete your Inferra account associated with this email address.</p>
    
    <p><strong>Important:</strong> This action is permanent and cannot be undone.</p>
    
    <h3>What will be deleted:</h3>
    <ul>
      <li>Your account profile and authentication information</li>
      <li>Email address and login credentials</li>
      <li>Account preferences and settings</li>
      <li>Cloud-stored user data and configurations</li>
      <li>Authentication history and security logs</li>
    </ul>
    
    <h3>What remains on your device:</h3>
    <ul>
      <li>Downloaded AI models stored locally</li>
      <li>Chat history and conversations</li>
      <li>App preferences in device storage</li>
    </ul>
    <p>To completely remove all data, uninstall the app after account deletion.</p>
    
    <p><strong>If you requested this deletion:</strong></p>
    <p>Click the link below to confirm account deletion. This link expires in 24 hours.</p>
    <p><a href="${confirmationUrl}" style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Confirm Account Deletion</a></p>
    
    <p><strong>If you did not request this:</strong></p>
    <p>Your account is safe. No action is required. This link will expire automatically.</p>
    
    <p>For questions or concerns, contact us at sage_mastermind@outlook.com</p>
    
    <hr>
    <p style="font-size: 12px; color: #666;">
      This email was sent from Inferra Account Deletion System. 
      Request received at ${new Date().toISOString()}.
    </p>
  `

  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve()
  }

  throw new Error('Email service not configured. In production, implement your email service here.')
} 