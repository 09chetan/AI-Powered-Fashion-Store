import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    let navigate = useNavigate()
    
    return (
        <div className='w-[18%] min-h-screen backdrop-blur-lg bg-gray-900/80 border-r border-gray-800 py-16 fixed left-0 top-0'>
            <div className='flex flex-col gap-4 pt-[70px] pl-[20%] text-[15px]'>
                
                <div 
                    className='flex items-center justify-center md:justify-start gap-3 px-4 py-3 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition cursor-pointer group'
                    onClick={() => navigate('/add')}
                >
                    <IoIosAddCircleOutline className='w-5 h-5 transition-transform duration-300 group-hover:scale-110'/>
                    <p className='hidden md:block font-medium'>Add items</p>
                </div>

                <div 
                    className='flex items-center justify-center md:justify-start gap-3 px-4 py-3 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition cursor-pointer group'
                    onClick={() => navigate('/lists')}
                >
                    <FaRegListAlt className='w-5 h-5 transition-transform duration-300 group-hover:scale-110'/>
                    <p className='hidden md:block font-medium'>List items</p>
                </div>

                <div 
                    className='flex items-center justify-center md:justify-start gap-3 px-4 py-3 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition cursor-pointer group'
                    onClick={() => navigate('/orders')}
                >
                    <SiTicktick className='w-5 h-5 transition-transform duration-300 group-hover:scale-110'/>
                    <p className='hidden md:block font-medium'>View Orders</p>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar