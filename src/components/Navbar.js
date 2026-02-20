import React from "react";
import Logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const { isLoggedIn,setIsLoggedIn } = props;
  const navigate = useNavigate();

  function logoutHandler() {
    setIsLoggedIn(false);
    toast.success("Logged out");
    navigate("/"); // ✅ force redirect to home
  }

  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={Logo} alt="Logo" width={162} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-10">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex gap-5">
        {!isLoggedIn && (
          <Link to="/login"><button>Login</button></Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup"><button>Sign Up</button></Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard"><button>Dashboard</button></Link>
        )}

        {isLoggedIn && (
          <button onClick={logoutHandler}>Sign Out</button>  
        )}
      </div>
    </div>
  );
};

export default Navbar;