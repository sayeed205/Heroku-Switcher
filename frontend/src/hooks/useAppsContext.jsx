import { AppsContext } from "../context/AppContext";
import { useContext } from "react";

export const useAppsContext = () => {
  const context = useContext(AppsContext); // useContext returns the value of the context.

  if (!context) {
    throw Error("useAppsContext must be used inside an AppsContextProvider"); // If the context is not found, throw an error.
  }

  return context; // Return the context.
}; // This hook is used to access the apps.
