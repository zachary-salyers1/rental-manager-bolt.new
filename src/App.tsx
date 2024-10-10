import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home, User, Key } from 'lucide-react'
import CustomerPortal from './components/CustomerPortal'
import OwnerPortal from './components/OwnerPortal'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <Home className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">Rental Manager</span>
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/customer" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                  <User className="inline-block mr-1" size={18} />
                  Customer Portal
                </Link>
                <Link to="/owner" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                  <Key className="inline-block mr-1" size={18} />
                  Owner Portal
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customer" element={<CustomerPortal />} />
            <Route path="/owner" element={<OwnerPortal />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App