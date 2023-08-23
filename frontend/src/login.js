import React, { useState } from "react";
import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., send a request to your server.
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
      <Paper elevation={3} style={{ padding: "20px", minWidth: "300px" }}>
        <Avatar style={{ backgroundColor: "#1976D2", margin: "0 auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align="center" style={{ marginTop: "16px" }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={Username}
            onChange={handleUsernameChange}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
           Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
