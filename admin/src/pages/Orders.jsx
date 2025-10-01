import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { useState } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'
import { SiEbox } from "react-icons/si";

function Orders() {
  let [orders, setOrders] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(serverUrl + '/api/order/list', {}, {
        withCredentials: true
      })
      setOrders(result.data.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const result = await axios.post(serverUrl + '/api/order/status', {
        orderId,
        status: e.target.value
      }, {
        withCredentials: true
      })
      if (result.data) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950/30 to-violet-950/20 text-white overflow-x-hidden'>
      <Nav />
      <div className='w-full h-full flex items-center lg:justify-start justify-center'>
        <Sidebar />
        <div className='lg:w-[85%] md:w-[70%] h-full lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-6 py-12 ml-[100px] px-8'>
          
          <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent mb-4'>
            All Orders
          </h1>

          {
            orders.length > 0 ? (
              orders.map((order, index) => (
                <div
                  key={index}
                  className='backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 flex items-center justify-center backdrop-blur-md bg-indigo-500/10 border border-indigo-500/30 rounded-xl'>
                      <SiEbox className='w-8 h-8 text-indigo-400' />
                    </div>

                    <div className='flex flex-col gap-3'>
                      <div className='flex flex-col gap-1'>
                        {
                          order.items.map((item, idx) => (
                            <p key={idx} className='text-sm text-indigo-300'>
                              {item.name.toUpperCase()} × {item.quantity} <span className='text-violet-400'>({item.size})</span>
                              {idx !== order.items.length - 1 && ','}
                            </p>
                          ))
                        }
                      </div>

                      <div className='text-sm text-gray-400 space-y-1'>
                        <p className='text-emerald-400 font-medium'>
                          {order.address.firstName} {order.address.lastName}
                        </p>
                        <p>{order.address.street}</p>
                        <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.pinCode}</p>
                        <p className='text-indigo-400'>{order.address.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-3 lg:items-end'>
                    <div className='text-sm text-gray-400 space-y-1'>
                      <p><span className='text-gray-500'>Items:</span> {order.items.length}</p>
                      <p><span className='text-gray-500'>Method:</span> {order.paymentMethod}</p>
                      <p>
                        <span className='text-gray-500'>Payment:</span>{' '}
                        <span className={order.payment ? 'text-emerald-400' : 'text-amber-400'}>
                          {order.payment ? 'Done' : 'Pending'}
                        </span>
                      </p>
                      <p><span className='text-gray-500'>Date:</span> {new Date(order.date).toLocaleDateString()}</p>
                      <p className='text-2xl font-bold text-white mt-2'>${order.amount}</p>
                    </div>

                    <select 
                      value={order.status} 
                      className='px-4 py-2 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition cursor-pointer'
                      onChange={(e) => statusHandler(e, order._id)}
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              ))
            ) : (
              <div className='backdrop-blur-lg bg-gray-900/40 rounded-2xl border-2 border-dashed border-gray-800 p-12 text-center'>
                <p className='text-xl text-gray-500'>No Orders Available</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Orders