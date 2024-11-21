import Link from 'next/link'
import { Home, Users, FileText, Globe, MessageSquare, Briefcase, Settings, LogOut } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-green-700">Agricorn</h1>
      </div>
      <nav className="space-y-4 p-4">
        <Link href="/seller" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/seller/customers" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <Users size={20} />
          <span>Customers</span>
        </Link>
        <Link href="/reports" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <FileText size={20} />
          <span>All Reports</span>
        </Link>
        <Link href="/geography" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <Globe size={20} />
          <span>Geography</span>
        </Link>
        <Link href="/conversations" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <MessageSquare size={20} />
          <span>Conversations</span>
        </Link>
        <Link href="/deals" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <Briefcase size={20} />
          <span>Deals</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors">
          <LogOut size={20} />
          <span>Log out</span>
        </a>
      </nav>
    </aside>
  )
}

