'use client'

import { useRef, useState, KeyboardEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function VerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Email is required')
      return
    }

    const otpString = otp.join('')
    if (otpString.length !== 6) {
      setError('Please enter the complete verification code')
      return
    }

    const supabase = createClient()

    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: otpString,
      type: 'signup'
    })

    if (verifyError) {
      setError(verifyError.message)
      return
    }

    setShowModal(true)
  }

  const handleResendOTP = async () => {
    if (!email) return

    const supabase = createClient()
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email,
    })

    if (error) {
      setError(error.message)
    } else {
      setError('New verification code sent!')
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    router.push('/')
  }

  return (
    <div className="min-h-screen w-full flex font-[family-name:var(--font-geist-sans)]">
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/tractor.jpg"
          alt="Fashion model in geometric pattern outfit"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute top-6 left-6">
          <div className="text-2xl font-bold text-[#4F7A56]">HarvestHub</div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16">
        <div className="md:hidden mb-8">
          <div className="text-2xl font-bold text-[#4F7A56]">HarvestHub</div>
        </div>

        <Link 
          href="/login" 
          className="inline-flex items-center text-sm text-[#4F7A56] hover:text-[#6A9572] mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>
        
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">Enter OTP</h1>
            <p className="text-gray-600">
              We have shared a code to your registered email address
              <br />
              <span className="text-black">{email}</span>
            </p>
          </div>

          {error && (
            <div className="mb-4 text-red-500 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7A56] focus:border-transparent"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#4F7A56] text-white py-2 px-4 rounded-md hover:bg-[#6A9572] focus:outline-none"
            >
              Verify
            </button>

            <div className="text-center text-sm text-gray-600">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-[#4F7A56] hover:text-[#6A9572]"
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4F7A56] rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Verification Successful</h2>
              <p className="text-gray-600 mb-6">Your email has been verified successfully</p>
              <button
                onClick={handleModalClose}
                className="w-full bg-[#4F7A56] text-white py-2 px-4 rounded-md hover:bg-[#6A9572] focus:outline-none"
              >
                Continue to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}