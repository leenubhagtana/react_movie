import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginRequest } from "./userActions";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.user.isLoggedIn); // Use the user state from userReducer
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const { username, password } = formData;
    dispatch(userLoginRequest(username, password));
  };

  // Handle navigation after successful login
  if (user) {
    console.log("moving");
    navigate("/usermovie");
  }

  return (
    <Container maxWidth="xs" className="mt-5">
      <h2 className="text-center mb-4">User Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <TextField
        fullWidth
        label="Username"
        variant="outlined"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className="mb-3"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="mb-3"
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Container>
  );
};

export default LoginPage;
