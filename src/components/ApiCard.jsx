
import { motion } from "framer-motion"

const ApiCard = ({ api }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-4 rounded-2xl shadow-lg border border-gray-800"
    >
      <h2 className="text-lg font-semibold text-indigo-400">{api.name}</h2>
      <p className="text-sm text-gray-400 mt-2">Category: {api.category}</p>
      <p className="text-sm text-gray-400">Auth: {api.auth}</p>
      <p className="text-sm text-gray-400">HTTPS: {api.https ? "Yes" : "No"}</p>
      <p className="text-sm text-gray-400">CORS: {api.cors}</p>
      <a
        href={api.link}
        target="_blank"
        className="inline-block mt-3 text-indigo-500 hover:underline"
      >
        Visit API
      </a>
    </motion.div>
  )
}

export default ApiCard
