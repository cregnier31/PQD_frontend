import React, { useState  } from "react";
import './../../../../../../node_modules/react-vis/dist/style.css';
import {  
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  LineSeries,
} from 'react-vis';

export function ChartContentView(props){
  const [crosshairValues, setCrosshairValues] = useState([])

  const _onMouseLeave = () => {
    setCrosshairValues([])
  };
  
  const _onNearestX = (value, {index}) => {
    const to_display = [props.data[index]]
    setCrosshairValues(to_display)
  };

  const GraphList = (data) => {
    if(!Array.isArray(data[0])){
      return (<VerticalBarSeries key="VerticalBarSeries" onNearestX={_onNearestX} data={data}/>)
    }
    var list = []
    list = data.map((elem, index) => {
      return <LineSeries key={index} data={elem}/>
    })
    list.push(<Crosshair key="crosshair" values={crosshairValues}/>)
    return list
  }
  
  return (
    <XYPlot 
      onMouseLeave={_onMouseLeave} 
      width={props.width} 
      height={props.height} 
      yDomain={[props.amplitude['min'], props.amplitude['max']]} 
      xType="ordinal"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45}/>
      <YAxis />
      {GraphList(props.data)}
    </XYPlot>
  )
}