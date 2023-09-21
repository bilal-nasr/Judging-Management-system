import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ProfileViewer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically 
        marginTop: '20px'
      }}
    >
      <Paper sx={{ width: '50vw', height: "80vh" }} /> {/* Adjust width and height as needed */}
    </Box>
  );
}
