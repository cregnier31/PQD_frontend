import React from "react";
import Card from "./plot-styles";
import { makeStyles } from '@material-ui/core/styles';
import {Widget} from './../widget';
import { config, infoPlot } from './../../../utils';

const useStyles = makeStyles(theme => ({
  content: {
    height: '100% !important',
    width:'100% !important',
    marginTop: '0x !important',
    marginBottom: '0px !important',
  }
}));

function ImagePlot(props){
  return(
    <img 
      src={config['urls']['png']+props.data}
      alt="Plot"
      width={props.width}
      height={props.height}
    />
  )
}

export function PlotView(props){
  const classes = useStyles();
  if( typeof(props.data) ==="undefined"){
    return null
  }
  return (
    <Card>
      <Widget
        title="Plot"
        info={infoPlot}
        smallContent={<div className={classes.content}> <ImagePlot width="100%" height="100%" data={props.data}/></div>}
        bigContent={<div className={classes.content}> <ImagePlot width="100%" height="100%" data={props.data}/> </div>}
      />
    </Card>
  );
}