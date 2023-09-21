import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




const AddBootcamp = ()=>{
    const [currentYear, setCurrentYear] = useState();
    
    const getYear=()=> {
        const currentDate = new Date();
        return currentDate.getFullYear();
      }
    return(
        <>
            <TextField label="name" focused />
            <TextField label="type" focused />
            <TextField label="year"  focused disabled/>
            <Button variant="Add">Add</Button>
            <Button variant="Cancel">Cancel</Button>
        </>
    )
}

export default AddBootcamp;