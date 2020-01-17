import React, {Component, useState, useEffect  } from "react";
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

class ChartContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
    };
  }

  getData(data){
    var res = []
    if( typeof(data) !=="undefined"){
      if(this.props.see_all){
        res = data.map((item) => {
          return item
        })
      }else{
        res = data[0]
      }
    }
    return res
  }

  _onMouseLeave = () => {
    this.setState({crosshairValues: []});
  };
  
  _onNearestX = (value, {index}) => {
    const to_display = [this.props.data[index]]
    this.setState({crosshairValues: to_display});
  };
  
  getAmplitude(data){
    if(typeof(data) === "undefined"){
      return {max: -Infinity, min: Infinity}
    }
    var all_data = []
    if(data.length === 1){
      all_data = data
    }else{
      data.map(item => {
        if(Array.isArray(item)){
          item.map(obj => {
            all_data.push(obj)
          })
        }else{
          all_data.push(item)
        }
      }) 
    }
    return all_data.reduce(
      (res, row) => {
        return {
          max: Math.max(res.max, row.y),
          min: Math.min(res.min, row.y)
        }
      },
      {max: -Infinity, min: Infinity}
    )
  }

  GraphList = (data) => {
    var list = []
    if(typeof(data) === "undefined"){
      return list
    }
    if(!Array.isArray(data[0])){
      list.push(<VerticalBarSeries key="VerticalBarSeries" onNearestX={this._onNearestX} data={data}/>)
    }else{
      list = this.props.data.map((elem, index) => {
        return <LineSeries key={index} data={elem}/>
      })
      list.push(<Crosshair key="crosshair" values={this.state.crosshairValues}/>)
    }
    return list
  }
  
  render() {
    const dataToDisplay = this.getData(this.props.data)
    return (
      <XYPlot 
        onMouseLeave={this._onMouseLeave} 
        width={this.props.width} 
        height={this.props.height} 
        yDomain={[this.getAmplitude(dataToDisplay)['min'], this.getAmplitude(dataToDisplay)['max']]} 
        xType="ordinal"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45}/>
        <YAxis />
        {this.GraphList(dataToDisplay)}
      </XYPlot>
    );
  }
}

export function ChartView(props){
  const [see_all, setSeeAll] = useState(false)

  if( typeof(props.data) ==="undefined"){
    return (
      <Card>
        <Widget 
          title="No Data"
          smallContent={null}
          bigContent={null}
        />
      </Card>
    );
  }

  const data = props.data.map((item) => {
    return item.content
  })

  const toggle = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setSeeAll(value);
  }

  return (
    <Card>
      <Widget 
        title={props.kind}
        smallContent={<ChartContent see_all={see_all} height={200} width={350} data={data} />}
        bigContent={<ChartContent see_all={see_all} height={500} width={750} data={data} />}
      />
      <label>
          See all variable :
          <input
            name="see_all"
            type="checkbox"
            checked={see_all}
            onChange={toggle} />
        </label>
    </Card>
  );
}