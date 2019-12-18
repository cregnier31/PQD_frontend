import React, { Component } from "react";
import {SelectorView} from "./selector-view";

export class SelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(name, value){
    this.props.updateValue(name, value)
  }

  render() {
    return <SelectorView items={this.props.items} name={this.props.name} updateValue={(name, value) => this.updateValue(name, value)}/>
  }
}