import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,

} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert } from "@mui/material";

const Login = () => {
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

            // Create a data object with the username and password
            const data = {
                name: Username,
                password: password,
            };

            try {
                // Send a POST request to the server
                const response = await axios.post("http://localhost:3006/api/login", data);
                // Handle the response from the server here
                console.log("Server response:", response.data);
                if (response.data.success) {
                    console.log(response.data.name)
                    navigate(`./dashboard?name=${response.data.name}`);
                } else {
                    setError(response.data.message || "Login failed.");
                }
            } catch (error) {
                setError("Error logging in: " + error.message);
            }

            // You can also redirect the user or perform other actions based on the response
    };



    //   const checklogin = async(req,res) => {

    //   }

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
                {error && (
                    <Alert severity="error" style={{ marginTop: "16px" }}>
                        {error}
                    </Alert>
                )}
            </Paper>
        </div>
    );
};

export default Login;
