import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Crop169Icon from '@material-ui/icons/Crop169';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WebIcon from '@material-ui/icons/Web';
import {Widget} from '../widget1';
import {WidgetChart} from '../widgetChart';
import {TopPanel} from '../topPanel';


const style = (color) => {
  switch (color) {
    case 'BLUE':
      return <Crop169Icon fontSize="large" style={{ color: 'blue'}} />
    case 'GREEN':
      return <Crop169Icon fontSize="large" style={{ color: 'green'}} />
    case 'WHITE':
      return <Crop169Icon fontSize="large" style={{ color: 'grey'}} />
    default:
      return <Crop169Icon fontSize="large" style={{ color: 'blue'}} />
  }
}

export function UniversePanelView(props){

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <TopPanel/>
        </Grid>
      </Grid>

      <Card style={{backgroundColor: props.universe ? props.universe.color : '#92AFCD'}}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={1} md={1}>
            {style(props.universe && props.universe.name)}
            {/* Props color */}
          </Grid>
          <Grid item xs={1} md={1}>
            <h3>{props.universe ? props.universe.name : "BLUE"}</h3>
            {/* Props color */}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={8}>
            <Widget/>
          </Grid>
          <Grid item xs={12} md={4}>
            <WidgetChart/>
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
            <WidgetChart/>
          </Grid>
          <Grid item xs={12} md={4}>
            <WidgetChart/>
          </Grid>
          <Grid item xs={12} md={4}>
            <WidgetChart/>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}