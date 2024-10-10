import React from 'react'
import { Home } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <Home className="mx-auto h-24 w-24 text-indigo-600" />
      <h1 className="mt-4 text-4xl font-bold text-gray-900">Welcome to Rental Manager</h1>
      <p className="mt-2 text-xl text-gray-600">Manage your short-term rentals with ease</p>
      <div className="mt-8">
        <a href="/customer" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium mr-4 hover:bg-indigo-700 transition duration-300">Customer Portal</a>
        <a href="/owner" className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300">Owner Portal</a>
      </div>
    </div>
  )
}

export default HomePage