import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Logo from "../assets/logo.png";
import google from "../assets/google.png";
import { authDataContext } from "../context/authcontext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase.js";
// import { getCurrentUser } from "../../../backend/controller/userController.js";
import { userDataContext } from "../context/UserContext.jsx"; // adjust path if needed



function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {userData,setUserData}=useContext(userDataContext);
  let { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/registration`, // template literal avoids accidental double slashes
        { name, email, password },
        { withCredentials: true },
       
      );

      console.log(result.data)
       getCurrentUser(),
        navigate("/")
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Backend message:", error.response.data.message);
      } else {
        console.log(error.message);
      }
    }

  }

  // const googleSignup = async () => {
  //   try {
  //     const response = await signInWithPopup(auth, provider)
  //     // console.log(response)
  //     let user = response.user
  //     let name = user.displayName
  //     let email = user.email

  //     const result = await axios.post(serverUrl + "/api/auth/googlelogin", {
  //       name,
  //       email
  //     }, {
  //       withCredentials: true
  //     })
  //     console.log(result.data)


  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

//   const googleSignup = async () => {
//   try {
//     const response = await signInWithPopup(auth, provider);
    

//     const result = await axios.post(
//       serverUrl + "/api/auth/googlelogin",
//       { withCredentials: true }
//     );

//     console.log(result.data);
//   } catch (error) {
//     console.log(error);
//   }
// };


const googleSignup = async () => {
  try {
    const response = await signInWithPopup(auth, provider);

    const idToken = await response.user.getIdToken();
    const name = response.user.displayName;
    const email = response.user.email;

    const result = await axios.post(
      `${serverUrl}/api/auth/googlelogin`,
      { token: idToken, name, email }, // send token + name/email
      { withCredentials: true }
    );
   
    console.log("Backend response:", result.data);
     await getCurrentUser();
     navigate("/");
  } catch (error) {
    if (error.response && error.response.data) {
      console.log("Google login backend error:", error.response.data.message);
    } else {
      console.log("Google login error:", error.message);
    }
  }
};



  return (
    <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25] text-white flex flex-col items-center overflow-x-hidden overflow-y-auto box-border">

      {/* Header */}
      <div
        className="w-full max-w-screen-xl h-[80px] flex items-center justify-start px-6 gap-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-10" src={Logo} alt="Logo" />
        <h1 className="text-[22px] font-sans">AI Powered Fashion Store</h1>
      </div>

      {/* Title Section */}
      <div className="w-full h-[120px] flex flex-col items-center justify-center gap-2 text-center">
        <span className="text-[28px] font-semibold">Registration Page</span>
        <span className="text-[16px] text-gray-300">
          Welcome to AI Powered Fashion Store
        </span>
      </div>

      {/* Registration Card */}
      <div className="max-w-[600px] w-[90%] min-h-[500px] bg-[#00000040] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center p-6">
        <form onSubmit={handlesignup} className="w-full flex flex-col items-center justify-start gap-6">

          {/* Google Signup */}
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-3 cursor-pointer text-sm font-medium hover:bg-[#365157] transition-all" onClick={googleSignup}>
            <img src={google} alt="Google" className="w-5" />
            Registration with Google
          </div>

          {/* Divider */}
          <div className="w-full flex items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="w-[40%] h-px bg-[#96969635]"></div> OR{" "}
            <div className="w-[40%] h-px bg-[#96969635]"></div>
          </div>

          {/* Input Fields */}
          <div className="w-[90%] flex flex-col items-center justify-center gap-4 relative">
            <input
              type="text"
              className="w-full h-[50px] border-2 border-[#96969635] rounded-lg shadow bg-transparent placeholder-[#ffffffc7] px-5 font-semibold focus:outline-none focus:border-[#6060f5]"
              placeholder="Enter Username"
              required
              onChange={(e) => setName(e.target.value)} value={name}
            />
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[#96969635] rounded-lg shadow bg-transparent placeholder-[#ffffffc7] px-5 font-semibold focus:outline-none focus:border-[#6060f5]"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)} value={email}
            />

            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-[50px] border-2 border-[#96969635] rounded-lg shadow bg-transparent placeholder-[#ffffffc7] px-5 font-semibold focus:outline-none focus:border-[#6060f5]"
                placeholder="Enter Password"
                required
                onChange={(e) => setPassword(e.target.value)} value={password}
              />

              {/* Toggle Eye Icon */}
              {showPassword ? (
                <IoEyeOff
                  className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoEye
                  className="w-[22px] h-[22px] cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            {/* Button */}
            <button className="w-full h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-4 text-[17px] font-semibold hover:bg-[#4d4df0] transition-all">
              Create Account
            </button>

            {/* Redirect to Login */}
            <p className="text-sm text-gray-300">
              Already have an account?{" "}
              <span
                className="text-[#5555f6cf] font-semibold cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
