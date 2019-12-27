import React, { Component } from "react";
import {FiltersView} from "./filters-view";

export class FiltersContainer extends Component {

  async get_plot() {
    const url = "http://127.0.0.1:8000/data/plot"
    const args = {
      "area": this.props.zone["area"],
      "subarea": this.props.zone["subarea"],
      "univers": this.props.univers,
      "variable": this.props.filters["variable"],
      "dataset": this.props.filters["dataset"],
      "product": this.props.filters["product"],
      "depth": this.props.filters["depth"],
      "stat": this.props.filters["stat"],
      "plot_type": this.props.filters["plot_type"]
    }
    const options = {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(args),
    }
    fetch(url, options)
    .then(response => response.json())
    .then( data => {
      if("filename" in data){
        alert(data["filename"])
      }
    })
  }

  render() {
    return (
      <FiltersView 
        data={this.props.data} 
        filters={this.props.filters} 
        set={(name, value) => this.props.set(this.props.univers, name, value)} 
        apply={() => this.get_plot()}
      />
    );
  }
}