import React, { Component } from "react";
import {AppView} from "./app-view";

export class AppContainer extends Component {

  componentDidMount() {
    const url = "http://127.0.0.1:8000/data/filters"
    const options = {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({}),
    }
    fetch(url, options)
    .then(response => response.json()) 
    .then(data => {this.props.setAllFilters(data)})
  }

  render() {
    return <AppView/>;
  }
}