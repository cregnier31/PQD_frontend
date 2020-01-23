import React from "react";
import Grid from '@material-ui/core/Grid';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import { color } from '../../../utils';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'ccl-heading--h3',
    marginLeft: '5px'
  },
  root: {
    display: 'flex',
    marginLeft: '10px',
    height: '40px',
    marginTop: '10px'
  }
}));

export function TitleRawView(props){
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={4} md={4} className={classes.root}>
        <PanoramaFishEyeRoundedIcon fontSize="large" style={{ color: color[props.universe]['icon']}} />
        <div className={classes.title}>{props.universe}</div>
      </Grid>
    </Grid>
  );
}