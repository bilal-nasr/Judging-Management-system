import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";

import ItemComponent from "./itemComponent";

export const mainListItems = (
  <React.Fragment>
    <ItemComponent name="Bootcamps" icon="DashboardIcon" />
    <ItemComponent name="Startups" icon="PeopleIcon" />
    <ItemComponent name="trainers" icon="AssignmentIndIcon" />
    <ItemComponent name="Juries" icon="BarChartIcon" />
    <ItemComponent name="Events" icon="LayersIcon" />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      For super Admin
    </ListSubheader>
    <ItemComponent name="Admin" icon="AdminPanelSettingsIcon" />
  </React.Fragment>
);
