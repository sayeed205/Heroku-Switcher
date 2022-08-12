import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setErr(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    }); // Fetch the app from the server.

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

  return { err, isLoading, signup };
};
