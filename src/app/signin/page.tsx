import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="min-h-screen w-full flex font-[family-name:var(--font-geist-sans)]">
      {/* Left Section - Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/tractor.jpg"
          alt="Fashion model in casual winter attire"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute top-6 left-6">
          <div className="text-2xl font-bold text-[#4F7A56]">HarvestHub</div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16">
        <div className="md:hidden mb-8">
          <div className="text-2xl font-bold text-[#4F7A56]">HarvestHub</div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome 👋</h1>
            <p className="text-gray-600">Please login here</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="robertfox@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-[#4F7A56] rounded focus:ring-[#4F7A56] text-[#4F7A56]"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#6A9572]"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4F7A56] text-white py-2 px-4 rounded-md hover:bg-[#6A9572] focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}