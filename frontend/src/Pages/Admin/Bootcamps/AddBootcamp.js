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
        <><div style={{ margin: "0 8px" }}>
        <TextField label="Username" sx={{ margin: "0 8px" }} focused />
        <TextField label="Name" sx={{ margin: "0 8px" }} focused />
        <TextField label="year" sx={{ margin: "0 8px" }} focused />
    </div>
    <div style={{  margin: "8px" }}>
        <Button>ADD</Button>
        <Button>Update</Button>
    </div>
        </>
    )
}

export default AddBootcamp;