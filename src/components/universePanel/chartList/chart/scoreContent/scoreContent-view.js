import React, { useState  } from "react";
import './../../../../../../node_modules/react-vis/dist/style.css';
import {  
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  Crosshair,
  FlexibleXYPlot,
} from 'react-vis';

export function ScoreContentView(props){
  const [crosshairValues, setCrosshairValues] = useState([])

  const _onMouseLeave = () => {
    setCrosshairValues([])
  };
  
  const _onNearestX = (value, {index}) => {
    var to_display = [value]
    setCrosshairValues(to_display)
  };

  return (
    <FlexibleXYPlot 
      onMouseLeave={_onMouseLeave}
      style={{paddingLeft: 5}}
      height={props.height} 
      xType="ordinal"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45}  style={{fontSize: 7}}/>
      <YAxis style={{fontSize: 7}} />
      <VerticalBarSeries key="VerticalBarSeries" onNearestX={_onNearestX} data={props.data}/>
      <Crosshair key="crosshair" values={crosshairValues}>
        <div style={{background: 'black'}}>
          {crosshairValues.map((data, index) => 
            <p key={index}>{typeof(data) !== "undefined" && data['x']}: {typeof(data) !== "undefined" && data['y']}</p>
          )}
        </div>
      </Crosshair>
    </FlexibleXYPlot>
  )
}