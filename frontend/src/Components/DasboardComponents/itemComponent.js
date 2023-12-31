import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BugReportIcon from '@mui/icons-material/BugReport';

const icons = {
    DashboardIcon: <DashboardIcon />,
    PeopleIcon: <PeopleIcon />,
    BarChartIcon: <BarChartIcon />,
    AssignmentIndIcon: <AssignmentIndIcon />,
    LayersIcon: <LayersIcon />,
    AdminPanelSettingsIcon: <AdminPanelSettingsIcon />,
    BugReportIcon: <BugReportIcon/>
}


export default function  ItemComponent(props) {

    const itemStyle = {
        backgroundColor: props.isSelected ? 'lightblue' : 'white', // Customize the background color
      };

    const listItemHandler = (index)=>{
        props.onItemClick(index)
    }

    return (
        <>
            <ListItemButton key={props.index} onClick={()=>listItemHandler(props.index)} sx={itemStyle}>
                <ListItemIcon> {icons[props.icon]}</ListItemIcon>
                <ListItemText primary={props.name} />
            </ListItemButton>
        </>
    );
}
