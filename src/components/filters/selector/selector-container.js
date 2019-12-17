import React, { Component } from "react";
import {SelectorView} from "./selector-view";
import {getActiveFiltersTree} from '../../../utils'


export class SelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this)
    this.possible_values = getActiveFiltersTree(this.props.parent, this.props.parent_value)
  }

  setValue(value){
    this.props.defineActiveFilter(this.props.name, value)
  }

  render() {
    return <SelectorView name={this.props.name} value={this.props.value} possible_values={this.possible_values} setValue={ value => this.setValue(value)}/>;
  }
}