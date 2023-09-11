import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <h1>Profile page</h1>
      {auth.user && <h2>Welcome {auth.user}</h2>}
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
};

export default Profile;
