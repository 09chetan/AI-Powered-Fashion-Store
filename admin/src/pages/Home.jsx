import React from 'react'
import Nav from '../component/Nav'
import Sidebar from'../component/Sidebar'
function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25] text-white flex flex-col items-center overflow-x-hidden overflow-y-auto box-border">
      <Nav/>
      <Sidebar/>
    </div>
  )
}

export default Home