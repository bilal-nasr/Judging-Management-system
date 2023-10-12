import {
    FormControl,
    TextareaAutosize
} from "@mui/material/";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import api from "../../../api";

const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
};

const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
};

const StyledTextareaAutosize = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? blue[400] : grey[200]
        }; // Use blue[400] for border color
    box-shadow: 0px 2px 24px ${theme.palette.mode === "dark" ? blue[900] : blue[100]
        };

    &:hover {
      border-color: ${blue[400]}; // Hover color
    }

    &:focus {
      border-color: ${blue[400]}; // Focus color
      box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const AddAdmin = ({ onDataRefresh }) => {
    const [UserName, setUserName] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [bootcamp, setBootcamp] = React.useState("");
    const [description, setDescription] = React.useState("");

    useEffect(() => {
        console.log(UserName, Name, Password);
    }, [UserName, Name, Password]);

    const sendAdmin = async () => {
        try {
            const response = await api.post("/admin/createAdmin", {
                username: UserName,
                password: Password,
                name: Name,
                description: description,

            });
            console.log(bootcamp)
            if (response.data.success) {
                console.log("Admin created")
                onDataRefresh()
                setUserName("")
                setName("")
                setPassword("")
                setBootcamp("")
                setDescription("")
            }
            else { console.log("failed to create") }
        } catch (error) { }
    };

    return (
        <>
            <div style={{ margin: "0 8px" }}>
                <TextField
                    label="Username"
                    sx={{ margin: "0 8px" }}
                    onChange={(e) => setUserName(e.target.value)}
                    value={UserName}
                    focused
                />
                <TextField
                    label="Name"
                    sx={{ margin: "0 8px" }}
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    focused
                />
                <TextField
                    label="password"
                    sx={{ margin: "0 8px" }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    focused
                />

                <FormControl sx={{ m: 1 }} size="small">
                </FormControl>
                
                <StyledTextareaAutosize
                    aria-label="Description"
                    placeholder="Description"
                    minRows={3}
                    value={description}
                    sx={{
                        margin: "0 8px",
                        background: "inherit", // Set background to match TextField
                    }}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div style={{ margin: "8px"}}>
                <Button variant="contained" onClick={sendAdmin}>
                    ADD
                </Button>
            </div>
        </>
    );
};

export default AddAdmin;
