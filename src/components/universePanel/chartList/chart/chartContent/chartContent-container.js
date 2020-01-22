import React, {Component } from "react";
import { ChartContentView } from './chartContent-view';

export class ChartContentContainer extends Component {

  getSeriesData(series, want_all){
    if(want_all){
      return series.map((item) => item.content)
    }else{
      return series[0].content
    }
  }

  getSeriesName(series, want_all){
    if(want_all){
      return series.map((item) => item.variable_name)
    }else{
      return series[0].variable_name
    }
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
    const series_data = this.getSeriesData(this.props.data, this.props.see_all)
    const series_name = this.getSeriesName(this.props.data, this.props.see_all)
    return (
      <ChartContentView 
        series_data={series_data} 
        series_name={series_name}
        amplitude={this.getAmplitude(series_data)}
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
}