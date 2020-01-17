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
    var to_display = [value]
    if(isMultipleSeries()){
      to_display = props.data.map( item => item[index])
    }
    setCrosshairValues(to_display)
  };

  function isMultipleSeries(){
    return Array.isArray(props.data[0])
  }

  const GraphList = (data) => {
    var list = []
    if(isMultipleSeries()){
      list = data.map((elem, index) => {
        if(index === 0){
          return <LineSeries onNearestX={_onNearestX} key={index} data={elem}/>
        }else{
          return <LineSeries key={index} data={elem}/>
        }
      })
    }else{
      list.push(<VerticalBarSeries key="VerticalBarSeries" onNearestX={_onNearestX} data={data}/>)
    }
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