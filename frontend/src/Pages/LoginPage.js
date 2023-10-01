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
import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth";
import api from "../api";

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
        const { token, role, name } = response.data;
        Auth.authenticate(token, role, username);
        navigate("/dashboard", { state: { name, role } });
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("An error occurred during login.");
    }
  };

  useEffect(()=>{
    if(Auth.isAuthenticated()){
        navigate("/dashboard");
    }
    else{
        navigate("/login")
    }
  },[navigate])

  return (
    <Container
    maxWidth="sm"
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }}
>
    <Card>
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
                >
                    Login
                </Button>
            </Box>
        </CardContent>
    </Card>
</Container>
);
};

export default LoginPage;
