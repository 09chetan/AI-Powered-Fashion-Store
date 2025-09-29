import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/authcontext'
import { userDataContext } from '../context/UserContext'
import Title from '../components/Title'
import axios from 'axios'

function Orders() {
    const { currency } = useContext(shopDataContext)
    const { serverUrl } = useContext(authDataContext)
    const { userData } = useContext(userDataContext)
    const [orderData, setOrderData] = useState([])

    const loadOrderData = async () => {
        try {
            if (!userData) {
                return
            }

            const response = await axios.get(serverUrl + '/api/order/userorders', { 
                withCredentials: true 
            })
            
            if (response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse())
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [userData])

    return (
        <div className='border-t pt-16 min-h-screen bg-gradient-to-br from-slate-900 to-slate-800'>
            <div className='text-2xl px-4'>
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>

            <div className='px-4'>
                {orderData.length === 0 ? (
                    <div className='text-center py-20'>
                        <div className='text-gray-400 text-xl mb-4'>No orders found</div>
                        <p className='text-gray-500'>Start shopping to see your orders here!</p>
                    </div>
                ) : (
                    orderData.map((item, index) => (
                        <div key={index} className='py-4 border-t border-b border-gray-600 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20 object-cover rounded' src={item.image[0]} alt="" />
                                <div>
                                    <p className='sm:text-base font-medium text-white'>{item.name}</p>
                                    <div className='flex items-center gap-3 mt-1 text-base text-gray-300'>
                                        <p>{currency}{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size}</p>
                                    </div>
                                    <p className='mt-1 text-gray-400'>Date: <span className='text-gray-300'>{new Date(item.date).toDateString()}</span></p>
                                    <p className='mt-1 text-gray-400'>Payment: <span className='text-gray-300'>{item.paymentMethod}</span></p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className='text-sm md:text-base text-white'>{item.status}</p>
                                </div>
                                <button 
                                    onClick={loadOrderData} 
                                    className='border px-4 py-2 text-sm font-medium rounded-sm bg-gray-700 text-white hover:bg-gray-600 transition-colors'
                                >
                                    Track Order
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Orders