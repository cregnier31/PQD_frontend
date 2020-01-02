import React from "react";
import Grid from '@material-ui/core/Grid';
import {Widget} from '../widget1';

export function ContentView(props){
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Widget/>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Widget/> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Widget/> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Widget/> */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Widget/> */}
        </Grid>
      </Grid>
    </div>
  );
}