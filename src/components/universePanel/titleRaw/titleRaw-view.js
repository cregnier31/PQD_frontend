import React from "react";
import Grid from '@material-ui/core/Grid';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import { color, colorUniverses } from '../../../utils';
import { makeStyles } from '@material-ui/core/styles';
import {changeNameAreasForTitle} from '../../../utils';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'serif',
    marginLeft: '5px',
  },
  title2: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    marginLeft: '5px',
  },
  root: {
    display: 'flex',
    marginLeft: '10px',
    height: '40px',
    marginTop: '10px'
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
        <PanoramaFishEyeRoundedIcon fontSize="large" style={{ color: color[props.universe]['icon']}} />
        <div className={classes.title} style={{color: colorUniverses(props.universe)}}>{props.universe + ' Ocean'}</div>
      </Grid>
      <Grid item xs={12} md={12} className={classes.root}>
        <div className={classes.title2} style={{color: colorUniverses(props.universe)}}>CMEMS monitoring and forecasting capacity: {props.area ? changeNameAreasForTitle(props.area) : ''}</div>
      </Grid>
    </Grid>
  );
}
