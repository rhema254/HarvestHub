'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Heart, Search, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false)

  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex text-[#4F7A56] items-center text-xl font-bold">
          <strong className="text-2xl">H</strong> HarvestHub
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm hover:text-[#6A9572]">
            Home
          </Link>
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm hover:text-[#6A9572]"
              onClick={() => setIsShopOpen(!isShopOpen)}
              onBlur={() => setTimeout(() => setIsShopOpen(false), 200)}
            >
              Shop
              <ChevronDown className="h-4 w-4" />
            </button>
            {isShopOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border bg-white py-2 shadow-lg">
                <Link
                  href="/shop/category1"
                  className="block px-4 py-2 text-sm hover:text-[#6A9572]"
                >
                  Category 1
                </Link>
                <Link
                  href="/shop/category2"
                  className="block px-4 py-2 text-sm hover:text-[#6A9572]"
                >
                  Category 2
                </Link>
                <Link
                  href="/shop/category3"
                  className="block px-4 py-2 text-sm hover:text-[#6A9572]"
                >
                  Category 3
                </Link>
              </div>
            )}
          </div>
          <Link href="/our-story" className="text-sm hover:text-[#6A9572]">
            Our Story
          </Link>
          <Link href="/blog" className="text-sm hover:text-[#6A9572]">
            Blog
          </Link>
          <Link href="/contact" className="text-sm hover:text-[#6A9572]">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-[#6A9572]">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
          <button className="hover:text-[#6A9572]">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </button>
          <button className="hover:text-[#6A9572]">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </button>
          <Link
            href="/login"
            className="rounded-md bg-[#4F7A56] px-4 py-2 text-sm font-medium text-white hover:bg-[#6A9572]"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}