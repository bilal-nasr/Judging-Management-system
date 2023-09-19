import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const addJudge = ()=>{
    return(
        <>
            <TextField label="Username" focused />
            <TextField label="Name" focused />
            <TextField label="Role"  focused />
            <Button variant="Add">Text</Button>
            <Button variant="Cancel">Text</Button>
        </>
    )
}

export default addJudge;