import { Sidebar } from './sidebar'
import { ListingCard } from './listing-card'
import { Profile } from './profile'

const listings = [
  { image: '/placeholder.svg?height=200&width=300', name: 'Field Hoe S', price: '$599', status: 'In Stock', wishlisted: 5 },
  { image: '/placeholder.svg?height=200&width=300', name: 'Axe 24 S Field', price: '$1,449', status: 'Sold', wishlisted: 3 },
  // Add more listings as needed
]

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">My Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((listing, index) => (
              <ListingCard key={index} {...listing} />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <Profile />
        </section>
        {/* Add more sections for Chats and Other Listings as needed */}
      </main>
    </div>
  )
}

