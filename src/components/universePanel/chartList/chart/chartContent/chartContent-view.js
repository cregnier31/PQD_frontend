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
  FlexibleXYPlot,
} from 'react-vis';

export function ChartContentView(props){
  const [crosshairValues, setCrosshairValues] = useState([])

  const _onMouseLeave = () => {
    setCrosshairValues([])
  };
  
  const _onNearestX = (value, {index}) => {
    var to_display = [value]
    if(isMultipleSeries()){
      to_display = props.series_data.map( item => item[index])
    }
    setCrosshairValues(to_display)
  };

  function isMultipleSeries(){
    return Array.isArray(props.series_data[0])
  }

  const GraphList = (data) => {
    var list = []
    const arrayData = [[]];
    for(let i = 0; i < data[0].length; i++) {
      if(data[0][i].x.substring(data[0][i].x.length -2)%2 === 1) {
        arrayData[0].push(data[0][i]);
      }
    }
    if(isMultipleSeries()){
      list = arrayData.map((elem, index) => {
        if(index === 0){
          return <LineSeries onNearestX={_onNearestX} key={index} data={elem}/>
        }else{
          return <LineSeries key={index} data={elem}/>
        }
      })
    }else{
      for(let i = 0; i < data.length; i++) {
        if(data[i].x.substring(data[i].x.length -2)%2 === 1) {
          arrayData.push(data[i]);
        }
      }
      list.push(<VerticalBarSeries key="VerticalBarSeries" onNearestX={_onNearestX} data={arrayData}/>)
    }
    list.push(<Crosshair key="crosshair" values={crosshairValues}>
      <div style={{background: 'black'}}>
        <h3>Values:</h3>
        {crosshairValues.map((serie, index) => 
           <p>{props.series_name[index]}: {serie['y']}</p>
        )}
      </div>
    </Crosshair>
    )
    return list
  }
  return (
    <FlexibleXYPlot 
      onMouseLeave={_onMouseLeave}
      style={{marginLeft: 15}}
      height={props.height} 
      yDomain={[props.amplitude['min'], props.amplitude['max']]} 
      xType="ordinal"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45}/>
      <YAxis />
      {GraphList(props.series_data)}
    </FlexibleXYPlot>
  )
}