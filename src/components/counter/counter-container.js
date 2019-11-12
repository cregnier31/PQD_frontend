import React, { Component } from "react";
import {CounterView} from "./counter-view";

export class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.resetCounter = this.resetCounter.bind(this)
  }

  resetCounter(){
    alert("Counter value will be set to 0");
    this.props.setToZero();
  }

  render() {
    return <CounterView value={this.props.count} increment={() => this.props.increment()} decrement={() => this.props.decrement()} onReset={() => this.resetCounter()}/>;
  }
}