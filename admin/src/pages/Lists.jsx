import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import { useEffect } from 'react'
import axios from 'axios'

function Lists() {
  let [list, setList] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const fetchList = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list")
      setList(result.data)
      console.log(result.data);
    } catch (error) {
      console.log(error)
    }
  }

  const removelist = async (id) => {
    try {
      let result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, {withCredentials:true})
      
      if(result.data){
        fetchList()
      } else {
        console.log("Failed to remove Product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950/30 to-violet-950/20 text-white overflow-x-hidden'>
      <Nav />
      <div className='w-full h-full flex items-center justify-start'>
        <Sidebar />
        <div className='w-[82%] h-full lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-6 py-12 ml-[100px] px-8'>
          
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4'>
            All Listed Products
          </h1>

          {
            list?.length > 0 ? (
              list.map((item, index) => (
                <div 
                  key={index}
                  className='backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 p-4 md:p-6 flex items-center justify-between gap-4 group'
                >
                  <div className='flex items-center gap-4 md:gap-6 flex-1'>
                    <img 
                      src={item.image1} 
                      className='w-20 h-20 md:w-28 md:h-28 rounded-xl object-cover border-2 border-gray-700 group-hover:border-indigo-500/50 transition-all duration-300' 
                      alt={item.name} 
                    />

                    <div className='flex flex-col gap-2'>
                      <h3 className='text-base md:text-xl font-semibold text-indigo-300'>
                        {item.name}
                      </h3>
                      <div className='flex items-center gap-3 flex-wrap'>
                        <span className='inline-flex items-center backdrop-blur-md bg-indigo-500/10 border border-indigo-500/30 rounded-full px-3 py-1 text-xs text-indigo-300'>
                          {item.category}
                        </span>
                        <span className='text-lg md:text-xl font-bold text-emerald-400'>
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button 
                    className='w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 active:scale-95'
                    onClick={() => removelist(item._id)}
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <div className='backdrop-blur-lg bg-gray-900/40 rounded-2xl border-2 border-dashed border-gray-800 p-12 text-center'>
                <p className='text-xl text-gray-500'>No Products Available</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Lists