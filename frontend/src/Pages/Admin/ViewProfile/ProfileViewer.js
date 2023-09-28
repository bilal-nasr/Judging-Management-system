import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {blue} from '@mui/material/colors';
import {
  Box,
  Paper,
  Avatar,
  TextField
} from '@mui/material';
import { useParams } from 'react-router-dom';


export default function ProfileViewer() {
  const { id } = useParams();
  return (
    <Box
    sx={{
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      
    }}
  >
    <Paper sx={{ width: '50vw', height: '80vh' }}>
      {/* Place your content inside the Paper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: '',
          justifyContent: '',
          height: '100%',
          padding: 5,
            margin: 5
        }}
      >
        {/* Your avatar */}
        <Avatar
          alt="Admin"
          src=""
          component="form"
          sx={{
            width: 100,
            height: 100,
            bgcolor: blue,
            '& .MuiTextField-root': { m: 1, width: '10ch' },
            display: 'flex',
          
            margin: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <PersonIcon fontSize="large" />
        </Avatar>

        {/* Additional content can be added here */}
        <TextField
          required
          //id="outlined-required"
          //label="Required"
          defaultValue="userName"
        />
        <TextField
          required
          //id="outlined-required"
          //label="Required"
          defaultValue="password"
        />
        <TextField
          required
          //id="outlined-required"
          //label="Required"
          defaultValue="name"
        />
        <TextField
          required
          //id="outlined-required"
          //label="Required"
          defaultValue="description"
        />
         <div style={{ display: 'flex', gap: '10px' }}>
         <Button>
        ADD
      </Button>
      <Button startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
    </div>
      </Box>
    </Paper>
  </Box>
    
  );
}
