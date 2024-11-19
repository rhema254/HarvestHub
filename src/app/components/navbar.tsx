'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, Heart, Search, ShoppingBag, User, LogOut } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

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
          
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                onBlur={() => setTimeout(() => setIsProfileOpen(false), 200)}
                className="flex items-center gap-2 rounded-full bg-[#4F7A56] p-2 text-white hover:bg-[#6A9572]"
              >
                <User className="h-5 w-5" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border bg-white py-2 shadow-lg">
                  <div className="px-4 py-2 text-sm font-medium border-b">
                    {user.email}
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:text-[#6A9572]"
                  >
                    Profile Settings
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-sm hover:text-[#6A9572]"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-[#4F7A56] px-4 py-2 text-sm font-medium text-white hover:bg-[#6A9572]"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}