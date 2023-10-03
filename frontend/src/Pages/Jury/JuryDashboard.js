import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import * as React from 'react';
import { useLocation } from "react-router-dom";
import BasicPopover from '../../Components/DasboardComponents/BasicPopover';
import Cards from '../../Components/JuryDashboardComponent/Cards'
import Grid from '@mui/material/Unstable_Grid2';
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const AppBar = styled(MuiAppBar)();
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Dashboard() {

    const location = useLocation();
    const data = location?.state;

    const user = JSON.parse(localStorage?.getItem("user"))
    const name = user?.name || data?.userData.name;

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex', }}>
                <CssBaseline />
                <AppBar position="absolute">
                    <Toolbar sx={{ backgroundColor: "#00dcaf" }}>

                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            {name}
                        </Typography>
                        <BasicPopover name={name} />
                    </Toolbar>
                </AppBar>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: "auto"
                    }}
                >
                    <Toolbar />
                    <div style={{ overflow: "hidden" }}>
                        <Typography variant="h3" marginTop="40px" marginLeft="40px">Welcome to this bootcamp</Typography>

                        <Box sx={{ flexGrow: 1, marginLeft: "40px", marginTop: "50px" }}>
  <Grid container spacing={2}>
    {Array.from(Array(20)).map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Cards />
      </Grid>
    ))}
  </Grid>
</Box>



                    </div>

                </Box>
            </Box>
        </ThemeProvider>
    );
}