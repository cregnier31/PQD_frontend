import React from "react";
import {Selector} from './selector';
import Button from "@material-ui/core/Button";

export function FilterView(props){
  return (
    <div>
      <h3>Criteria</h3>
      <Selector items={[]} name="variable" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="dataset" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="product" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="depth" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="stat" updateValue={(name, value) => this.props.set(name, value)}/>
      <Button onClick={() => props.clear()}>Clear</Button>
    </div>
  );
}