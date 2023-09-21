import React from "react";
import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField
}
    from '@mui/material/';


const AddStartups = () => {
    const [StartupName, setStartupName] = React.useState('');
    const [BootcampName, setBootcampName] = React.useState('select');
    const handleChange = (event) => {
        setStartupName(event.target.value);
    };

    return (
        <>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Bootcamps</InputLabel>

                <TextField label="Startup Description" focused />


                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={BootcampName}
                    label="bootcamp"
                    onChange={handleChange}
                >
                    <MenuItem value="Bootcamp">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="FSD">FSD</MenuItem>
                    <MenuItem value="UI/UX">UI/UX</MenuItem>
                    <MenuItem value="Ideal Lab">Ideal Lab</MenuItem>
                </Select>
                <Button variant="Add">Add</Button>
                <Button variant="Cancel">update</Button>
            </FormControl>


        </>
    )
}


export default AddStartups;