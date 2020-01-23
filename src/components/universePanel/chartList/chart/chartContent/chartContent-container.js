import React, {Component } from "react";
import { ChartContentView } from './chartContent-view';

export class ChartContentContainer extends Component {
  constructor(props){
    super(props)
    this.state= {
      series_data: [],
      series_name: [],
    }
  }

  componentDidMount(){
    this.define_series()
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.define_series()
    }
  }

  define_series(){
    const datas = this.getSeriesData(this.props.data, this.props.see_all)
    const names = this.getSeriesName(this.props.data, this.props.see_all)
    this.setState({series_data: datas, series_name: names})
  }

  getSeriesData(series, want_all){
    if(want_all){
      return series.map((item) => item.content)
    }else{
      var serie = []
      series.map((item) => {
        if(item.variable_name === this.props.variable){
          serie = item.content
        }
        return null
      })
      return serie
    }
  }

  getSeriesName(series, want_all){
    if(want_all){
      return series.map((item) => item.variable_name)
    }else{
      var name = []
      series.map((item) => {
        if(item.variable_name === this.props.variable){
          name.push(item.variable_name)
        }
        return null
      })
      return name
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
    return (
      <ChartContentView 
        series_data={this.state['series_data']} 
        series_name={this.state['series_name']}
        amplitude={this.getAmplitude(this.state['series_data'])}
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
}