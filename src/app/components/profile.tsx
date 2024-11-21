export function Profile() {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Update Details
          </button>
        </form>
      </div>
    )
  }
  
  