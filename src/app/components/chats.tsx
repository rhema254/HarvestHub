export function Chats() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">Chats</h2>
        <p className="text-sm text-gray-500">2 unread messages</p>
        <div className="flex space-x-4 mt-4">
          <img src="/placeholder.svg?height=40&width=40" alt="Chat" className="w-10 h-10 rounded-full" />
          <img src="/placeholder.svg?height=40&width=40" alt="Chat" className="w-10 h-10 rounded-full" />
          {/* Repeat for other chat avatars */}
        </div>
      </div>
    )
  }
  
  