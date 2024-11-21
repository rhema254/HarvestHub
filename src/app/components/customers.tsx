import { MoreVertical, Star, Edit } from 'lucide-react'

export function Customers() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700">Customers</h2>
      <div className="space-y-4 mt-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="Customer" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-gray-700">Chris Evans</p>
              <p className="text-sm text-gray-500">Romania</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Star size={20} className="text-yellow-500" />
            <Edit size={20} className="text-gray-500" />
            <MoreVertical size={20} className="text-gray-500" />
          </div>
        </div>
        {/* Repeat for other customers */}
      </div>
    </div>
  )
}

