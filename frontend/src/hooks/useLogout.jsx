import { useAuthContext } from "./useAuthContext";
import { useAppsContext } from "./useAppsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext(); // Initialize the useAuthContext hook.
  const { dispatch: dispatchApps } = useAppsContext(); // Initialize the useAppsContext hook.

  const logout = async () => {
    // remove the user from local storage
    localStorage.removeItem("user");

    // dispatch the logout action
    dispatch({ type: "LOGOUT" });
    dispatchApps({ type: "SET_APPS", payload: null });
  };

  return { logout };
};
