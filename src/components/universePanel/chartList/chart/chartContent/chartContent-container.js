import React, {Component } from "react";
import { ChartContentView } from './chartContent-view';

export class ChartContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  getData(data){
    if(this.props.see_all){
      return data.map((item) => {
        return item
      })
    }
    return data[0]
  }

  getAmplitude(data){
    var all_data = []
    data.map(item => {
      if(Array.isArray(item)){
        item.map(obj => {
          all_data.push(obj)
          return null
        })
      }else{
        all_data.push(item)
      }
      return null
    }) 
    return all_data.reduce(
      (res, row) => { return { max: Math.max(res.max, row.y), min: Math.min(res.min, row.y) } },
      { max: -Infinity, min: Infinity }
    )
  }
  
  render() {
    const data = this.getData(this.props.data)
    return (
      <ChartContentView 
        data={data} 
        amplitude={this.getAmplitude(data)}
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
}