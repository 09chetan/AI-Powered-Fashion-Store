import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authcontext from './context/authcontext.jsx'
import UserContext from './context/UserContext.jsx'; // adjust the path
import ShopContext from './context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authcontext>
    <UserContext>
      <ShopContext>
    <App />
    </ShopContext>
    </UserContext>
   </Authcontext>
  </BrowserRouter>
)

