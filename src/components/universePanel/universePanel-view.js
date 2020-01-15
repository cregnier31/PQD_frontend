import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { WidgetMap } from './widgetMap';
import { TitleRaw } from './titleRaw';
import { ChartList} from './chartList';
import { LinkRaw } from './linkRaw';
import { Plot } from './plot';
import { color } from './../../utils';

export function UniversePanelView(props){
  return (
    <Card style={{backgroundColor: color[props.universe]['background'], marginTop: '20px' }}>
      <TitleRaw universe={props.universe}/>
      <ChartList universe={props.universe}/>
      <Divider />
      <LinkRaw />
      <Grid container>
        <Grid item xs={12} md={8}>
          <WidgetMap area={props.area} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Plot universe={props.universe}/>
        </Grid>
      </Grid>
    </Card>
  );
}