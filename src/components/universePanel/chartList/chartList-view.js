import React from "react";
import Grid from '@material-ui/core/Grid';
import { Chart } from "./chart";

export function ChartListView(props){
  var list = []
  const kinds = ["SAT", "INSITU", "SKILL_SCORE"]
  kinds.map(kind => {
    return list.push(
      <Grid key={kind} item xs={12} md={4}>
        <Chart universe={props.universe} kind={kind}/>
      </Grid>
    )
  })
  return (
    <Grid container>
      {list}
    </Grid>
  )
}
