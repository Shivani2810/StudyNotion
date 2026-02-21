import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In Successfully!");
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <form onSubmit={submitHandler} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <sup className="text-red-500">*</sup>
            </label>

            <input
              type="email"
              placeholder="xyz@example.com"
              name="userEmail"
              value={formData.userEmail}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <sup className="text-red-500">*</sup>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="userPassword"
                value={formData.userPassword}
                onChange={changeHandler}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />

              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-blue-600 transition"
              >
                {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
              </span>
            </div>

            <div className="text-right mt-2">
              <Link
                to="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            SIGN IN
          </button>

        </form>

      </div>
    </div>
  );
};

export default LoginForm;