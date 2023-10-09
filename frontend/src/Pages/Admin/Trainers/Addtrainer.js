import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  TextField as MUITextField, // Rename TextField alias to avoid conflicts
} from "@mui/material/";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextareaAutosize = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : grey[200]}; // Use blue[400] for border color
    box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};

    &:hover {
      border-color: ${blue[400]}; // Hover color
    }

    &:focus {
      border-color: ${blue[400]}; // Focus color
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const AddStartups = () => {
  const [bootcamp, setBootcamp] = React.useState('');
  const [name, setName] = React.useState('');
  const [description,setDescription] = React.useState('')


  React.useEffect(()=>{
    console.log(bootcamp)
  },[bootcamp])

  const sendTrainer = async ()=>{
    try {
        
    } catch (error) {
        
    }
  }
  
  return (
    <>
      <div style={{ margin: "0 8px" }}>
        <MUITextField label="Name" sx={{ margin: "0 8px" }} focused onChange={(e)=>setName(e.target.value)}/>
        
        <StyledTextareaAutosize
          aria-label="Description"
          placeholder="Description"
          minRows={3}
          sx={{
            margin: "0 8px",
            background: 'inherit', // Set background to match TextField
          }}
          onChange={(e)=>setDescription(e.target.value)}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Bootcamps</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={bootcamp}
            label="bootcamp"
            onChange={(e)=>setBootcamp(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="FSD">FSD</MenuItem>
            <MenuItem value="UI/UX">UI/UX</MenuItem>
            <MenuItem value="Ideal Lab">Ideal Lab</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button variant="contained" onClick={sendTrainer}>ADD</Button>
      </div>
    </>
  );
};

export default AddStartups;
