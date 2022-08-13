import React from "react";

const Usage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">How to use Heroku Switcher</h1>
      <ul>
        <li>Create two Heroku account</li>
        <li>
          Deploy your Heroku app on only one account and that is gonna be your
          main account
        </li>
        <li>Dont do anything in second account</li>
        <li>Get API Keys from both account and</li>
        <li>
          fill all these shown in the image below and dont fill wrong vars else
          your heroku dyno trick won't work
        </li>

        <img
          src="https://raw.githubusercontent.com/sayeed205/Assets/main/Add%20New%20App.png"
          alt="Add New App"
          className="w-96"
        />
      </ul>
    </div>
  );
};

export default Usage;
