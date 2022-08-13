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
    <div className="flex flex-col items-center lg:max-h-fit justify-center p-5 bg-white rounded-3xl border-2 border-gray-300 shadow-lg ">
      <div className="pb-2 border-b border-gray-300 text-2xl text-center">
        {app.appName}
      </div>
      <div className="border-b text-sm flex flex-col gap-8 py-5">
        <p>
          <b>Main Heroku Api : </b>
          {app.aHerokuApi}
        </p>
        <p>
          <b>Second Heroku Api : </b>
          {app.bHerokuApi}
        </p>
      </div>
      <div className="flex justify-center pt-3">
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
