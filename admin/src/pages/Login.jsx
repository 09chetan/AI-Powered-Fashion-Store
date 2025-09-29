import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";


function Login() {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {serverUrl}=useContext(authDataContext)
  let {adminData,getAdmin}=useContext(adminDataContext)

  let navigate=useNavigate()
    const AdminLogin=async(e)=>{
      e.preventDefault();
      try {
        const result=await axios.post(serverUrl+'/api/auth/adminlogin',{email,password},{
          withCredentials:true

        })
        console.log(result.data)
        getAdmin()
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25] text-white flex flex-col items-center justify-center">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-[28px] font-semibold">Login Page</h1>
        <p className="text-[16px] text-gray-300">
          Welcome to OneCart, Apply to Admin Login
        </p>
      </div>

      {/* Login Card */}
      <div className="max-w-[400px] w-[90%] bg-[#00000040] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg p-6">
        <form
          onSubmit={AdminLogin}
          className="w-full flex flex-col gap-6"
        >
          {/* Email Input */}
          <input
            type="email"
            className="w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-gray-400 px-5 font-medium focus:outline-none focus:border-[#6060f5]"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input with Eye Toggle */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              className="w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-gray-400 px-5 font-medium focus:outline-none focus:border-[#6060f5]"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {setShow ? (
              <IoEyeOff
                className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IoEye
                className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                onClick={() => setShow(true)}
              />
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[50px] bg-[#6060f5] rounded-lg text-[17px] font-semibold hover:bg-[#4d4df0] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState, useContext } from "react";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import axios from "axios";
// import { authDataContext } from "../context/AuthContext";

// function Login() {
//   let [show, setShow] = useState(false);
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let { serverUrl } = useContext(authDataContext);

//   const AdminLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // First login to get session / token
//       await axios.post(
//         serverUrl + "/api/auth/adminlogin",
//         { email, password },
//         { withCredentials: true }
//       );

//       // Then fetch admin details (email + role)
//       const adminRes = await axios.get(serverUrl + "/api/user/getadmin", {
//         withCredentials: true,
//       });

//       console.log("Logged in admin:", adminRes.data); // ✅ will show { email, role }
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25] text-white flex flex-col items-center justify-center">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-[28px] font-semibold">Login Page</h1>
//         <p className="text-[16px] text-gray-300">
//           Welcome to OneCart, Apply to Admin Login
//         </p>
//       </div>

//       {/* Login Card */}
//       <div className="max-w-[400px] w-[90%] bg-[#00000040] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg p-6">
//         <form onSubmit={AdminLogin} className="w-full flex flex-col gap-6">
//           {/* Email Input */}
//           <input
//             type="email"
//             className="w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-gray-400 px-5 font-medium focus:outline-none focus:border-[#6060f5]"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {/* Password Input with Eye Toggle */}
//           <div className="relative">
//             <input
//               type={show ? "text" : "password"}
//               className="w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-gray-400 px-5 font-medium focus:outline-none focus:border-[#6060f5]"
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {show ? (
//               <IoEyeOff
//                 className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
//                 onClick={() => setShow(false)}
//               />
//             ) : (
//               <IoEye
//                 className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
//                 onClick={() => setShow(true)}
//               />
//             )}
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full h-[50px] bg-[#6060f5] rounded-lg text-[17px] font-semibold hover:bg-[#4d4df0] transition-all"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState, useContext } from "react";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import axios from "axios";
// import { authDataContext } from "../context/AuthContext";
// import { adminDataContext } from "../context/AdminContext"; // ✅ use AdminContext
// import { useNavigate } from "react-router-dom";

// function Login() {
//   let [show, setShow] = useState(false);
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let { serverUrl } = useContext(authDataContext);
//   let { getAdmin } = useContext(adminDataContext); // ✅ access getAdmin
//   let {adminData}=useContext(adminDataContext)

//   let navigate=useNavigate()
//   const AdminLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Step 1: Login with credentials (sets cookie/session)
//       await axios.post(
//         serverUrl + "/api/auth/adminlogin",
//         { email, password },
//         { withCredentials: true }
//       );

//       // Step 2: Fetch admin details (email + role) from AdminContext
//       const adminInfo = await getAdmin();

//       console.log("Logged in admin:", adminInfo); // ✅ same output as AdminContext screenshot
//     } catch (error) {
//       console.log(error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25] text-white flex flex-col items-center justify-center">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-[28px] font-semibold">Login Page</h1>
//         <p className="text-[16px] text-gray-300">
//           Welcome to OneCart, Apply to Admin Login
//         </p>
//       </div>

//       {/* Login Card */}
//       <div className="max-w-[400px] w-[90%] bg-[#00000040] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg p-6">
//         <form onSubmit={AdminLogin} className="w-full flex flex-col gap-6">
//           {/* Email Input */}
//           <input
//             type="email"
//             className="w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-gray-400 px-5 font-medium focus:outline-none focus:border-[#6060f5]"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {/* Password Input with Eye Toggle */}
//           <div className="relative">
//             <input
//               type={show ? "text" : "password"}
//               className="w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent placeholder-gray-400 px-5 font-medium focus:outline-none focus:border-[#6060f5]"
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {show ? (
//               <IoEyeOff
//                 className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
//                 onClick={() => setShow(false)}
//               />
//             ) : (
//               <IoEye
//                 className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
//                 onClick={() => setShow(true)}
//               />
//             )}
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full h-[50px] bg-[#6060f5] rounded-lg text-[17px] font-semibold hover:bg-[#4d4df0] transition-all"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
