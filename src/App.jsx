import Navbar from "./components/Navbar"
import ApiCard from "./components/ApiCard"
import { useState, useEffect } from "react"

function App() {
  const [apis, setApis] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then(res => res.json())
      .then(data => {
        setApis(data.entries)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const filteredApis = apis.filter(api =>
    api.API.toLowerCase().includes(search.toLowerCase())
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

        {loading ? (
          <p className="mt-6 text-gray-400">Loading APIs...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {filteredApis.slice(0, 60).map((api, index) => (
              <ApiCard
                key={index}
                api={{
                  name: api.API,
                  category: api.Category,
                  auth: api.Auth || "No",
                  https: api.HTTPS,
                  cors: api.Cors,
                  link: api.Link
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
