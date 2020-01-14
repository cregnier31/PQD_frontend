import React, { Component } from "react";
import {HeaderView} from "./header-view";

export class HeaderContainer extends Component {

  render() {
    return (
      <HeaderView
        data={this.props.data} 
        filters={this.props.filters} 
        universe={this.props.universe}
        set={(value) => this.props.set(value)}
        setUniverse={(value) => this.props.setUniverse(value)} />
    )
  }
}