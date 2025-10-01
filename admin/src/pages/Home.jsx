import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950/30 to-violet-950/20 text-white flex flex-col items-center overflow-x-hidden">
      <Nav/>
      <Sidebar/>
      
      <div className="ml-[18%] w-[82%] min-h-screen pt-[70px] flex items-center justify-center">
        <div className="backdrop-blur-xl bg-gray-900/60 rounded-3xl border border-gray-800 p-12 max-w-2xl mx-auto shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent mb-6 text-center">
            Welcome to Admin Panel
          </h1>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            Manage your fashion store with AI-powered tools. Navigate through the sidebar to add products, view listings, or manage orders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home