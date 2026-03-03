
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
    <div>
      <Navbar />
      <div className="p-6">
        <input
          type="text"
          placeholder="Search APIs..."
          className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {filteredApis.map((api, index) => (
            <ApiCard key={index} api={api} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
