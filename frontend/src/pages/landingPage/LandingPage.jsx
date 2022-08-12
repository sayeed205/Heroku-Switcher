import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col pt-24 lg:pt-16 lg:flex-row justify-center       max-w-7xl mx-auto px-8 md:mx-8 xl:mx-auto items-center">
      <div className="flex flex-col items-center lg:items-start justify-start text-center lg:text-start">
        <div className="">
          <h1 className="text-7xl text-black font-bold">
            Heroku<br></br>Switcher
          </h1>
        </div>
        <div className="flex gap-1 text-lg">
          <div className="bg-heroku h-1 w-16 rounded-lg mt-2.5 h"></div>
          <h3>What it does</h3>
        </div>
        <div className="text-xl">It keeps your Heroku App always running</div>
        <div className="flex gap-8 pt-5">
          <button className="my-7 text-lg py-2 px-6 md:my-0  bg-heroku text-white rounded-3xl transition ease-in duration-300 border-2 border-heroku">
            <Link to={"/login"}>Log in</Link>
          </button>
          <button className="my-7 text-lg py-2 px-6 md:my-0 text-heroku lg:hover:bg-heroku lg:hover:text-white rounded-3xl transition ease-in duration-300 border-2 border-heroku">
            <Link to={"/signup"}>Sign up</Link>
          </button>
        </div>
      </div>
      <div className="">
        <img
          className="lg:max-w-[90%] lg:translate-x-32"
          src="https://raw.githubusercontent.com/sayeed205/Assets/main/undraw_customer_survey_re_v9cj.svg"
          alt="heroku"
        />
      </div>
    </div>
  );
};

export default LandingPage;
