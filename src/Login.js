import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "./authActions";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isLoggedIn, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest(username, password));
  };

  // Redirect to AdminHome.js after successful login
  if (isLoggedIn) {
    navigate("/movies");
  }

  return (
    <Container maxWidth="xs" className="my-5">
      <h2 className="text-center mb-4">Login</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
