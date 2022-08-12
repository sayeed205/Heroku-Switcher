import React, { useState } from "react";
import { useAppsContext } from "../../hooks/useAppsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const AppForm = () => {
  // This component is used to display the app form.
  const { dispatch } = useAppsContext(); // Initialize the useAppsContext hook.
  const { user } = useAuthContext(); // Initialize the useAuthContext hook.

  const [appName, setAppName] = useState("");
  const [aHerokuApi, setAHerokuApi] = useState("");
  const [bHerokuApi, setBHerokuApi] = useState("");

  const [err, setErr] = useState(null); // This state is used to display the error message.

  // This function is used to handle the submit event.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission.

    // If the user is not logged in, return.
    if (!user) {
      setErr("You must be Logged in");
      return;
    }

    const app = { appName, aHerokuApi, bHerokuApi }; // Create the app object.

    // Send a POST request to the server.
    const response = await fetch("/api/apps/", {
      method: "POST",
      body: JSON.stringify(app),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }); // Fetch the app from the server.
    const json = await response.json(); // Get the response as JSON.

    // If the response is not ok, set the error message.
    if (!response.ok) {
      setErr(json.err);
    }
    // If the response is ok, dispatch the CREATE_APP action.
    if (response.ok) {
      setAppName("");
      setAHerokuApi("");
      setBHerokuApi("");
      setErr(null);
      console.log("new app added to db for dyno switcher", json);
      dispatch({ type: "CREATE_APP", payload: json });
    }
  }; // This function is used to handle the submit event.

  return (
    <div className=" py-6 px-12 mt-8 rounded-3xl border-2 border-gray-300 mx-auto lg:mt-20 xl:py-12 xl:px-24">
      <form onSubmit={handleSubmit} className="">
        <h3 className="block text-center mb-3 border-b-2 border-gray-300 pb-3">
          Add New App
        </h3>
        <div className="pt-3 grid grid-cols-1 gap-3">
          <div className="flex gap-3 justify-between">
            <label className="">Name</label>
            <input
              type="text"
              className="bg-transparent outline-none border-b-2 font-display text-['18px', '24px'] focus:border-heroku transition-all duration-500"
              placeholder="Heroku App Name"
              onChange={(e) => setAppName(e.target.value)}
              value={appName}
              required
            />
          </div>
          <div className="flex gap-3 justify-between">
            <label className="">API 1</label>
            <input
              type="text"
              className="bg-transparent outline-none border-b-2 font-display text-['18px', '24px'] focus:border-heroku transition-all duration-500"
              placeholder="First Heroku API Key"
              onChange={(e) => setAHerokuApi(e.target.value)}
              value={aHerokuApi}
              required
            />
          </div>
          <div className="flex gap-3 justify-between">
            <label className="">API 2</label>
            <input
              type="text"
              className="bg-transparent outline-none border-b-2 font-display text-['18px', '24px'] focus:border-heroku transition-all duration-500"
              placeholder="Second Heroku API Key"
              onChange={(e) => setBHerokuApi(e.target.value)}
              value={bHerokuApi}
              required
            />
          </div>
        </div>
        <div className="block text-center pt-7">
          <button
            type="submit"
            className="bg-heroku hover:bg-herokub py-2 px-6 rounded-3xl text-black "
          >
            Add APP
          </button>
        </div>
        {err && <div>{err}</div>}
      </form>
    </div>
  );
};

export default AppForm;
