import React, { Component } from "react";
import {ChartView} from "./chart-view";
import {config} from "./../../../../utils";

export class ChartContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      isFetching: true
    }
  }

  fetchKpisWithFetchAPI(){
    this.setState({...this.state, isFetching: true});
    var args = {}
    var options = {}
    var url = ""
    if(this.props.kind === "INSITU"){
      args = {"area": this.props.area, "what": "kpi2b"}
      options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
      url = config['urls']['kpi_insitu']
    }
    if(this.props.kind === "SAT"){
      args = {"area": this.props.area}
      options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
      url = config['urls']['kpi_sat']
    }
    if(this.props.kind === "SKILL_SCORE"){
      args = {"area": this.props.area, "what": "kpi2b"}
      options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
      url = config['urls']['kpi_skill_score']
    }
    fetch(url, options)
    .then(response => response.json())
    .then( result => {
      this.setState({...this.state, data: result, isFetching: false})
    })
    .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: false});
    });
  }

  componentDidMount(){
    this.fetchKpisWithFetchAPI()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.area !== this.props.area) {
      this.fetchKpisWithFetchAPI()
    }
  }

  render() {
    return <ChartView {...this.props} data={this.state['data']}/>;
  }
}