import React, { Component } from "react";
import {LeafletMapView} from "./leafletMap-view";

export class LeafletMapContainer extends Component {

  render() {
    return <LeafletMapView
      area={this.props.area} 
      subArea={this.props.subArea} 
      filtersReducer={this.props.filtersReducer} 
      open={this.props.open}
      showFloats={this.props.showFloats}
      setSubarea={this.props.setSubarea}
      universe={this.props.universe}
      />;
  }
}