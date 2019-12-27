import React, { Component } from "react";
import {HeaderView} from "./header-view";

export class HeaderContainer extends Component {

  render() {
    return (
      <HeaderView
        data={this.props.data} 
        filters={this.props.filters} 
        set={(what, value) => this.props.set(what, value)} />
    )
  }
}