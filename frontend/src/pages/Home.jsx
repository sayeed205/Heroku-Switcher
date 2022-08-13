import React, { useEffect } from "react";
import { useAppsContext } from "../hooks/useAppsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import AppDetails from "../components/appDetails/AppDetails"; // This component is used to display the app details.
import AppForm from "../components/appForm/AppForm"; // This component is used to display the CREATE APP form.

const Home = () => {
  const { apps, dispatch } = useAppsContext(); // Initialize the useAppsContext hook.
  const { user } = useAuthContext(); // Initialize the useAuthContext hook.

  // This useEffect is used to check if the user is logged in.
  useEffect(() => {
    const fetchApps = async () => {
      const response = await fetch("/api/apps", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_APPS", payload: json }); // If the response is ok, dispatch the SET_APPS action.
      }
    };
    if (user) {
      fetchApps();
    }
  }, [dispatch, user]); // This useEffect is used to check if the user is logged in.
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="order-last lg:order-first bg-white mt-14 flex justify-center flex-wrap gap-7 p-8 overflow-hidden">
        {apps &&
          apps.map((app) => {
            return <AppDetails key={app._id} app={app} />;
          })}
      </div>
      <div className="lg:order-last order-first flex items-start justify-center max-h-min">
        <AppForm />
      </div>
    </div>
  );
};

export default Home;
