import { createContext, useReducer } from "react";

export const AppsContext = createContext();

export const appsReducer = (state, action) => {
  // This reducer is used to manage the apps state.
  switch (
    action.type // Switch on the action type.
  ) {
    case "SET_APPS": // If the action type is SET_APPS, set the apps state to the payload.
      return {
        apps: action.payload,
      };
    case "CREATE_APP": // If the action type is CREATE_APP, add the payload to the apps state.
      return {
        apps: [...state.apps, action.payload],
      };
    case "DELETE_APP": // If the action type is DELETE_APP, remove the payload from the apps state.
      return {
        apps: state.apps.filter((a) => a._id !== action.payload._id),
      };
    default: // If the action type is not recognized, return the state.
      return state;
  }
};

// This component is used to provide the apps state to all components that need it.
export const AppsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appsReducer, {
    apps: null,
  }); // Initialize the apps state and the apps reducer.

  return (
    <AppsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppsContext.Provider>
  ); // Return the apps state and dispatch function to all components that need it.
};
