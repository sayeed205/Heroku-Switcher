import React from "react";
import { useAppsContext } from "../../hooks/useAppsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

// This component is used to display the app details.
const AppDetails = ({ app }) => {
  const { dispatch } = useAppsContext(); // Initialize the useAppsContext hook.
  const { user } = useAuthContext(); // Initialize the useAuthContext hook.

  // This function is used to handle the delete event.
  const handleDelete = async () => {
    if (!user) {
      return; // If the user is not logged in, return.
    }
    // Fetch the app from the server.
    const response = await fetch("/api/apps/" + app._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }); // Send a DELETE request to the server.
    const json = await response.json(); // Get the response as JSON.

    if (response.ok) {
      dispatch({ type: "DELETE_APP", payload: json }); // Dispatch the DELETE_APP action.
    }
  };

  return (
    <div className="block p-5  bg-white rounded-lg border-2 border-gray-300 shadow-lg ">
      <div className="pb-2 border-b border-gray-300 text-xl text-center">
        {app.appName}
      </div>
      <div className="border-b pb-2">
        <p>A Heroku Api Key - {app.aHerokuApi}</p>
        <p>B Heroku Api Key - {app.bHerokuApi}</p>
      </div>
      <div className="flex justify-center gap-4 pt-3">
        {/* <button className="btn btn-heroku">edit</button> */}
        <button
          className="bg-red-600 hover:bg-red-900 py-2 px-6 rounded-3xl text-black"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
}; // This component is used to display the app details.

export default AppDetails;
