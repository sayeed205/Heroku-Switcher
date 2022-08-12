import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // This hook is used to check if the user is logged in.
  const [err, setErr] = useState(null); // This state is used to display the error message.
  const [isLoading, setIsLoading] = useState(null); // This state is used to display the loading message.
  const { dispatch } = useAuthContext(); // Initialize the useAuthContext hook.

  // This function is used to handle the submit event.
  const login = async (email, password) => {
    setIsLoading(true);
    setErr(null);

    // Send a POST request to the server.
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json(); // Get the response as JSON.

    if (!response.ok) {
      setIsLoading(false);
      setErr(json.err);
    }
    if (response.ok) {
      // save the user token in local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { err, isLoading, login };
};
