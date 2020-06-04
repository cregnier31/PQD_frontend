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
  WhiskerSeries,
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
      style={{paddingLeft: 10}}
      height={280} 
      stackby="y"
      xType="ordinal"
    >
      <HorizontalGridLines/>
      <XAxis tickLabelAngle={0}  style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}/>
      <YAxis style={{fontSize: 12, fontWeight: 'bold', color: 'black'}} />
      <VerticalBarSeries key="VerticalBarSeries" barWidth='0.5' color='Tomato' onNearestX={_onNearestX} data={props.data}/>
      <WhiskerSeries key="WhiskerSeries" color='blue' data={props.data}/>
      <Crosshair key="crosshair" values={crosshairValues}>
        <div style={{background: '#273b4b', border: '1px solid white', borderRadius: 15, fontSize: 10, color: 'white', width:140, textAlign: 'center'}}>
          {crosshairValues.map((data, index) => 
            <p style={{fontWeight: 'bold'}} key={index}>{typeof(data) !== "undefined" && data['x']}: {typeof(data) !== "undefined" && parseFloat(data['y']*100).toFixed(0)}%</p>
          )}
        </div>
      </Crosshair>
    </FlexibleXYPlot>
  )
}
