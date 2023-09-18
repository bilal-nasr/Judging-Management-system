import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  InputAdornment,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import api from "../api";
import Auth from "../Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (Auth.isUserAuthenticated()) navigate("/dashboard");
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await api.post("/users/login", {
        username,
        password,
      });

      const token = response.data.token;
      const name = response.data.name;
      const role = response.data.role;

      Auth.authenticateUser(token);

      navigate("/dashboard", { state: { name, role } });
    } catch (error) {
      setError(`Invalid login ${error}`);
    }
  };

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
