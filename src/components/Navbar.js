import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function logoutHandler() {
    setIsLoggedIn(false);
    toast.success("Logged out");
    navigate("/");
    setOpen(false);
  }

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-richblack-900/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            loading="lazy"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition
                     ${
                       isActive
                         ? "bg-white text-richblack-900"
                         : "text-richblack-50 hover:bg-white/10"
                     }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-richblack-50 hover:bg-white/10 transition">
                Login
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm transition">
                Sign Up
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition">
                Dashboard
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <button
              onClick={logoutHandler}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-sm transition"
            >
              Sign Out
            </button>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-full p-2 hover:bg-white/10 transition"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-5 bg-white mb-1"></span>
            <span className="block h-0.5 w-5 bg-white mb-1"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-richblack-900">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 text-sm font-medium transition
                     ${
                       isActive
                         ? "bg-white text-richblack-900"
                         : "text-richblack-50 hover:bg-white/10"
                     }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-2 border-t border-white/10 pt-3 flex flex-col gap-2">
                {!isLoggedIn ? (
                  <>
                    <Link to="/login" onClick={() => setOpen(false)}>
                      <button className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-richblack-50 hover:bg-white/10 transition">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup" onClick={() => setOpen(false)}>
                      <button className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition">
                        Sign Up
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/dashboard" onClick={() => setOpen(false)}>
                      <button className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition">
                        Dashboard
                      </button>
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 transition"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;