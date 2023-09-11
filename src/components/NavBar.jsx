import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const auth = useAuth();
  return (
    <>
      <nav style={{ backgroundColor: "green", padding: "12px" }}>
        <ul style={{ display: "flex", gap: "20px" }}>
          <NavLink style={{ cursor: "pointer" }} to="/">
            Home
          </NavLink>
          <NavLink style={{ cursor: "pointer" }} to="/about">
            About
          </NavLink>
          <NavLink style={{ cursor: "pointer" }} to="/profile">
            Profile
          </NavLink>
          {!auth.user && (
            <NavLink style={{ cursor: "pointer" }} to="/login">
              Login
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
