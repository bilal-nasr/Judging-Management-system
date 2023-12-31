import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ItemComponent from './itemComponent';

export function MainListItems({ onItemClick,selected }) {

  return (
    <React.Fragment>
      <ItemComponent name="Bootcamps" icon="DashboardIcon" index={0} onItemClick={onItemClick} isSelected={selected===0}/>
      <ItemComponent name="Startups" icon="PeopleIcon" index={1} onItemClick={onItemClick} isSelected={selected===1}/>
      <ItemComponent name="Trainers" icon="AssignmentIndIcon" index={2} onItemClick={onItemClick} isSelected={selected===2}/>
      <ItemComponent name="Juries" icon="BarChartIcon" index={3} onItemClick={onItemClick} isSelected={selected===3}/>
      {/* <ItemComponent name="Testing" icon="BugReportIcon" index={5} onItemClick={onItemClick} isSelected={selected===5}/> {/*for testing components*/ }
    </React.Fragment>
  );
}

export function SecondaryListItems({ onItemClick,selected}) {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        For super Admin
      </ListSubheader>
      <ItemComponent name="Admin" icon="AdminPanelSettingsIcon" index={6} onItemClick={onItemClick} isSelected={selected===6}/>
      
      {/* for admin on toolbar */}
    </React.Fragment>
  );
}
  