import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ItemComponent from './itemComponent';

export function MainListItems({ onItemClick }) {
  return (
    <React.Fragment>
      <ItemComponent name="Bootcamps" icon="DashboardIcon" index={0} onItemClick={onItemClick} />
      <ItemComponent name="Startups" icon="PeopleIcon" index={1} onItemClick={onItemClick} />
      <ItemComponent name="trainers" icon="AssignmentIndIcon" index={2} onItemClick={onItemClick} />
      <ItemComponent name="Juries" icon="BarChartIcon" index={3} onItemClick={onItemClick} />
      <ItemComponent name="Events" icon="LayersIcon" index={4} onItemClick={onItemClick} />
      <ItemComponent name="testing" icon="BugReportIcon" index={5} onItemClick={onItemClick} /> {/*for testing components*/ }
    </React.Fragment>
  );
}

export function SecondaryListItems() {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        For super Admin
      </ListSubheader>
      <ItemComponent name="Admin" icon="AdminPanelSettingsIcon" />
    </React.Fragment>
  );
}
