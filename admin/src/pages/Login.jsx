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
  let { serverUrl } = useContext(authDataContext);
  let { getAdmin } = useContext(adminDataContext);

  let navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      getAdmin();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-950 via-indigo-950/30 to-violet-950/20 text-white flex flex-col items-center justify-center px-4">
      
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent mb-3">
          Admin Login
        </h1>
        <p className="text-base md:text-lg text-gray-400">
          Welcome to OneCart Fashion Store
        </p>
      </div>

      {/* Login Card */}
      <div className="max-w-md w-full backdrop-blur-xl bg-gray-900/60 border border-gray-800 rounded-3xl shadow-2xl p-8">
        <form onSubmit={AdminLogin} className="w-full flex flex-col gap-6">
          
          {/* Email Input */}
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition"
              placeholder="admin@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input with Eye Toggle */}
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {show ? (
                <IoEyeOff
                  className="w-5 h-5 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-400 transition"
                  onClick={() => setShow(false)}
                />
              ) : (
                <IoEye
                  className="w-5 h-5 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-400 transition"
                  onClick={() => setShow(true)}
                />
              )}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-indigo-600/40 transition-all duration-300 hover:scale-105 active:scale-95 mt-2"
          >
            Login to Dashboard
          </button>
        </form>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-500 mt-8 text-center">
        Secure admin access only
      </p>
    </div>
  );
}

export default Login;