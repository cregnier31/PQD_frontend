import React, { Component } from "react";
import {LinkRawView} from "./linkRaw-view";
import {config} from "./../../../utils";

export class LinkRawContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      isFetching: true
    }
  }

  fetchKpisWithFetchAPI(){
    this.setState({...this.state, isFetching: true});
    var options = {}
    var url = ""
    options = {method: "get"}
    url = config['urls']['product'] + this.props.product
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
    if(prevProps.product !== this.props.product) {
      this.fetchKpisWithFetchAPI()
    }
  }

  render() {
    return <LinkRawView {...this.props} data={this.state['data']}/>;
  }
}