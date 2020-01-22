import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Filter} from '../../filters';
import { color } from './../../../utils';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

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
    boxShadow: '3px 0px 7px #B5B5B5'
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    height: '80px !important',
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
  list: {
    padding: theme.spacing(0),
    marginBottom: '10px'
  },
  title: {
    margin: '8px',
    alignContent: 'flex-start',
    fontFamily: 'ccl-heading--h5'
  },
  universes: {
    fontFamily: 'ccl-paragraph--ms !important'
  },
  section: {
    fontSize: '20px',
    fontFamily: 'ccl-paragraph--ms'
  }
}));

const universes = ['BLUE', 'GREEN', 'WHITE']

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
            <CloseIcon style={{color: "black"}} />
          </IconButton>
        </div>
        <p className={classes.section}>Generic quality information filters</p>
        <h5 className={classes.title}>Parameter families</h5>
        <Divider />
        <List className={classes.list}>
          {universes.map((universe) => (
            <ListItem className={classes.universes} button key={universe} onClick={() => props.setUniverse(universe)}>
              <ListItemIcon>
                <PanoramaFishEyeRoundedIcon fontSize="large" style={{ color: color[universe]['icon']}} />
              </ListItemIcon>
              <ListItemText primary={universe}/>
              {props.universe === universe &&
                <CheckCircleIcon />
              }
            </ListItem>
          ))}
        </List>
        <List>
          <div className={'container-filters'}>
            <Filter universe="BLUE"/>
          </div>
        </List>
      </Drawer>
    </div>
  );
}