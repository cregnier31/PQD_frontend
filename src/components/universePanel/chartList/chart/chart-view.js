import React, { useState } from "react";
import Card from "./chart-styles";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Widget} from './../../widget';
import {ChartContentSat} from './chartContentSat';
import {ChartContentInSitu} from './chartContentInSitu';
import {ScoreContent} from './scoreContent';
import {changeNameWidget, changeTooltipWidget} from '../../../../utils';
import './chart.css';
const screen = window.screen.width;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  click: {
    float: 'left',
    marginRight: '0.5em',
    marginTop: '0.35em',
  },
  label: {
    fontSize: '16px',
    fontFamily: 'ccl-paragraph--ms',
    float: 'right',
    marginRight: '2em',
    marginTop: '0.5em',
    fontWeight: 'bold',
    color: '#9E1033'
  }
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 33,
    height: 18,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#273b4b',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 16,
    height: 16,
    border: '0.1px solid grey'
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #273b4b`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


export function ChartView(props){
  const [see_all, setSeeAll] = useState(true)
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedOn: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSeeAll(value);
  };

  if( typeof(props.data) ==="undefined"){
    return (<Card style={{opacity: 0.4}}><Widget title="No Data" smallContent={null} bigContent={null} /></Card>);
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

  const noData = (kind, data) => {
    if(kind === 'SKILL_SCORE' && data.length === 0) {
      return '0.4'
    }
    if(kind === 'INSITU' && data.length === 0) {
      return '0.4'
    }
    if(kind === 'SAT' && data.length === 0) {
      return '0.4'
    }
  }
  return (
    <Card data-tut={takeATour(props.kind)} style={{opacity: noData(props.kind, props.data)}}>
      {props.kind ==="SAT" &&
        <Widget 
          title={changeNameWidget(props.kind)}
          info={changeTooltipWidget(props.kind)}
          smallContent={<ChartContentSat {...props} see_all={see_all} height={screen > 1900 ? 230 : 220} width={500}/>}
          bigContent={<ChartContentSat {...props} see_all={see_all} height={500} width={1000}/>}
        />
      }
      {props.kind === "INSITU" &&
        <Widget
          title={changeNameWidget(props.kind)}
          info={changeTooltipWidget(props.kind)}
          smallContent={<ChartContentInSitu {...props} see_all={see_all} height={screen > 1900 ? 230 : 200} width={350}/>}
          bigContent={<ChartContentInSitu {...props} see_all={see_all} height={500} width={1000}/>}
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
          <IOSSwitch checked={state.checkedOn} onChange={handleChange} name="checkedOn" />
          Show all parameters
        </label>
      }
    </Card>
  );
}
