import React, { Component } from "react";
import {FiltersView} from "./filters-view";
import {config} from "./../../utils";

export class FiltersContainer extends Component {

  async get_plot() {
    const args = {
      "area": this.props.zone["area"],
      "universe": this.props.universe,
      "variable": this.props.filters["variable"],
      "dataset": this.props.filters["dataset"],
      "product": this.props.filters["product"],
      "subarea": this.props.filters["subarea"],
      "depth": this.props.filters["depth"],
      "stat": this.props.filters["stat"],
      "plot_type": this.props.filters["plot_type"]
    }
    const options = {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(args),
    }
    fetch(config['urls']['plot'], options)
    .then(response => response.json())
    .then( data => {
      if("filename" in data){
        this.props.setPlot(this.props.universe, data["filename"])
      }
    })
  }

  async get_kpi(){
    const args = {
      "area": this.props.zone["area"],
      "what": "kpi2b",
      "variable": this.props.filters["variable"]
    }
    const options = {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(args),
    }
    fetch(config['urls']['kpi'], options)
    .then(response => response.json())
    .then( data => {
      if(data.length){
        this.props.setKpis(this.props.universe, data)
      }
    })
  }

  render() {
    return (
      <FiltersView 
        data={this.props.data} 
        filters={this.props.filters} 
        set={(name, value) => this.props.set(this.props.universe, name, value)} 
        apply={() => {
          this.get_kpi()
          this.get_plot()
        }}
      />
    );
  }
}