import { ReactNode } from 'react'
import { Sidebar } from '../components/sidebar-dashboard'
import { Search } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
  title: string
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-green-700 shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

