import Navbar from "./components/Navbar"
import ApiCard from "./components/ApiCard"
import { apis } from "./data/apis"
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("")

  const filteredApis = apis.filter(api =>
    api.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Discover Free Public APIs
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A modern API directory platform built by Kanav Chauhan.
          Explore free APIs for developers with clean UI and smooth experience.
        </p>
      </div>

      {/* Search */}
      <div className="px-6 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search APIs..."
          className="w-full p-4 rounded-2xl bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* API Count */}
      <div className="text-center mt-6 text-gray-400">
        {filteredApis.length} APIs Available
      </div>

      {/* API Grid */}
      <div className="grid md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
        {filteredApis.map((api, index) => (
          <ApiCard key={index} api={api} />
        ))}
      </div>
    </div>
  )
}

export default App
