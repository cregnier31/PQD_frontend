import React from "react";
import Grid from '@material-ui/core/Grid';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import { color } from '../../../utils';

export function TitleRawView(props){
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={1} md={1}>
        <PanoramaFishEyeRoundedIcon fontSize="large" style={{ color: color[props.universe]['icon']}} />
      </Grid>
      <Grid item xs={1} md={1}>
        <h3 style={{fontFamily: 'ccl-heading--h3'}}>{props.universe}</h3>
      </Grid>
    </Grid>
  );
}