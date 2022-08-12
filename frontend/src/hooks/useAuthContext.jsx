import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext); // useContext returns the value of the context.

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider"); // If the context is not found, throw an error.
  }

  return context; // Return the context.
}; // This hook is used to Authorize the user.
