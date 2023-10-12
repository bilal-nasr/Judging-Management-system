import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import * as React from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

let rows = [];
 
const headCells = [
  {
    id: "Name",
    numeric: false,
    label: "Name",
  },
  {
    id: "Type",
    numeric: false,
    label: "Type",
  },
  {
    id: "Year",
    numeric: true,
    // year is numeric cant be false
    label: "Year",
  },
  {
    id: "extra",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow key={1}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "center"}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span
                  style={{
                    display: "none",
                  }}
                >
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function TableDataViewer(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  rows = props?.data;
  console.log(rows);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(() => {
    const comparator = (a, b) => {
      if (order === "asc") {
        if (a[orderBy] < b[orderBy]) return -1;
        if (a[orderBy] > b[orderBy]) return 1;
        return 0;
      } else {
        if (a[orderBy] > b[orderBy]) return -1;
        if (a[orderBy] < b[orderBy]) return 1;
        return 0;
      }
    };

    return [...rows]
      .sort(comparator)
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage]);


  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        marginLeft: "10px",
        marginRight: "20px",
        display: "table",
      }}
    >
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => (
                <TableRow key={row.bootcampId} sx={{ cursor: "pointer" }}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.year}</TableCell>

                  <TableCell align="center">
                    <Button onClick={() => navigate(`/StartupBootcampViewer/${row.bootcampId}`)}>
                      Go to BootcampPage
                    </Button>
                  </TableCell>

                  {/* <TableCell align="center">
                                        <IconButton aria-label="Edit" onClick={()=>handleUpdate(row.bootcampId)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={()=>handleDelete(row.bootcampId)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
