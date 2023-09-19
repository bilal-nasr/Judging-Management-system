import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material-next/Button';

const addJudge = ()=>{
    return(
        <>
            
            <TextField label="Username" color="secondary" focused />
            <TextField label="Name" color="secondary" focused />
            <TextField label="Role" color="secondary" focused />
            <Button variant="Add">Text</Button>
            <Button variant="Cancel">Text</Button>
        </>
    )
}

export default addJudge;