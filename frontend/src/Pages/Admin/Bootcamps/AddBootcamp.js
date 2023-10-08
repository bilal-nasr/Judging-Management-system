import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




const AddBootcamp = () => {
    const [currentYear, setCurrentYear] = useState();

    const getYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }
    return (
        <>
        
        <div style={{ margin: "0 8px" }}>
            <TextField label="name" sx={{ margin: "0 8px" }} focused />
            <TextField label="type" sx={{ margin: "0 8px" }} focused />
            <TextField
                label="Year"
                sx={{ margin: "0 8px" }}
                focused
                inputProps={{
                    pattern: "\\d{4}", // Regular expression for a 4-digit year
                    title: "Please enter a valid 4-digit year", // Error message for invalid input
                }}
            />

        </div>

            <div style={{ margin: "8px" }}>
            <Button variant="contained">ADD</Button>
            </div>
        </>
    )
}

export default AddBootcamp;