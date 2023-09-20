import React from "react";
import TextField from '@mui/material/TextField';
import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem
}
    from '@mui/material/';

const AddStartups = () => {
    const [BootcampName, setBootcampName] = React.useState('');

    const handleChange = (event) => {
        setBootcampName(event.target.value);
    };
    return (
        <>
            <TextField label="Name" focused />
            <TextField label="Description" focused />
            {/* -------------------- */}
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Bootcamps</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={BootcampName}
                    label="bootcamp"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="FSD">FSD</MenuItem>
                    <MenuItem value="UI/UX">UI/UX</MenuItem>
                    <MenuItem value="Ideal Lab">Ideal Lab</MenuItem>
                </Select>
            </FormControl>
            {/* -------------------- */}
            <Button variant="Add">Text</Button>
            <Button variant="Cancel">Text</Button>
        </>
    )
}

export default AddStartups;