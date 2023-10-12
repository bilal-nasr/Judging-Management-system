import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import api from '../../../api';




const AddBootcamp = ({ onDataRefresh }) => {
    const [currentYear, setCurrentYear] = useState(null);
    const [name, setName] = useState('')
    const [type, setType] = useState('')


    const getYear = () => {
        const currentDate = new Date();
        setCurrentYear(currentDate.getFullYear());
    }


    useEffect(() => {
        getYear()
        console.log(name, type)
    }, [name, type])


    const sendBootcamp = async () => {

        try {
            const response = await api.post("/Bootcamp/createBootcamp", {
                name: name,
                type: type,
                year: currentYear
            })
            if (response.data.success) {
                console.log("bootcamp created")
                onDataRefresh()
                setName("")
                setType("")
            }
            else {
                console.log("failed")
            }
        } catch (error) {

        }
    }

    return (
        <>

            <div style={{ margin: "0 8px" }}>
                <TextField label="name" sx={{ margin: "0 8px" }} value={name} onChange={(e) => setName(e.target.value)} focused />

                <TextField label="type" sx={{ margin: "0 8px" }} value={type} onChange={(e) => setType(e.target.value)} focused />

                <TextField
                    label="Year"
                    sx={{ margin: "0 8px" }}
                    focused
                    inputProps={{
                        pattern: "\\d{4}", // Regular expression for a 4-digit year
                        title: "Please enter a valid 4-digit year", // Error message for invalid input
                    }}
                    value={currentYear || ''}
                    onChange={(e) => setCurrentYear(e.target.value)}
                    disabled
                />

            </div>

            <div style={{ margin: "8px" }}>
                <Button variant="contained" onClick={sendBootcamp}>ADD</Button>
            </div>
        </>
    )
}

export default AddBootcamp;