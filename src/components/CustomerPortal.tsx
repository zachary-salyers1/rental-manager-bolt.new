import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

const CustomerPortal: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProperties()
  }, [])

  async function fetchProperties() {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('is_available', true)
    
    if (error) {
      console.error('Error fetching properties:', error)
      setError('Failed to fetch properties. Please try again later.')
    } else {
      setProperties(data || [])
      setError(null)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded-lg shadow">
            <img src={property.image_url} alt={property.name} className="w-full h-48 object-cover rounded-md mb-2" />
            <h3 className="text-xl font-semibold">{property.name}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-indigo-600 font-bold mt-2">${property.price_per_night} / night</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerPortal