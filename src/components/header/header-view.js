import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Copernicus from '../../assets/images/copernicus.png';
import Grid from '@material-ui/core/Grid';
import {TopPanel} from './topPanel';
import {UniversePanel} from '../universePanel';
import { Button } from '@material-ui/core';
import { Drawer } from './drawer';
import Typography from '@material-ui/core/Typography';
import { color } from './../../utils';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const drawerWidth = 259;
const drawerHeight = '3.6em';
const screen = window.screen.width;

const useStyles2 = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#F1F1F3',
    marginTop: '0.28em',
    borderBottom: '3px solid #273b4b'
  }
}));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: '#273b4b',
    borderBottom: '6px solid #AABB2A',
    boxShadow: 'none',
    opacity: 1,
    height: drawerHeight,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    float: 'left',
    marginTop: screen <= 400 ? 125 : 115,
    marginLeft: '0.2em'
  },
  title: {
    color: 'white',
    padding: theme.spacing(1),
    fontSize: '1em',
    fontWeight: 500
  },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'left',
    ...theme.mixins.toolbar,
    justifyContent: 'left',
    marginTop: '-0.6em'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Lato'
  },
  img: {
    width: '2.6em',
    height: '2.6em',
    marginTop: '0.33em',
  },
  button: {
    left: drawerWidth+10,
    right: '1.6em',
    fontFamily: 'Lato',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '0.7em',
    color: '#273b4b',
    marginTop: '0.8em',
    marginBottom: '0.8em',
    marginRight: '1.6em',
    marginLeft: '1.6em',
  }
}));

const AreaList = ({props}) => {
  const classes = useStyles();
  var list = []
  if(props.data.length){
    props.data.map( item => {
      var active = 0
      if(item.name === props.area){
        active = 1
      }
      return list.push(
        <Grid item xs={0} md={'flex'} key={item.id}>
          <Button className={classes.button} style={{color: props.currentArea === item.name ?  color[props.universe]['write_color'] : '#273b4b',  background : props.currentArea === item.name ? color[props.universe]['background'] : 'none', border : props.currentArea === item.name ? '1.2px solid #273b4b' : 'none', borderRadius: props.currentArea === item.name ? 12 : 'none', boxShadow: props.currentArea === item.name ?  '0px 0px 6px #080606' : 'none'}} value={item.name} active={active} onClick={() => {props.setArea(item.name)}} color="inherit">
            {item.fullname}
          </Button>
        </Grid>
      )
    })
    return list
  }
  return null
}

export function HeaderView(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        data-tut="reactour__2"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Grid container className={classes.root} spacing={1} alignItems='center'>
            <Grid item xs={2}>
                <Grid container justify="center">
                    <a href="http://marine.copernicus.eu/"><img src={Copernicus} className={classes.img} alt="Copernicus"/></a>
                </Grid>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
                <Grid container justify="center">
                    <Typography className={clsx(classes.title)} data-tut="reactour__1" variant="h4">
                    CMEMS Product Quality Dashboard
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Toolbar className={classes2.root}>
          <AreaList props={props} />
        </Toolbar>
      </AppBar>
      <Drawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        setUniverse={(universe) => props.setUniverse(universe)}
        universe={props.universe}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <DoubleArrowIcon style={{color: '#273b4b'}} />
          </IconButton>
        <TopPanel isTourOpen={props.isTourOpen} area={props.area} universe={props.universe} openTour={props.openTour} />
        <UniversePanel universe={props.universe} product={props.product} area={props.area} />
      </main>
    </div>
  );
}
                                           
