import React, { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext(); // Create the auth context.

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": // If the action type is LOGIN, set the user state to the payload.
      return { user: action.payload }; // If login is successful, return the user.
    case "LOGOUT": // If the action type is LOGOUT, set the user state to null.
      return { user: null }; // If logout is successful, return null.
    default: // If the action type is not recognized, return the state.
      return state; // Return the state.
  }
}; // This reducer is used to check if the user logging in or logging out.

// This component is used to provide the auth state to all components that need it.
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  }); // Initialize the state and dispatch.

  // This useEffect is used to check if the user is logged in.
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Get the user from local storage.

    if (user) {
      dispatch({ type: "LOGIN", payload: user }); // If the user is found, dispatch the login action.
    }
  }, []);

  console.log("AuthContext state: ", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  ); // Return the context provider and the children.
}; // This provider is used to provide the AuthContext to the children.
