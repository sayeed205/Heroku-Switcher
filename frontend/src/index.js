import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";

// import Context Providers
import { AppsContextProvider } from "./context/AppContext"; // App Context
import { AuthContextProvider } from "./context/AuthContext"; // Auth Context

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <AppsContextProvider>
          <App />
        </AppsContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
