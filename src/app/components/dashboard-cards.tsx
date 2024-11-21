import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Sales</h2>
        <p className="text-2xl font-bold text-green-700">15% <ArrowUpRight className="inline-block" /></p>
        <p className="text-sm text-gray-500">Increase compared to last month</p>
        <a href="#" className="text-green-700 hover:text-green-900">Sales report &rarr;</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Lost Deals</h2>
        <p className="text-2xl font-bold text-red-700">4% <ArrowDownRight className="inline-block" /></p>
        <p className="text-sm text-gray-500">You closed 96 out of 100 deals</p>
        <a href="#" className="text-red-700 hover:text-red-900">All Deals &rarr;</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Quarter Goal</h2>
        <p className="text-2xl font-bold text-yellow-700">45%</p>
        <p className="text-sm text-gray-500">All goals</p>
        <a href="#" className="text-yellow-700 hover:text-yellow-900">All goals &rarr;</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Growth</h2>
        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
          {/* Placeholder for chart */}
          <span className="text-gray-500">Chart</span>
        </div>
      </div>
    </div>
  )
}

