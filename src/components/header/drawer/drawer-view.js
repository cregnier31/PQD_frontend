import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Crop169Icon from '@material-ui/icons/Crop169';
import {Filter} from '../../filters';


const drawerWidth = 240;

const universes = [
  {
    name: "BLUE",
    color: '#92AFCD'
  },
  {
    name: "GREEN",
    color: '#C6FAE0'
  },
  {
    name: "WHITE",
    color: '#DEE2E0'
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    height: "120px !important",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
}));

const style = (color) => {
  switch (color) {
    case 'BLUE':
      return <Crop169Icon fontSize="large" style={{ color: 'blue'}} />
    case 'GREEN':
      return <Crop169Icon fontSize="large" style={{ color: 'green'}} />
    case 'WHITE':
      return <Crop169Icon fontSize="large" style={{ color: 'grey'}} />
    default:
      return <Crop169Icon fontSize="large" style={{ color: 'blue'}} />
  }
}

export function DrawerView(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          {universes.map((text) => (
            <ListItem button key={text.name} onClick={() => props.getUniverse(text)}>
              <ListItemText primary={text.name}/>
              {style(text.name)}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <div className={'container-filters'}>
            <Filter universe="BLUE"/>
          </div>
        </List>
      </Drawer>
    </div>
  );
}