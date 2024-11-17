'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 120,
    hours: 18,
    minutes: 15,
    seconds: 10
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium">Deals of the Month</h2>
              <p className="text-gray-600 max-w-lg">
                It is a long established fact that a reader will be distracted by the readable content
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                a more-or-less normal distribution of letters
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F7A56] text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative aspect-[5/5] w-full">
            <Image
              src="/tractor.jpg"
              alt="Deal of the month product"
              fill
              className="object-contain rounded-lg"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-transparent to-red-500/20 rounded-lg"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}