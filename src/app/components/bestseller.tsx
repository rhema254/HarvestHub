'use client'

import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    brand: 'Roadstar',
    name: 'Printed Cotton T-Shirt',
    price: 38.00,
    originalPrice: 49.00,
    image: '/tractor.jpg',
  },
  {
    id: 2,
    brand: 'Allen Solly',
    name: 'Women Textured Handheld Bag',
    price: 80.00,
    originalPrice: 100.00,
    image: '/tractor.jpg',
  },
  {
    id: 3,
    brand: 'Louis Philippe Sport',
    name: 'Polo Collar T-Shirt',
    price: 50.00,
    originalPrice: 55.00,
    image: '/tractor.jpg',
  },
  {
    id: 4,
    brand: 'Adidas',
    name: 'Men adi-dash Running Shoes',
    price: 60.00,
    originalPrice: 75.00,
    image: '/tractor.jpg',
  },
  {
    id: 5,
    brand: 'Trendyol',
    name: 'Floral Embroidered Maxi Dress',
    price: 35.00,
    originalPrice: 45.00,
    image: '/tractor.jpg',
  },
  {
    id: 6,
    brand: 'YK Disney',
    name: 'Girls Pink Moana Printed Dress',
    price: 80.00,
    originalPrice: 100.00,
    image: '/tractor.jpg',
  },
  {
    id: 7,
    brand: 'US Polo',
    name: 'Tailored Cotton Casual Shirt',
    price: 40.00,
    originalPrice: 50.00,
    image: '/tractor.jpg',
  },
  {
    id: 8,
    brand: 'Zyla',
    name: 'Women Sandals',
    price: 35.00,
    originalPrice: 40.00,
    image: '/tractor.jpg',
  },
]

export default function Component() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Bestseller</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-gray-200 rounded-lg p-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain object-center"
                  width={400}
                  height={400}
                />
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900">{product.brand}</h3>
                <p className="text-sm text-gray-500">{product.name}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button 
                    className="flex items-center gap-2 bg-[#4F7A56] text-white px-3 py-2 rounded-md text-sm hover:bg-[#6A9572] transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                    title='Add to cart'
                  >
                    <ShoppingCart className="h-4 w-4" />
                    
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}