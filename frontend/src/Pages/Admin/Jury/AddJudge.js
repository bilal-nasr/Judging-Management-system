import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const addJudge = () => {
    return (
        <>
            <div style={{ margin: "0 8px" }}>
                <TextField label="Username" sx={{ margin: "0 8px" }} focused />
                <TextField label="Name" sx={{ margin: "0 8px" }} focused />
                <TextField label="Role" sx={{ margin: "0 8px" }} focused />
            </div>
            <div style={{  margin: "8px" }}>
                <Button>ADD</Button>
                <Button>Update</Button>
            </div>
        </>

    )
}

export default addJudge;