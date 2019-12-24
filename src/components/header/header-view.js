import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#273b4b',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  region: {
    justifyContent: 'space-between',
  }
}));

export function HeaderView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const regions = [
    'GLOBAL',
    'ARTIC',
    'BALTIC SEA',
    'BLACK SEA',
    'IBERIAN-BISCAYIRELAND',
    'NORTH WESTERN SHELVES',
    'MEDITERRANEAN SEA'
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.region}>
          <ArrowBackIcon />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example" 
          >
            {regions.map(region =>
              <Tab key={region} label={region}/>
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
