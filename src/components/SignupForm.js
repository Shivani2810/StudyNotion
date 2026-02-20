import React from 'react'
import { useState } from 'react'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const SignupForm = () => {

const [formData,setFormData]=useState( {
    firstName:"",
    lastName:"",
    userEmail:"",
    userPassword:"",
    confirmPassword:""

}) 
function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div>

        {/* Student-instructor-tab */}
            <div>
                <button>Student</button>
                <buton>Instructor</buton>
            </div>

            <form>
                <div>
                    <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name "
                    value={formData.firstName} 
                    ></input>
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name "
                    value={formData.lastName} 
                    ></input>
                </label>

                </div>

                {/* Email sextion  */}

                <div>
                    <label>
                    <p>Email<sup>*</sup></p>
                    <input
                    required
                    type="email"
                    name="userEmail"
                    onChange={changeHandler}
                    placeholder="xyz@... "
                    value={formData.userEmail} 
                    ></input>
                </label>

                </div>


                <div><label>
                    <p>Password<sup>*</sup></p>
                    <input
                    required
                    type="password"
                    name="userPassword"
                    onChange={changeHandler}
                    placeholder="Enter New Password "
                    value={formData.userPassword} 
                    ></input>
                    <span 
                                  onClick={() => setShowPassword((prev) => !prev)}
                                  style={{ cursor: "pointer", marginLeft: "8px" }}
                                >
                                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                                </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                    required
                    type="password"
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Passowrd "
                    value={formData.confirmPassword} 
                    ></input>
                    <span 
                          onClick={() => setShowPassword((prev) => !prev)}
                             style={{ cursor: "pointer", marginLeft: "8px" }}
                            >
                            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                            </span>
                </label>
</div>
                
                
                
  

            </form>


    </div>
  )
}

export default SignupForm