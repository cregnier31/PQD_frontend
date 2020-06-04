import React from "react";
import Grid from '@material-ui/core/Grid';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import { color, colorUniverses } from '../../../utils';
import { makeStyles } from '@material-ui/core/styles';
import {changeNameAreasForTitle} from '../../../utils';

const drawerWidth = 270;
const screen = window.screen.width;

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'serif',
  },
  title2: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    marginLeft: '5px',
    fontWeight: 700,
    fontSize: 20,
    marginTop: -5,
    marginLeft: 50,
  },
  root: {
    display: 'flex',
    marginLeft: '10px',
    height: '25px',
    marginTop: '20px'
  },
  subTitle: {
    display: 'inline-flex',
  }
}));

export function TitleRawView(props){
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} md={12} className={classes.root} data-tut="reactour__6">
        <div className={classes.title} style={{backgroundColor: color[props.universe]['bg_map'], width: '99%', height: 50, marginTop: 15}}></div>
      </Grid>
      <Grid item xs={12} md={12} className={classes.root} data-tut="reactour__6">
        <div className={classes.title} style={{color: colorUniverses(props.universe), marginTop: -22, marginLeft: 20}}>{ props.universe + ' Ocean'}</div>
      </Grid>
      <Grid item xs={12} md={12} className={classes.root}>
        <div className={classes.title2} style={{color: '#273b4b'}}>CMEMS monitoring and forecasting capacity: {props.area ? changeNameAreasForTitle(props.area) : ''}</div>
      </Grid>
      <Grid item xs={12} md={12} className={classes.root} data-tut="reactour__6">
        <div className={classes.title} style={{backgroundColor: '#A4A4B2', marginLeft: 50, width: '94.5%', height: 1.8, marginTop: -5}}></div>
      </Grid>
    </Grid>
  );
}
