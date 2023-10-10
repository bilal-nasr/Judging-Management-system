import React, { useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {
    Box,
    Paper,
    Avatar,
    TextField,
    TextareaAutosize,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import api from '../../../api';
import { styled } from "@mui/system";


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
      hight: 320px;
      max-width: 38vw;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
      border-radius: 12px 12px 0 12px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : grey[200]}; // Use blue[400] for border color
      box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
  
      &:hover {
        border-color: ${blue[400]}; // Hover color
      }
  
      &:focus {
        border-color: ${blue[400]}; // Focus color
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
  
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
);



export default function ProfileViewer() {
    const navigate = useNavigate();
    const { id, role } = useParams();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");

    //const [dataGot, setDataGot] = useState(false)

    const goBack = () => {
        navigate(-1); // This function will take you to the previous page
    };


    const getData = async () => {
        let response;
        console.log(role, id)
        try {
            if (role === "J") {
                response = await api.get(`/jury/getJury/${id}`)
                console.log(response)
            }
            else if (role === "S") {
                response = await api.get(`/startup/getStartup/${id}`)
            } else if (role === "T") {
                response = await api.get(`/trainers/getTrainer/${id}`)
            }
            else if (role === "A") {
                response = await api.get(`/admin/getAdmin/${id}`)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <Box
            sx={{
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',

            }}
        >
            <Paper sx={{ width: '50vw', height: '100vh', display: 'grid', marginTop:'30px' }}>
                {/* Place your content inside the Paper */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left', // Set this to 'left' to align items to the left
                        justifyContent: '', // You can set this to 'center' or 'flex-start' as needed
                        height: '100%',
                        padding: 5,
                        margin: 5,
                        maxWidth: '45vw',
                        overflow: 'hidden', // Add this to enable scrolling when content overflows
                        boxSizing: 'border-box', // Add this to include padding in the width and height
                    }}
                >
                    <div style={{ alignItems: "left" }}>
                        <Button onClick={goBack}>
                            <ArrowBackIcon />
                        </Button>
                    </div>
                    {/* Your avatar */}
                    <Avatar
                        alt="Admin"
                        src=""
                        component="form"
                        sx={{
                            width: 100,
                            height: 100,
                            bgcolor: blue[600],
                            '& .MuiTextField-root': { m: 1, width: '10ch' },
                            display: 'flex',
                            margin: 2,
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <PersonIcon fontSize="large" />
                    </Avatar>

                    <TextField
                        required
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <br />
                    {(role === "J" || role === "A") &&
                        <TextField
                            required
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    }
                    <br />
                    <TextField
                        required
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <br />
                    <StyledTextareaAutosize
                        aria-label="Description"
                        placeholder="Description"
                        minRows={3}
                        sx={{
                            background: 'inherit', // Set background to match TextField
                        }}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <br />
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button>Update</Button>
                        <Button startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </div>
                </Box>
            </Paper>

        </Box>

    );
}
