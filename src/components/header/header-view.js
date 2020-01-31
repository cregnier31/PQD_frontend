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


const drawerWidth = 240;
const screen = window.screen.width;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#286E9F'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    float: 'left',
    marginTop: screen <= 400 ? 115 : 45
  },
  title: {
    float: 'left',
    height:'5%',
    color: 'white',
    padding: theme.spacing(1),
    marginTop: screen <= 400 ? 25 : 0,
  },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    marginTop: 30
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
    fontFamily: 'ccl-heading--h3'
  },
  img: {
    width: '40px',
    height: '40px',
    marginRight: 10
  },
  button: {
    fontFamily: 'ccl-heading--h5',
    textTransform: 'none',
    fontSize: 20,
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
        <Grid item xs={2} md={2} key={item.id}>
          <Button className={classes.button} style={{borderBottom : props.currentArea === item.name ? 'solid' : 'none'}} value={item.name} active={active} onClick={() => {props.setArea(item.name)}} color="inherit">
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
        <Grid container className={classes.root} direction="row" justify="center">
          <Typography className={clsx(classes.title)} data-tut="reactour__1" variant="h5">
            <img src={Copernicus} className={classes.img} alt="Copernicus"/> 
            CMEMS Product Quality Dashboard
          </Typography>
        </Grid>
        <Toolbar>
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
            <FilterListIcon style={{color: "black"}} />
          </IconButton>
        <TopPanel isTourOpen={props.isTourOpen} area={props.area} universe={props.universe} openTour={props.openTour} />
        <UniversePanel universe={props.universe} product={props.product} area={props.area} />
      </main>
    </div>
  );
}