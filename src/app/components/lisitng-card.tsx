import Image from 'next/image'
import { Heart, DollarSign, Package } from 'lucide-react'

interface ListingCardProps {
  image: string
  name: string
  price: string
  status: 'In Stock' | 'Sold' | 'Out of Stock'
  wishlisted: number
  stock?: number
}

export function ListingCard({ image, name, price, status, wishlisted, stock }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#4F7A56] font-semibold flex items-center">
            <DollarSign size={16} className="mr-1" /> {price}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === 'In Stock' ? 'bg-green-100 text-green-800' :
            status === 'Sold' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {status}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <Heart size={16} className="mr-1 text-[#F47E61]" /> {wishlisted} wishlisted
          </span>
          {stock !== undefined && (
            <span className="flex items-center">
              <Package size={16} className="mr-1" /> {stock} in stock
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

