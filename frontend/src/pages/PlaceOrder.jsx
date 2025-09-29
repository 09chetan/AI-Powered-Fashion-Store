// import React, { useContext, useState } from 'react'
// import { shopDataContext } from '../context/ShopContext'
// import { userDataContext } from '../context/UserContext'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// function PlaceOrder() {
//     const { getCartAmount, delivery_fee, products, cartItem, clearCart } = useContext(shopDataContext)
//     const { userData } = useContext(userDataContext)
//     const navigate = useNavigate()

//     const [method, setMethod] = useState('cod')
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: userData?.email || '',
//         street: '',
//         city: '',
//         state: '',
//         zipcode: '',
//         country: '',
//         phone: ''
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         setFormData(data => ({ ...data, [name]: value }))
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault()

//         try {
//             let orderItems = []

//             for (const items in cartItem) {
//                 for (const item in cartItem[items]) {
//                     if (cartItem[items][item] > 0) {
//                         const itemInfo = structuredClone(products.find(product => product._id === items))
//                         if (itemInfo) {
//                             itemInfo.size = item
//                             itemInfo.quantity = cartItem[items][item]
//                             orderItems.push(itemInfo)
//                         }
//                     }
//                 }
//             }

//             let orderData = {
//                 address: formData,
//                 items: orderItems,
//                 amount: getCartAmount() + delivery_fee
//             }

//             // Here you would normally send orderData to your backend
//             console.log('Order Data:', orderData)

//             // Simulate order placement
//             toast.success('Order placed successfully!')
//             await clearCart()
//             navigate('/orders')

//         } catch (error) {
//             console.log(error)
//             toast.error('Failed to place order')
//         }
//     }

//     return (
//         <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t bg-gradient-to-br from-slate-900 to-slate-800 px-4'>
//             {/* Left Side */}
//             <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//                 <div className='text-xl sm:text-2xl my-3'>
//                     <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//                 </div>

//                 <div className='flex gap-3'>
//                     <input 
//                         required 
//                         onChange={onChangeHandler} 
//                         name='firstName' 
//                         value={formData.firstName} 
//                         className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                         type="text" 
//                         placeholder='First name' 
//                     />
//                     <input 
//                         required 
//                         onChange={onChangeHandler} 
//                         name='lastName' 
//                         value={formData.lastName} 
//                         className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                         type="text" 
//                         placeholder='Last name' 
//                     />
//                 </div>

//                 <input 
//                     required 
//                     onChange={onChangeHandler} 
//                     name='email' 
//                     value={formData.email} 
//                     className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                     type="email" 
//                     placeholder='Email address' 
//                 />

//                 <input 
//                     required 
//                     onChange={onChangeHandler} 
//                     name='street' 
//                     value={formData.street} 
//                     className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                     type="text" 
//                     placeholder='Street' 
//                 />

//                 <div className='flex gap-3'>
//                     <input 
//                         required 
//                         onChange={onChangeHandler} 
//                         name='city' 
//                         value={formData.city} 
//                         className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                         type="text" 
//                         placeholder='City' 
//                     />
//                     <input 
//                         onChange={onChangeHandler} 
//                         name='state' 
//                         value={formData.state} 
//                         className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                         type="text" 
//                         placeholder='State' 
//                     />
//                 </div>

//                 <div className='flex gap-3'>
//                     <input 
//                         required 
//                         onChange={onChangeHandler} 
//                         name='zipcode' 
//                         value={formData.zipcode} 
//                         className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                         type="number" 
//                         placeholder='Zipcode' 
//                     />
//                     <input 
//                         required 
//                         onChange={onChangeHandler} 
//                         name='country' 
//                         value={formData.country} 
//                         className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                         type="text" 
//                         placeholder='Country' 
//                     />
//                 </div>

//                 <input 
//                     required 
//                     onChange={onChangeHandler} 
//                     name='phone' 
//                     value={formData.phone} 
//                     className='border border-gray-600 rounded py-1.5 px-3.5 w-full bg-gray-800 text-white' 
//                     type="number" 
//                     placeholder='Phone' 
//                 />
//             </div>

//             {/* Right Side */}
//             <div className='mt-8'>
//                 <div className='mt-8 min-w-80'>
//                     <CartTotal />
//                 </div>

//                 <div className='mt-12'>
//                     <Title text1={'PAYMENT'} text2={'METHOD'} />

//                     {/* Payment Method Selection */}
//                     <div className='flex gap-3 flex-col lg:flex-row mt-5'>
//                         <div 
//                             onClick={() => setMethod('stripe')} 
//                             className='flex items-center gap-3 border p-2 px-3 cursor-pointer bg-gray-800 border-gray-600 text-white'
//                         >
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//                             <p className='text-gray-300 text-sm font-medium mx-4'>STRIPE</p>
//                         </div>

//                         <div 
//                             onClick={() => setMethod('razorpay')} 
//                             className='flex items-center gap-3 border p-2 px-3 cursor-pointer bg-gray-800 border-gray-600 text-white'
//                         >
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//                             <p className='text-gray-300 text-sm font-medium mx-4'>RAZORPAY</p>
//                         </div>

//                         <div 
//                             onClick={() => setMethod('cod')} 
//                             className='flex items-center gap-3 border p-2 px-3 cursor-pointer bg-gray-800 border-gray-600 text-white'
//                         >
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//                             <p className='text-gray-300 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//                         </div>
//                     </div>

//                     <div className='w-full text-end mt-8'>
//                         <button 
//                             type="submit" 
//                             className='bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 transition-colors'
//                         >
//                             PLACE ORDER
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default PlaceOrder

import React, { useContext } from 'react'
import Title from '../components/Title'
import { useState } from 'react'
import CartTotal from '../components/CartTotal';
import { shopDataContext } from '../context/ShopContext';
import axios from 'axios';
import razorpay from "../assets/razorpay.jpg";
import { authDataContext } from '../context/authcontext';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  let [method, setMethod] = useState('cod');
  let navigate = useNavigate()
  const { cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(shopDataContext)
  let { serverUrl } = useContext(authDataContext)
  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(data => ({ ...data, [name]: value }))
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = []
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItem[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {
        case 'cod':
          const result = await axios.post(serverUrl + "/api/order/placeorder", orderData, { withCredentials: true })
          console.log(result.data)

          if (result.data) {
            setCartItem({})
            navigate("/order")
          } else {
            console.log(result.data.message)
          }
          break;

        default:
          break;

      }
    } catch (error) {
      console.log(error)
      // toast.error(error.message)
    }
  }




  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col md:flex-row gap-[50px] relative'>
      {/* <div className="text-white text-3xl">Place Order Page</div> */}
      <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px] '>
        <form action="" onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>
          <div className='py-[10px]'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input type="text" placeholder='First name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required
              onChange={onChangeHandler} name='firstName' value={formData.firstName}
            />

            <input type="text" placeholder='Last name' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='lastName' value={formData.lastName}
            />
          </div>

          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input type="email" placeholder='Email address'
              className='w-[100%] h-[50px] rounded-md shadow-sm 
    shadow-[#343434] bg-slate-700 placeholder:text-[white] 
    text-[18px] px-[20px]'required
              onChange={onChangeHandler} name='email' value={formData.email}
            />
          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md bg-slate-700 shadow-sm shadow-[#343434] placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='street' value={formData.street}
            />
          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md bg-slate-700 shadow-sm shadow-[#343434] placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='city' value={formData.city}
            />
            <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md bg-slate-700 shadow-sm shadow-[#343434] placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='state' value={formData.state}
            />
          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input type="text" placeholder='Pincode' className='w-[48%] h-[50px] rounded-md bg-slate-700 shadow-sm shadow-[#343434] placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='pinCode' value={formData.pinCode}
            />
            <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md bg-slate-700 shadow-sm shadow-[#343434] placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='country' value={formData.country}
            />
          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input type="text" placeholder='Phone' className='w-[100%] h-[50px] rounded-md bg-slate-700 shadow-sm shadow-[#343434] placeholder:text-[white] text-[18px] px-[20px]' required
              onChange={onChangeHandler} name='phone' value={formData.phone}
            />
          </div>
          <div>
            <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px] border-[#80808049] ml-[30px] mt-[20px]'>PLACE ORDER</button>
          </div>
        </form>
      </div>

      <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
        <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col'>
          <CartTotal />
          <div className='py-[10px]'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>
          <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px]'>


            <button onClick={() => setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}> <img src={razorpay} className='w-[100%] h-[100%] object-fill rounded-sm ' alt="" /></button>
            <button onClick={() => setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}>CASH ON DELIVERY </button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder

