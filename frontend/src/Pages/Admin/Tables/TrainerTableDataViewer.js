import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material';


let rows = [];

const headCells = [
    {
        id: 'name',
        numeric: false,
        label: 'name',
    },
   
    {
        id: 'bootcamp',
        numeric: false,
        label: 'bootcamp',
    },
    {},
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead >
            <TableRow >
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'center'}
                    >

                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span
                                    style={{
                                        display: 'none',
                                    }}
                                >
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default function TableDataViewer(props) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    rows = props.data
    console.log(rows)
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
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
            if (order === 'asc') {
                if (a[orderBy] < b[orderBy]) return -1;
                if (a[orderBy] > b[orderBy]) return 1;
                return 0;
            } else {
                if (a[orderBy] > b[orderBy]) return -1;
                if (a[orderBy] < b[orderBy]) return 1;
                return 0;
            }
        };

        return [...rows].sort(comparator).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        );
    }, [order, orderBy, page, rowsPerPage]);

    const navigate = useNavigate();
    return (
        <Box sx={{ width: '100%', marginLeft: '10px', marginRight: '20px', display: "table" }} >
            <Paper sx={{ width: '100%', mb: 2 }}>
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
                        <TableBody >
                            {visibleRows.map((row, index) => (
                                <TableRow key={ row.instructorsId } sx={{ cursor: 'pointer' }}>
                                    <TableCell align="center">{row.instructor_name}
                                    </TableCell>
                                    {/* <TableCell align="center">{row.instructor_description}</TableCell> */}
                                    <TableCell align="center">{row.bootcamp_name}</TableCell>
                                    
                                    <TableCell align="center">
                                    <Button onClick={() => navigate (`/profileviewer/T/${row.instructorsId}`)}>Go to ProfileViewer</Button>

                                    </TableCell>
                                    
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


