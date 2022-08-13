import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages & components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Usage from "./pages/usage/Usage";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="font-display">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={!user ? <LandingPage /> : <Navigate to="/apps" />}
            />
            <Route
              path="/apps"
              element={user ? <Home /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/apps" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/apps" />}
            />
            <Route path="/usage" element={<Usage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
} // This is the main component of the application.

export default App;
