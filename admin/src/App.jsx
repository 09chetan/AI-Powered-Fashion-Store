import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Home from './pages/Home'
import { useContext } from 'react';
import { adminDataContext } from './context/AdminContext';

function App() {
  
  let {adminData}=useContext(adminDataContext)
  return (
    <>
   {!adminData ? <Login/> : <>  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add/>} />
      <Route path='/lists' element={<Lists/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/login' element={<Login/>} />
     
    </Routes>
    </>
    }
    </>
      
  )
}

export default App
