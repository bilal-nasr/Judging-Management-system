import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
//import Badge from '@mui/material/Badge';
//import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, SecondaryListItems } from '../Components/DasboardComponents/ListItems';
import BasicPopover from '../Components/DasboardComponents/BasicPopover';
import { useLocation } from "react-router-dom";
import JuryPage from './Admin/Jury/JuryPage';
import StartupPage from './Admin/Startups/StartupsPage';
import TrainersPage from './Admin/Trainers/TrainersPage';
import BootcampPage from './Admin/Bootcamps/BootcampPage';
import ProfileViewer from './Admin/ViewProfile/ProfileViewer';
import JuryDashboard from './Jury/JuryDashboard'

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

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Dashboard() {

    const location = useLocation();
    const data = location?.state;

    const user = JSON.parse(localStorage?.getItem("user"))
    const role = user?.role || data?.userData.role;
    const name = user?.name || data?.userData.name;




    const [open, setOpen] = React.useState(true);
    const [clickedIndex, setClickedIndex] = React.useState(0)

    const handleItemClicked = (index) => {
        console.log(index)
        setClickedIndex(index)
    }

    const toggleDrawer = () => {
        setOpen(!open);
    };
    if (role === "J")
        return <JuryDashboard />

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} >
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                            // backgroundColor:"#00D084"
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
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
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],

                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <MainListItems onItemClick={handleItemClicked} selected={clickedIndex} />
                        <Divider sx={{ my: 1 }} />

                        {(role === "S" && <SecondaryListItems onItemClick={handleItemClicked} selected={clickedIndex} />)}

                    </List>

                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />

                    {(() => {
                        switch (clickedIndex) {
                            case 0:
                                return <BootcampPage />;
                            case 1:
                                return <StartupPage />;
                            case 2:
                                return <TrainersPage />;
                            case 3:
                                return <JuryPage />;
                            case 4:
                                return <ProfileViewer />;
                            case 5:
                                return <h1>5</h1>;
                            default:
                                return null; // Render nothing for other cases
                        }
                    })()}
                </Box>
            </Box>
        </ThemeProvider>
    )
};
