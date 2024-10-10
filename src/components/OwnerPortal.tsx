import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { PlusCircle } from 'lucide-react'

interface Property {
  id: number
  name: string
  location: string
  price_per_night: number
  is_available: boolean
}

interface Guest {
  id: number
  name: string
  email: string
  phone: string
}

const OwnerPortal: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [guests, setGuests] = useState<Guest[]>([])
  const [showAddProperty, setShowAddProperty] = useState(false)
  const [showAddGuest, setShowAddGuest] = useState(false)
  const [newProperty, setNewProperty] = useState({ name: '', location: '', price_per_night: 0 })
  const [newGuest, setNewGuest] = useState({ name: '', email: '', phone: '' })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProperties()
    fetchGuests()
  }, [])

  async function fetchProperties() {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
    
    if (error) {
      console.error('Error fetching properties:', error)
      setError('Failed to fetch properties. Please try again later.')
    } else {
      setProperties(data || [])
      setError(null)
    }
  }

  async function fetchGuests() {
    const { data, error } = await supabase
      .from('guests')
      .select('*')
    
    if (error) {
      console.error('Error fetching guests:', error)
      setError('Failed to fetch guests. Please try again later.')
    } else {
      setGuests(data || [])
      setError(null)
    }
  }

  async function toggleAvailability(id: number, currentStatus: boolean) {
    const { error } = await supabase
      .from('properties')
      .update({ is_available: !currentStatus })
      .eq('id', id)
    
    if (error) {
      console.error('Error updating property:', error)
      setError('Failed to update property. Please try again.')
    } else {
      fetchProperties()
      setError(null)
    }
  }

  async function addProperty() {
    const { error } = await supabase
      .from('properties')
      .insert([
        { ...newProperty, is_available: true }
      ])
    
    if (error) {
      console.error('Error adding property:', error)
      setError('Failed to add property. Please try again.')
    } else {
      fetchProperties()
      setNewProperty({ name: '', location: '', price_per_night: 0 })
      setShowAddProperty(false)
      setError(null)
    }
  }

  async function addGuest() {
    const { error } = await supabase
      .from('guests')
      .insert([newGuest])
    
    if (error) {
      console.error('Error adding guest:', error)
      setError('Failed to add guest. Please try again.')
    } else {
      fetchGuests()
      setNewGuest({ name: '', email: '', phone: '' })
      setShowAddGuest(false)
      setError(null)
    }
  }

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {/* Rest of the component remains the same */}
    </div>
  )
}

export default OwnerPortal