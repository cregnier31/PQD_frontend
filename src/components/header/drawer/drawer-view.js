import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ListItem from '@material-ui/core/ListItem';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import {Filter} from '../../filters';
import { color, colorUniverses, iconcolorUniverses } from './../../../utils';
import EcoIcon from '@material-ui/icons/Eco';
import WavesIcon from '@material-ui/icons/Waves';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const drawerWidth = 262;
const drawerHeight = '3.6em';

const screen = window.screen.width;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    display: 'flex',
    height: '100%',
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    top: drawerHeight,
    width: drawerWidth,
    height: '89%',
    boxShadow: 'None',
    borderRight: '6px solid #273b4b',
    borderTop: '6px solid white',
    background: '#7BA2BC',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '8px',
    minHeight: 2,
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
    marginTop: '2px',
    marginBottom: '20px'
  },
  title: {
    margin: '8px',
    alignContent: 'flex-start',
    fontFamily: 'ccl-heading--h5'
  },
  icons: {
    float: 'left',
    marginLeft: '0.8em',
    marginRight: '-0.7em'
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

  let icon = universe => {
      switch (universe) {
        case 'BLUE':
          return React.createElement(WavesIcon)
        case 'GREEN':
          return React.createElement(EcoIcon)
        case 'WHITE':
          return React.createElement(AcUnitIcon)
        }
    }

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
        <DoubleArrowIcon onClick={props.handleDrawerClose} style={{transform: 'scaleX(-1)', color: '#273b4b', float: 'right', marginTop: screen <= 400 ? 70 : -10, marginRight: 10}} />
        </div>
        <List className={classes.list} data-tut="reactour__4">
          {universes.map((universe) => (
            <ListItem className={classes.universes} button key={universe} onClick={() => props.setUniverse(universe)}>
              <li style={
                {
                  backgroundColor: color[universe]['background'],
                  boxShadow: props.universe === universe ? '0px 0px 18px #080606' : '0px 0px 4px #273b4b',
                  fontSize: 18,
                  fontFamily: 'Lato',
                  borderRadius: 18,
                  textAlign: 'center',
                  width : 0.5,
                  opacity: 1.0,
                  width: '100%',
                  padding: '15px',
                  border: props.universe === universe ? '2px solid #273b4b' : '0.6px solid #273b4b',
                  color: colorUniverses(universe)
                }
              }>
                <div className={classes.icons} style={{color: iconcolorUniverses(universe)}}>{icon(universe)}</div>
                {universe + ' Ocean'}
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
