import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Profile from "./components/Profile";
import Login from "./components/Login";
import "./App.css";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Protected from "./components/Protected";
const LazyAbout = React.lazy(() => import("./components/About"));
const App = () => {
  const auth = useAuth();
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loadinggg.....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
