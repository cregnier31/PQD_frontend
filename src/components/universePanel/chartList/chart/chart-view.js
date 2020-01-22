import React, { useState } from "react";
import Card from "./chart-styles";
import { makeStyles } from '@material-ui/core/styles';
import {Widget} from './../../widget';
import {ChartContent} from './chartContent';
import {changeNameWidget, changeTooltipWidget} from '../../../../utils';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  label: {
    fontSize: '20px',
    fontFamily: 'ccl-paragraph--ms'
  }
}));

export function ChartView(props){
  const [see_all, setSeeAll] = useState(true)
  const classes = useStyles();

  if( typeof(props.data) ==="undefined"){
    return (<Card><Widget title="No Data" smallContent={null} bigContent={null} /></Card>);
  }

  const toggle = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSeeAll(value);
  }

  return (
    <Card>
      <Widget 
        title={changeNameWidget(props.kind)}
        info={changeTooltipWidget(props.kind)}
        smallContent={<ChartContent see_all={see_all} height={200} width={350} data={props.data} />}
        bigContent={<ChartContent see_all={see_all} height={300} width={1200} data={props.data} />}
      />
      <label className={classes.label} >
        Show all parameters :
        <input name="see_all" type="checkbox" checked={see_all} onChange={toggle} />
      </label>
    </Card>
  );
}