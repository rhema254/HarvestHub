'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const categories = [
  {
    id: 1,
    name: 'Casual Wear',
    image: '/tractor.jpg',
    href: '/category/casual',
    bgText: 'Casual'
  },
  {
    id: 2,
    name: 'Western Wear',
    image: '/tractor.jpg',
    href: '/category/western',
    bgText: 'Western'
  },
  {
    id: 3,
    name: 'Ethnic Wear',
    image: '/tractor.jpg',
    href: '/category/ethnic',
    bgText: 'Ethnic'
  },
  {
    id: 4,
    name: 'Kids Wear',
    image: '/tractor.jpg',
    href: '/category/kids',
    bgText: 'Kids'
  }
]

export default function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Shop by Categories</h2>
        </div>

        <div className="mt-12 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative min-w-full shrink-0 px-4 sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%]"
              >
                <Link href={category.href} className="group block rounded-lg p-1 border border-gray-200">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gray-100">
                        {category.bgText}
                      </span>
                    </div>
                    <Image
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 h-full object-contain object-center"
                      width={500}
                      height={100}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
                      <h3 className="text-lg font-medium">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}