import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PanoramaFishEyeRoundedIcon from '@material-ui/icons/PanoramaFishEyeRounded';
import { color } from '../../../utils';

export function TitleRawView(props){
  return (
    <Card style={{backgroundColor: color[props.universe]['background']}}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={1} md={1}>
          <PanoramaFishEyeRoundedIcon fontSize="large" style={{ color: color[props.universe]['icon']}} />
        </Grid>
        <Grid item xs={1} md={1}>
          <h3>{props.universe}</h3>
        </Grid>
      </Grid>
    </Card>
  );
}