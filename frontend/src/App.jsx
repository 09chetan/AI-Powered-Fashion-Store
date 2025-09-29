
// import './App.css'
// import Login from './pages/Login'
// import Home from './pages/Home'
// import Registration from './pages/Registration'
// import Nav from './components/Nav'
// import { useContext } from 'react'
// import { userDataContext } from './context/UserContext'
// import About from './pages/About'
// import Collections from './pages/Collections'
// import Product from './pages/Product'
// import Contact from './pages/Contact'
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import ProductDetails from './pages/ProductDetails'
// import Cart from './pages/Cart'
// import PlaceOrder from './pages/PlaceOrder'
// import Order from './pages/Order'




// function App() {
//   let { userData } = useContext(userDataContext);
//   return (

//     <>
//       {/* {userData && <Nav/>} */}
//       <Nav />

//       <Routes>

//         <Route path='/login'
//           element={
//             userData ?
//               (<Navigate to={location.state?.from || "/"} />)
//               : (<Login />)
//           }
//         />

//         <Route path='/signup'
//           element={
//             userData ?
//               (<Navigate to={location.state?.from || "/"} />)
//               : (<Registration />)
//           }
//         />

//         <Route path='/' element={<Home />} />

//         <Route path='/about'
//           element={userData ? <About /> : <Navigate to="/about" state={{ from: location.pathname }} />} />

//         <Route path='/collection'
//           element={userData ? <Collections /> : <Navigate to="/login" state={{ from: location.pathname }} />} />

//         <Route path='/product'
//           element={userData ? <Product /> : <Navigate to="/login" state={{ from: location.pathname }} />} />
//         <Route path='/contact'
//           element={userData ? <Contact /> : <Navigate to="/login"
//             state={{ from: location.pathname }} />} />

//             <Route path='/productdetails/:productId'
//           element={userData ? <ProductDetails /> : <Navigate to="/login"
//             state={{ from: location.pathname }} />} />

//             <Route path='/cart'
//           element={userData ? <Cart/> : <Navigate to="/login"
//             state={{ from: location.pathname }} />} />

//              <Route path='/placeorder'
//           element={userData ? <PlaceOrder/> : <Navigate to="/login"
//             state={{ from: location.pathname }} />} />


//             {/* <Route path='/placeorder' element={<PlaceOrder />} /> */}

//             <Route path='/order'
//           element={userData ? <Order/> : <Navigate to="/login"
//             state={{ from: location.pathname }} />} />

//             {/* <Route path='/order' element={<Order />} /> */}


            
//       </Routes>
//     </>
//   )
// }

// export default App


import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Nav from './components/Nav'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Ai from './components/Ai'

function App() {
  const { userData } = useContext(userDataContext);
  const location = useLocation();  // ✅ fix: get location properly

  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/login"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"} />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/signup"
          element={
            userData ? (
              <Navigate to={location.state?.from || "/"} />
            ) : (
              <Registration />
            )
          }
        />

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            userData ? <About /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/collection"
          element={
            userData ? <Collections /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/product"
          element={
            userData ? <Product /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/contact"
          element={
            userData ? <Contact /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/productdetails/:productId"
          element={
            userData ? <ProductDetails /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/cart"
          element={
            userData ? <Cart /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/placeorder"
          element={
            userData ? <PlaceOrder /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />

        <Route
          path="/order"
          element={
            userData ? <Order /> : <Navigate to="/login" state={{ from: location.pathname }} />
          }
        />
      </Routes>
      <Ai/>
    </>
  );
}

export default App;
