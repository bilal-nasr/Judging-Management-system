import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddStartups = ()=>{
    return(
        <>
            <TextField label="Name" focused />
            <TextField label="Description" focused />
            <TextField label="Bootcamp"  focused />
            <Button variant="Add">Text</Button>
            <Button variant="Cancel">Text</Button>
        </>
    )
}

export default AddStartups;