import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState(""); // Initialize the email state.
  const [password, setPassword] = useState(""); // Initialize the password state.
  const { err, isLoading, signup } = useSignup(); // Initialize the useSignup hook.

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default behavior of the form.

    await signup(email, password); // Call the signup function.
  }; // This function is used to handle the submit event.

  return (
    <div className="lg:pt-12 h-2/3 w-screen flex flex-col lg:grid lg:grid-cols-2 mt-16 lg:mt-0 items-center overflow-hidden">
      <img
        src="https://raw.githubusercontent.com/sayeed205/Assets/main/undraw_login_re_4vu2.svg"
        alt="login"
        className="hidden lg:block lg:ml-16 w-screen xl:ml-32"
      />
      <form className="flex flex-col justify-center items-center md:w-2/3 xl:w-1/2 bg-gray-100 p-8 rounded-lg xl:ml-56 lg:ml-24 shadow-lg">
        <img
          src="https://raw.githubusercontent.com/sayeed205/Assets/main/undraw_profile_pic_ic-5-t.svg"
          alt="avatar"
          className="w-32 "
        />
        <h2 className="my-8 font-bold text-3xl text-gray-700 text-center">
          Sign Up
        </h2>
        <div className="relative">
          <i className="fa-solid fa-at absolute  text-heroku text-xl pt-1"></i>
          <input
            type="email"
            className="pl-8 bg-transparent border-b-2 font-display text-lg outline-none focus:border-heroku transition-all duration-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="relative mt-8">
          <i className="fa-solid fa-lock absolute  text-heroku text-xl pt-1"></i>
          <input
            type="password"
            className="pl-8 bg-transparent border-b-2 font-display text-lg outline-none focus:border-heroku transition-all duration-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="bg-heroku hover:bg-herokub py-1 px-4 rounded-3xl mt-8 text-white font-bold text-lg"
        >
          Sign up
        </button>
        {err && <div className="text-red-500 text-center">{err}</div>}
      </form>
    </div>
  );
};

export default Signup;
