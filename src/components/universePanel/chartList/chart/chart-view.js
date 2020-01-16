import React, {Component} from "react";
import Card from "./chart-styles";
import {Widget} from './../../widget';
import './../../../../../node_modules/react-vis/dist/style.css';
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


export default class ChartContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };
  }

  _onMouseLeave = () => {
    this.setState({crosshairValues: []});
  };

  _onNearestX = (value, {index}) => {
    // const to_display = [value]
    // if multiple values
    const to_display = [this.props.data[index]]
    this.setState({crosshairValues: to_display});
  };

  yDomain = this.props.data.reduce(
    (res, row) => {
      return {
        max: Math.max(res.max, row.y),
        min: Math.min(res.min, row.y)
      };
    },
    {max: -Infinity, min: Infinity}
  );

  render() {
    return (
      <XYPlot onMouseLeave={this._onMouseLeave} width={this.props.width} height={this.props.height} yDomain={[this.yDomain['min'], this.yDomain['max']]} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45}/>
        <YAxis />
        <VerticalBarSeries onNearestX={this._onNearestX} data={this.props.data} />
        <LineSeries onNearestX={this._onNearestX} data={this.props.data} />
        <Crosshair values={this.state.crosshairValues} />
      </XYPlot>
    );
  }
}

export function ChartView(props){
  if( typeof(props.data) ==="undefined"){
    return null
  }
  return (
    <Card>
      <Widget 
        title={props.kind}
        smallContent={<ChartContent height={200} width={350} data={props.data[0].content} />}
        bigContent={<ChartContent height={500} width={750} data={props.data[0].content} />}
      />
    </Card>
  );
}