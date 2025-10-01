import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { useContext } from 'react'
import { adminDataContext } from '../context/AdminContext'
import { authDataContext } from '../context/AuthContext'

function Nav() {
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    let {getAdmin}=useContext(adminDataContext)
    
    const logOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", {withCredential:true})
            console.log(result.data)
            getAdmin()
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='w-full h-[70px] backdrop-blur-md bg-gray-950/90 border-b border-gray-800/50 fixed top-0 z-50 flex items-center justify-between px-8 overflow-x-hidden'>
            <div className='flex items-center justify-start gap-3 cursor-pointer group' onClick={()=>{navigate("/")}}>
                <img src={logo} alt="" className='w-[30px] transition-transform duration-300 group-hover:scale-110'/>
                <h1 className='text-2xl bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent font-bold'>
                    AI Powered Fashion Store
                </h1>
            </div>
            
            <button 
                className='px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-indigo-600/40 transition-all duration-300 hover:scale-105'
                onClick={logOut}
            >
                LogOut
            </button>
        </div>
    )
}

export default Nav