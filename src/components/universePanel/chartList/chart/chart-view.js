import React, { useState } from "react";
import Card from "./chart-styles";
import { makeStyles } from '@material-ui/core/styles';
import {Widget} from './../../widget';
import {ChartContent} from './chartContent';
import {ScoreContent} from './scoreContent';
import {changeNameWidget, changeTooltipWidget} from '../../../../utils';
import './chart.css';
const screen = window.screen.width;
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
    fontFamily: 'ccl-paragraph--ms',
    float: 'right',
    marginRight: 10,
    color: '#ADB0B8'
  }
}));

export function ChartView(props){
  const [see_all, setSeeAll] = useState(true)
  const classes = useStyles();

  if( typeof(props.data) ==="undefined"){
    return (<Card style={{opacity: 0.4}}><Widget title="No Data" smallContent={null} bigContent={null} /></Card>);
  }

  const toggle = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSeeAll(value);
  }

  const takeATour = (kind) => {
    switch (kind) {
      case 'SAT':
        return "reactour__7"
      case 'INSITU':
        return "reactour__8"
      case 'SKILL_SCORE':
        return "reactour__9"
      default:
        return "reactour__7"
    }
  }
  return (
    <Card data-tut={takeATour(props.kind)}>
      {(props.kind === "INSITU"|| props.kind ==="SAT") &&
        <Widget 
          title={changeNameWidget(props.kind)}
          info={changeTooltipWidget(props.kind)}
          smallContent={<ChartContent {...props} see_all={see_all} height={screen > 1900 ? 230 : 200} width={350}/>}
          bigContent={<ChartContent {...props} see_all={see_all} height={300} width={1200}/>}
        />
      }
      {props.kind === "SKILL_SCORE" &&
        <Widget 
          title={changeNameWidget(props.kind)}
          info={changeTooltipWidget(props.kind)}
          smallContent={<ScoreContent {...props} see_all={see_all} height={screen > 1900 ? 230 : 200} width={350}/>}
          bigContent={<ScoreContent {...props} see_all={see_all} height={300} width={1200}/>}
        />
      }
      {props.kind === "INSITU" &&
        <label className={classes.label} >
          Show all parameters :
          <input name="see_all" type="checkbox" checked={see_all} onChange={toggle} />
        </label>
      }
    </Card>
  );
}