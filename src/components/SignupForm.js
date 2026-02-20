import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
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
    // demo only
    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-6">

      {/* Student/Instructor */}
      <div className="flex gap-3 bg-gray-100 p-2 rounded-md w-fit">
        <button type="button" className="px-4 py-2 rounded-md bg-black text-white">
          Student
        </button>
        <button type="button" className="px-4 py-2 rounded-md bg-white text-black">
          Instructor
        </button>
      </div>

      {/* Names */}
      <div className="flex gap-3">
        <div className="w-1/2">
          <label className="text-sm font-medium">First Name *</label>
          <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            placeholder="Enter first name"
          />
        </div>

        <div className="w-1/2">
          <label className="text-sm font-medium">Last Name *</label>
          <input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            placeholder="Enter last name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email *</label>
        <input
          required
          type="email"
          name="userEmail"
          value={formData.userEmail}
          onChange={changeHandler}
          className="w-full mt-1 px-3 py-2 border rounded-md"
          placeholder="xyz@example.com"
        />
      </div>

      {/* Passwords */}
      <div className="flex gap-3">
        <div className="w-1/2 relative">
          <label className="text-sm font-medium">Password *</label>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="userPassword"
            value={formData.userPassword}
            onChange={changeHandler}
            className="w-full mt-1 px-3 py-2 border rounded-md pr-10"
            placeholder="Create password"
          />
          <span
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-9 cursor-pointer"
          >
            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
          </span>
        </div>

        <div className="w-1/2">
          <label className="text-sm font-medium">Confirm Password *</label>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            className="w-full mt-1 px-3 py-2 border rounded-md"
            placeholder="Confirm password"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm; 