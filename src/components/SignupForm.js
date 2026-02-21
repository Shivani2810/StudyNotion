import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-hot-toast"; // optional, remove if not using

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    accountType: "student", // ✅ added
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();

    // ✅ basic validation
    if (formData.userPassword !== formData.confirmPassword) {
      toast?.error?.("Passwords do not match!");
      return;
    }

    // demo only
    setIsLoggedIn(true);
    toast?.success?.("Account Created!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create your account ✨
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Choose your role and fill the details
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-5 mt-6">

          {/* Student/Instructor Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-lg w-fit mx-auto">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, accountType: "student" }))
              }
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                formData.accountType === "student"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:bg-white"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, accountType: "instructor" }))
              }
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                formData.accountType === "instructor"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 hover:bg-white"
              }`}
            >
              Instructor
            </button>
          </div>

          {/* Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                First Name <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Enter first name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Last Name <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email <sup className="text-red-500">*</sup>
            </label>
            <input
              required
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="xyz@example.com"
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="text-sm font-medium text-gray-700">
                Password <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="userPassword"
                value={formData.userPassword}
                onChange={changeHandler}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md pr-10
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Create password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-600 transition"
              >
                {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
              </button>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirm Password <sup className="text-red-500">*</sup>
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md font-semibold
                       hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;