import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';


function createData(Name, Grades) {
  return { Name:Name, Grades:Grades };
}

const rows = [
  createData("diaa ", 4),
  createData("amjad", 4),
  createData("bilal", 4),
  createData("sally", 4),
  createData("jinan", 5),
];

export default function StartupBootcampViewer() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This function will take you to the previous page
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Grades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Grades}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <div style={{ alignItems: "left" }}>
          <Button onClick={goBack}>
            <ArrowBackIcon />
          </Button>
        </div>
      </Table>
    </TableContainer>
  );
}
