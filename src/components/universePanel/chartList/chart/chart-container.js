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
    const args = {"area": this.props.area, "what": "kpi2b", "kind": this.props.kind}
    const options = {method: "post", headers: {'Content-Type':'application/json'}, body: JSON.stringify(args)}
    fetch(config['urls']['kpi'], options)
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
    return <ChartView {...this.props} data={this.state['data'][this.props.kind]}/>;
  }
}