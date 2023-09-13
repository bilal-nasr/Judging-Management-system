import React, { useState,useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import api from "../api";
import Auth from "../Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    if(Auth.isUserAuthenticated())
        navigate("/dashboard")
  },[navigate]);

  // todo here
  const handleLogin = async () => {
    try {
      // Make a request to your authentication API
      const response = await api.post("/users/login", { 
        username,
        password,
      });
      console.log(response);
  
      // Assuming your API returns a token upon successful login
      const  token = response.data.token;
      const  name  = response.data.name;
      const role = response.data.role;
  
      // Store the token in your authentication context or local storage
      Auth.authenticateUser(token);
  
      // Redirect the user to a protected route
      navigate("/dashboard",{ state: { name,role } }); // Change "/dashboard" to your desired protected route
    } catch (error) {
      // Handle login error
      console.log(error)
      setError(`Invalid login ${error}`);
    }
  };
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "300px" }}>
        <CardContent>
          <Typography variant="h5">Login</Typography>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ marginTop: "16px" }}
            fullWidth
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;