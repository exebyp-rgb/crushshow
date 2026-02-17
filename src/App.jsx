import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Crush Show
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Vite + React + Base44 SDK
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Count is {count}
          </button>
          <p className="text-sm text-gray-500">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
