import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth";
import api from "../api";

import ParkLogo from "../assets/ParkLogo.png"

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setError("Username and password are required.");
                return;
            }

            const response = await api.post("/users/login", {
                username,
                password,
            });

            if (response.status === 200) {
                const { userData } = response.data;
                console.log("userData from login: ", userData)
                // localStorage.setItem("user",JSON.stringify(userData))
                Auth.authenticate(JSON.stringify(userData))
                navigate("/dashboard", { state: { userData } });
            } else {
                setError("Invalid username or password.");
            }
        } catch (error) {
            setError("An error occurred during login.");
        }
    };

    useEffect(() => {
        if (Auth.isAuthenticated()) {
            navigate("/dashboard");
        }
        else {
            navigate("/login")
        }
    }, [navigate])

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={ParkLogo} alt="park-logo" style={{
                    maxWidth: "25%",
                }} />
            </div>
            <Container
                style={{
                    display: "flex",
                    width: "40%",
                    backgroundColor: "#00dcaf",
                    flexDirection: "column",
                    marginTop: "100px",
                }}
            >
                <Card >
                    <CardContent>
                        <Typography variant="h5" align="center">
                            Login
                        </Typography>
                        {error && (
                            <Typography variant="body2" color="error" align="center">
                                {error}
                            </Typography>
                        )}

                        <Box mt={2}>
                            <TextField
                                id="outlined-adornment-username"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        <Box mt={2}>
                            <TextField
                                id="outlined-adornment-password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleLogin}
                                fullWidth
                                style={{ 
                                    backgroundColor: "#ffe664",
                                    color:"#1e2235"
                                }}
                            >
                                Login
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </div>

    );
};

export default LoginPage;
