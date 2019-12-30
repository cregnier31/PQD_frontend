import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Filter} from '../filters';
import { Button } from '@material-ui/core';


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    justifyContent: 'space-between'
  }
}));

const AreaList = ({props}) => {
  var list = []
  if(props.data.length){
    props.data.map( item => {
       var active = 0
      if(item.id === props.filters["area"]){
        active = 1
      }
      return list.push(
        <Button key={item.id} value={item.id} active={active} onClick={ () => props.set("area", item.id)}>
          <Typography variant="h6" noWrap>
            {item.fullname}
          </Typography>
        </Button>
      )
    })
    return list
  }
  return null
}

export function HeaderView(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        
        <Toolbar className={classes.region}>
          <AreaList props={props} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['BLUE', 'GREEN', 'WHITE'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
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
