import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {

    let isLoggedIn= props.isLoggedIn;
    let setLoggedIn=props.setLoggedIn
  return (
    <div className="flex justify-evenly"> 

      <Link to="/">
        <img src={Logo} alt="Logo" width={162} height={32} loadind ="lazy"/>
      </Link>

     <div >
      <nav>
        <div className="bg-red-200 mx-auto ">
        <ul className="flex  bg-gray-200 gap-10" >
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/'>Contact</Link>
            </li>
        </ul>
        </div>
      </nav>
      </div>

      <div className="flex gap-5 ml-10 bg-red-200"> 
        { !isLoggedIn && 
            <Link to ="/login">
                <button>Login</button>
            </Link>
        }
        {!isLoggedIn &&
            <Link to ="/signup">
                <button>Sign Up</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to ="/dashboard">
                <button>Dashboard</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to ="/">
                <button>Sign Out</button>
            </Link>
        }
      </div>





    </div>
  );
};

export default Navbar;
