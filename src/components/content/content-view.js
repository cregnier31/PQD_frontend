import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {Widget} from '../widget1';
import {Panel} from '../panel';
import {Drawer} from '../drawer';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#92AFCD',
  },
}));

export function ContentView(props){
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Panel/>
        </Grid>
      </Grid>

      <Card className={classes.card}>
        <h3>BLUE</h3>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Widget/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Widget/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Widget/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Widget/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Widget/>
          </Grid>
        </Grid>
      </Card>
      <Drawer />
    </div>
  );
}