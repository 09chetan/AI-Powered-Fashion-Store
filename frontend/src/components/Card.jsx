import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) { // Fixed: Changed component name from 'cart' to 'Card'
  let { currency } = useContext(shopDataContext)
  let navigate = useNavigate()

  return (
    <div className='w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop-blur-lg rounded-lg hover:scale-[102%]
      flex items-start justify-start flex-col p-[10px]
      cursor-pointer border-[1px] border-[#80808049] transition-transform duration-200'
      onClick={() => navigate(`/productdetails/${id}`)}
    >
      <img src={image} alt={name} className='w-[100%] h-[80%]
        rounded-sm object-cover' />
      <div className='text-[#c3f6fa] text-[18px] py-[10px] font-medium'>
        {name}
      </div>
      <div className='text-[#f3fafa] text-[16px] font-semibold'>
        {currency}{price}
      </div>

      
    </div>
  )
}

export default Card