import React, { Component } from "react";
import {AppView} from "./app-view";
import {config} from "./../../utils";

export class AppContainer extends Component {

  async componentDidMount() {
    const options = {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({}),
    }
    fetch(config['urls']['filters'], options)
    .then(response => response.json()) 
    .then(data => {
      this.props.setData(data)
    })
  }

  render() {
    return <AppView/>;
  }
}