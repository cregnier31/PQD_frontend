import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import {UniversePanel} from '../universePanel';
import { Button } from '@material-ui/core';
import { Drawer } from './drawer';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#273b4b',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    float: 'left',
  },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));

let area = null;

const AreaList = ({props}) => {
  var list = []
  if(props.data.length){
    props.data.map( item => {
      var active = 0
      if(item.id === props.filters["area"]){
        active = 1
      }
      return list.push(
        <Grid item xs={2} md={2} key={item.id}>
          <Button value={item.id} active={active} onClick={() => {props.set("area", item.id); area = item.name}} color="inherit">
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
  const [open, setOpen] = React.useState(true);
  const [universe, setUniverse] = React.useState(null);
  // const [area, setArea] = React.useState(null);
  
  // const getArea = (area) => {
  //   setArea(area);
  //   console.log('area', area);
  // };

  const getUniverse = (universe) => {
    setUniverse(universe);
  };


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
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <ArrowBackIcon />
          <AreaList props={props} />
        </Toolbar>
      </AppBar>
      <Drawer 
        handleDrawerClose={handleDrawerClose}
        open={open}
        getUniverse={getUniverse}
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
            <FilterListIcon />
          </IconButton>
        <UniversePanel universe={universe} area={area} />
      </main>
    </div>
  );
}