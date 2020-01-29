import React, { Component } from "react";
import {HeaderView} from "./header-view";

export class HeaderContainer extends Component {

  render() {
    return (
      <HeaderView
        data={this.props.data} 
        area={this.props.area} 
        universe={this.props.universe}
        setArea={(value) => this.props.setArea(value)}
        setUniverse={(value) => this.props.setUniverse(value)}
        currentArea={this.props.currentArea}
        product={this.props.product}
        openTour={this.props.openTour}
        />
    )
  }
}