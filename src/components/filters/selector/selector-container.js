import React, { Component } from "react";
import {SelectorView} from "./selector-view";

export class SelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(value){
    var id = ""
    if(value.length){
      id = parseInt(value)
    }
    this.props.updateValue(this.props.name, id)
  }

  render() {
    return <SelectorView items={this.props.items} name={this.props.name} value={this.props.value} updateValue={(value) => this.updateValue(value)}/>
  }
}