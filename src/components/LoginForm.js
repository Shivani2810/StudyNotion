import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();



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

  function submitHandler(event)
  {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("LoggedIn");
    navigate("/dashboard"); 
  }
  console.log(setIsLoggedIn);

  return (
    <div>
      <form onSubmit={submitHandler}> 

        {/* Email */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input 
            type="email"
            placeholder="xyz@example.com"
            name="userEmail"
            value={formData.userEmail}
            onChange={changeHandler}
          />
        </label>

        {/* Password */}
        <label>
          <p>Password <sup>*</sup></p>

          <div style={{ position: "relative" }}>
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="userPassword"
              value={formData.userPassword}
              onChange={changeHandler}
            />

            <span 
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: "pointer", marginLeft: "8px" }}
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>

          <Link to="#">Forgot Password?</Link>
        </label>


        <button >SIGN IN</button>

      </form>
    </div>
  );
};

export default LoginForm;