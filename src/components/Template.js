import React from "react";
import frame from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, desc1, desc2, image, setIsLoggedIn, formtype }) => {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: Text + Forms */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            <span className="block">{desc1}</span>
            <span className="block text-cyan-300 font-medium mt-1">{desc2}</span>
          </p>

          <div className="mt-8">
            {formtype === "login" ? (
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <SignupForm setIsLoggedIn={setIsLoggedIn} />
            )}
          </div>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-full bg-slate-700/70" />
            <p className="text-xs font-semibold text-slate-400 tracking-widest">
              OR
            </p>
            <div className="h-px w-full bg-slate-700/70" />
          </div>

          {/* Google button */}
          <button
            type="button"
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-3 font-semibold text-slate-100 transition active:scale-[0.99]"
          >
            <span className="text-lg">G</span>
            Sign up with Google
          </button>
        </div>

        {/* Right: Images */}
        <div className="relative w-full max-w-xl mx-auto">
          <div className="relative w-full">
            <img
              src={frame}
              alt="frame"
              loading="lazy"
              className="w-full h-auto select-none"
            />

            <img
              src={image}
              alt="illustration"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8"
            />
          </div>

          {/* little glow */}
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-cyan-500/10 blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Template;