import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const redirection = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(name);
    navigate(redirection, { replace: true });
  };
  return (
    <>
      <h1>Login to access profile page</h1>
      <label htmlFor="x">Id:</label>
      <input type="text" id="x" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
};

export default Login;
