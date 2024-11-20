import { MapPin, Phone } from 'lucide-react'
import Navbar from '../components/navbar'

const dealerData = [
  {
    name: "CMC (New Holland Dealer)",
    locations: [
      { city: "Nairobi", phone: "722283433", address: "Lusaka Rd" },
      { city: "Nakuru", phone: "722316821", address: "Nakuru Kisumu Rd" },
      { city: "Nanyuki/Meru", phone: "727443226", address: "Sagana Rd" },
      { city: "Eldoret/Kitale", phone: "723256074", address: "Eldoret Kisumu Rd" },
      { city: "Kisumu", phone: "722540558", address: "Obote Rd" },
      { city: "Mombasa", phone: "720661972", address: "Archbishop Makarios Rd, Mombasa" },
    ],
  },
  {
    name: "Mascor (John Deere)",
    locations: [
      { city: "Eldoret", phone: "254 207 602 298", address: "Uganda Rd" },
      { city: "Kisumu", phone: "254 207 602 294", address: "Obote Road, Kisumu" },
      { city: "Nakuru", phone: "254 207 602 288", address: "Old Nairobi Road, Nakuru" },
      { city: "Narok", phone: "254 720 935 034", address: "" },
    ],
  },
  {
    name: "CFAO Motors (Authorised Case IH dealer)",
    locations: [
      { city: "Nakuru", phone: "207604121", address: "Town East, George Morara Rd, Nakuru" },
      { city: "Kisumu", phone: "719029707", address: "" },
      { city: "Nanyuki", phone: "0719 029462", address: "Kenyatta Rd" },
    ],
  },
  {
    name: "FMD (Massey Ferguson dealership)",
    locations: [
      { city: "Nakuru", phone: "722205538", address: "Town East, Biashara George Morara Ave Nakuru, Kiambu" },
      { city: "Eldoret", phone: "727509018", address: "Lima Hse Kapseret, Kipkenyo, Kenyatta ave, Eldoret" },
    ],
  },
]

export default function DealerContactPage() {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Our Dealers</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {dealerData.map((dealer, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{dealer.name}</h3>
                <ul className="space-y-4">
                  {dealer.locations.map((location, locIndex) => (
                    <li key={locIndex} className="text-sm">
                      <h4 className="font-semibold text-gray-700 mb-1">{location.city}</h4>
                      <div className="flex items-center text-gray-500 mb-1">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{location.phone}</span>
                      </div>
                      {location.address && (
                        <div className="flex items-start text-gray-500">
                          <MapPin className="h-4 w-4 mr-2 mt-1" />
                          <span>{location.address}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}