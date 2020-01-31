import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import {Filter} from '../../filters';
import { color, colorUniverses } from './../../../utils';

const drawerWidth = 240;
const screen = window.screen.width;
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
    boxShadow: '3px 0px 7px #B5B5B5',
    // marginTop: 70
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '8px',
    minHeight: 150,
  },
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
    marginTop: '20px',
    marginBottom: '20px'
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
  },
  areas: {
    fontFamily: 'ccl-paragraph--ms'
  }
}));

const universes = ['BLUE', 'GREEN', 'WHITE']

export function DrawerView(props) {
  const classes = useStyles();

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
        <div>
        <CloseIcon onClick={props.handleDrawerClose} style={{color: "black", float: 'right', marginTop: screen <= 400 ? 70 : 0}} />
        </div>
        <List className={classes.list} data-tut="reactour__4">
          {universes.map((universe) => (
            <ListItem className={classes.universes} button key={universe} onClick={() => props.setUniverse(universe)}>
              <li style={
                {
                  backgroundColor: color[universe]['background'],
                  boxShadow: props.universe === universe && '0px 0px 17px #080606',
                  fontSize: 18,
                  width: '100%',
                  color: colorUniverses(universe)
                }
              }>
                <PanoramaFishEyeRoundedIcon fontSize="large" style={{ color: color[universe]['icon'], marginTop: 10}} />
                {universe + ' OCEAN'}
              </li>
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