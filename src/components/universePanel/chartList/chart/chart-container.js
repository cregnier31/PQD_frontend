import React, { Component } from "react";
import {ChartView} from "./chart-view";

export class ChartContainer extends Component {

  render() {
    return <ChartView data={this.props.data} kind={this.props.kind} />;
  }
}