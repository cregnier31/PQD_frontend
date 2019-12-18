import React, { Component } from "react";
import {FiltersView} from "./filters-view";

export class FiltersContainer extends Component {
  constructor(props) {
    super(props);
    this.set = this.set.bind(this)
    this.clear = this.clear.bind(this)
  }

  set(name, value){
    this.props.set(this.props.univers, name, value)
  }

  clear(){
    this.props.clear(this.props.univers)
  }

  render() {
    return <FiltersView set={(name, value) => this.props.set(name, value)} clear={this.props.clear()}/>;
  }
}