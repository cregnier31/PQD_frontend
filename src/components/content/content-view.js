import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Crop169Icon from '@material-ui/icons/Crop169';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';
import {Widget} from '../widget1';
import {Panel} from '../panel';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#92AFCD', // Props color
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
        <Grid container direction="row" alignItems="center">
          <Grid item xs={1} md={1}>
            <Crop169Icon fontSize="large" style={{ color: 'blue'}} />
            {/* Props color */}
          </Grid>
          <Grid item xs={1} md={1}>
            <h3>Blue</h3>
            {/* Props color */}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={8}>
            <Widget/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Widget/>
          </Grid>
        </Grid>

        <Divider />

        <Grid container direction="row" alignItems="flex-start">
          <Grid item xs={4} md={4}>
            Sous titre
          </Grid>
          <Grid item xs={4} md={4}>
            <MenuBookIcon />
            Catalogue
          </Grid>
          <Grid item xs={4} md={4}>
            <WebIcon />
            Site producteur
          </Grid>
        </Grid>

        <Grid container>
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
    </div>
  );
}