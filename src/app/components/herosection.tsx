import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
    return (
      <section className="relative h-screen overflow-hidden bg-gray-50">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none">
          <span className="text-[20vw] font-bold leading-none text-gray-100">
            BEST
          </span>
        </div>
  
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 className="text-xl font-medium text-gray-600">
                Classic Exclusive
              </h2>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Premium Tractors for Every Farm
              </h1>
              <p className="mt-4 text-xl font-medium text-gray-900">
              UP TO on <span className='bg-[#4F7A56] text-white rounded-sm px-2 py-1'> 40% OFF</span> Selected Models – Limited Time Offer!
              
              </p>
              <div className="mt-12">
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-2 rounded-md bg-[#4F7A56]  px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6A9572]"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
  
            <div className="relative max-w-md mx-auto lg:max-w-full">
              <div className="relative overflow-hidden rounded-lg bg-white p-2 shadow-xl">
                <Image
                  src="/tractor.jpg"
                  alt="a tractor"
                  className="object-cover object-center"
                  width={800}
                  height={800}
                  priority
                />
              </div>
              <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border-8 border-white" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  