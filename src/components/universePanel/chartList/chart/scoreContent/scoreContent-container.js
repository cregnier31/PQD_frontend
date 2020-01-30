import React, {Component } from "react";
import { ScoreContentView } from './scoreContent-view';

export class ScoreContentContainer extends Component {
  constructor(props){
    super(props)
    this.state= {
      data: [],
      series_name: []
    }
  }

  componentDidMount(){
    this.define_serie()
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.define_serie()
    }
  }

  define_serie(){
    const serie = this.getSeriesData(this.props.data, this.props.see_all)
    this.setState({series_data: serie['data'], series_name: serie['name']})
  }

  getSeriesData(series){
    var datas = []
    var names = []
    Object.keys(series).map(name=>{
      if(typeof(series[name]) === 'number'){
        datas.push({
          x: name,
          y: series[name]
        })
        names.push(name)
      }
      return null
    })
    return {data:datas, name:names}
  }


  render() {
    return (
      <ScoreContentView 
        data={this.state['series_data']} 
        name={this.state['series_name']}
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
}