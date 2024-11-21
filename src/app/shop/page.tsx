import { Sidebar } from '../components/sidebar-shop'
import { ProductCard } from '../components/product-card'
import { SortDropdown } from '../components/sort-dropdown'
import Navbar from '../components/navbar'

const products = [
  { image: '/tractor.jpg', name: 'Field Hoe S', price: '$599', brand: 'Deere', location: 'Kigali,Rwanda' },
  { image: '/tractor.jpg', name: 'Axe 24 S Field', price: '$1,449', brand: 'Deere', location: 'Edinburg,Scotland' },
  { image: '/tractor.jpg', name: 'Rake 23 Field', price: '$739', brand: 'Deere', location: 'California,USA' },
  { image: '/tractor.jpg', name: 'Field Rake 35S', price: '$186', brand: 'Mahindra', location: 'HongKong,China' },
  { image: '/tractor.jpg', name: 'Field Tractor 56 PRO', price: '$98', brand: 'Mahindra', location: 'Lagos,Nigeria' },
  { image: '/tractor.jpg', name: 'Hoe Field 334S', price: '$739', brand: 'Mahindra', location: 'Bujumbura,Burundi' },
]

export default function Page() {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
    <Navbar/ >
    <div className="flex ">
      <Sidebar />
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <SortDropdown />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
    </div>
  )
}

