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
    const today = new Date()
    var displayDate = new Date()
    displayDate.setUTCMonth(today.getUTCMonth()-1)
    const month = displayDate.getUTCMonth()+1
    const year = displayDate.getFullYear()
    var args = {}
    var options = {}
    var url = ""
    if(this.props.kind === "INSITU"){
      // TODO: pass month and year to request
      // args = {"area": this.props.area, "what": "kpi2b", "month": month, "year": year}
      args = {"area": this.props.area, "what": "kpi2b"}
      options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
      url = config['urls']['kpi_insitu']
    }
    if(this.props.kind === "SAT"){
      // TODO: pass month and year to request
      // args = {"area": this.props.area, "month": month, "year": year}
      args = {"area": this.props.area}
      options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
      url = config['urls']['kpi_sat']
    }
    if(this.props.kind === "SKILL_SCORE"){
      // TODO: pass month and year to request
      // args = {"area": this.props.area, "variable": this.props.variable, "dataset": this.props.dataset, "product": this.props.product, "month": month, "year": year}
      args = {"area": this.props.area}
      if(this.props.variable !== ""){
        args["variable"] = this.props.variable
      }
      if(this.props.dataset !== ""){
        args["dataset"] = this.props.dataset
      }
      if(this.props.product !== ""){
        args["product"] = this.props.product
      }
      options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
      url = config['urls']['kpi_scores']
    }
    fetch(url, options)
    .then(response => response.json())
    .then( result => {
      this.setState({...this.state, data: result, isFetching: false})
    })
    .catch(e => {
        console.log(e, url);
        this.setState({...this.state, isFetching: false});
    });
  }

  componentDidMount(){
    this.fetchKpisWithFetchAPI()
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.fetchKpisWithFetchAPI()
    }
  }

  render() {
    return <ChartView {...this.props} data={this.state['data']}/>;
  }
}