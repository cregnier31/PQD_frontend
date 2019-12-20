import React, { Component } from "react";
import {FiltersView} from "./filters-view";

export class FiltersContainer extends Component {

  render() {
    return (
      <FiltersView 
        data={this.props.data} 
        filters={this.props.filters} 
        set={(name, value) => this.props.set(this.props.univers, name, value)} 
        apply={() => this.props.apply(this.props.univers)}
      />
    );
  }
}