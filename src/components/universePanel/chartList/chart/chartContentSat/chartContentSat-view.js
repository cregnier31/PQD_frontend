import React, { useState  } from "react";
import * as d3 from "d3";
import './../../../../../../node_modules/react-vis/dist/style.css';
import {  
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  LineSeries,
  LineMarkSeries,
  FlexibleXYPlot,
  DiscreteColorLegend,
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
    if(isMultipleSeries()){
      list = data.map((elem, index) => {
        if(index === 0){
          return <LineMarkSeries onNearestX={_onNearestX} key={index} data={elem} size='2px' strokeWidth='1.px'/>
        }else{
          return <LineMarkSeries key={index} data={elem} strokeWidth='1.6px' size='1.8px' />
        }
      })
    }else{
      list.push(<VerticalBarSeries key="VerticalBarSeries" onNearestX={_onNearestX} data={data}/>)
    }
    list.push(<Crosshair key="crosshair" values={crosshairValues}>
      <div style={{background: '#273b4b', border: '1px solid white', borderRadius: 15, fontSize: 10, color: 'white', width:80, textAlign: 'center'}}>
        {crosshairValues.map((serie, index) => 
          <p style={{fontWeight: 'bold'}} key={index}>{props.series_name[index]}: {typeof(serie) !== "undefined" && serie['y']}</p>
        )}
      </div>
    </Crosshair>
    )
    return list
  }
  return (
    <FlexibleXYPlot
      onMouseLeave={_onMouseLeave}
      style={{paddingLeft: 10}}
      height={props.height} 
      yDomain={[props.amplitude['min'], props.amplitude['max']]} 
      xType="ordinal"
    >
      <HorizontalGridLines />
      <XAxis
        tickValues={props.series_labels}
        tickLabelAngle={-20}
        style={{fontSize: 10}}
        tickPadding={10}
      />
      <YAxis tickFormat={tick => d3.format('.1s')(tick)} tickPadding={4} style={{fontSize: 13, fontWeight: 'bold'}} />
      {GraphList(props.series_data)}
      <DiscreteColorLegend items={props.series_name} orientation='horizontal' style={{fontWeight: 'bold', fontSize: 12, position: 'absolute', left: '140px', top: '230px', height: 60, borderRadius:15}} />
    </FlexibleXYPlot>
  )
}
