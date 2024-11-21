"use client"
import { useState } from 'react'
import { Layout } from '../../components/layout'
import { ListingCard } from '../../components/lisitng-card'
import { Plus } from 'lucide-react'

const initialListings = [
  { image: '/placeholder.svg?height=200&width=300', name: 'Field Hoe S', price: '$599', status: 'In Stock', wishlisted: 5, stock: 10 },
  { image: '/placeholder.svg?height=200&width=300', name: 'Axe 24 S Field', price: '$1,449', status: 'Sold', wishlisted: 3 },
  { image: '/placeholder.svg?height=200&width=300', name: 'Rake 23 Field', price: '$739', status: 'In Stock', wishlisted: 2, stock: 5 },
]

export default function MyListings() {
  const [listings, setListings] = useState(initialListings)

  return (
    <Layout title='My Listings'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#1F2B53]">My Listings</h1>
        <button className="bg-[#4F7A56] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#6A9572] transition-colors">
          <Plus size={20} className="mr-2" /> Add New Listing
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
    </Layout>
  )
}

