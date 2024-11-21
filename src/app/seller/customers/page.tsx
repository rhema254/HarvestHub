import { Layout } from '../../components/layout'
import { Users, MoreVertical, Star, Edit } from 'lucide-react'

const customers = [
  { name: 'Chris Evans', country: 'Romania', avatar: '/placeholder.svg?height=40&width=40' },
  { name: 'John Doe', country: 'United Kingdom', avatar: '/placeholder.svg?height=40&width=40' },
  { name: 'Gerry Harry', country: 'Romania', avatar: '/placeholder.svg?height=40&width=40' },
]

export default function Customers() {
  return (
    <Layout title="Customers">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Customer List</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
            Add Customer
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={customer.avatar} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{customer.country}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-2"><Star size={18} /></button>
                    <button className="text-blue-600 hover:text-blue-900 mr-2"><Edit size={18} /></button>
                    <button className="text-gray-600 hover:text-gray-900"><MoreVertical size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

