import React, { Component } from "react";
import {PlotView} from "./plot-view";

export class PlotContainer extends Component {

  render() {
    return <PlotView data={this.props.data} />;
  }
}