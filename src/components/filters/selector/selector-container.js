import React, { Component } from "react";
import {SelectorView} from "./selector-view";

export class SelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(value){
    this.props.updateValue(this.props.name, value)
  }

  render() {
    return (
      <SelectorView 
        items={this.props.items} 
        name={this.props.name} 
        value={this.props.value} 
        updateValue={(value) => this.updateValue(value)}
      />
    )
  }
}