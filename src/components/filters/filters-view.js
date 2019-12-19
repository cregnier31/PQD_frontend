import React from "react";
import {Selector} from './selector';
import Button from "@material-ui/core/Button";

const SelectorList = ({data}) => {
  console.log(data)
  if(data.variables){
    console.log('HEREEEEEEEEEEE')
    const variables = data.variables
    const list = variables.map(variable => {
      return <Selector key={variable.id} items={variable.datasets} name="variable" updateValue={(name, value) => this.props.set(name, value)}/>
    });
    return list
  }else{
    return null
  }
}

export function FiltersView(props){
  return (
    <div>
      <h3>Criteria</h3>
      <SelectorList data={props.data}/>
      {/* <Selector items={[]} name="variable" updateValue={(name, value) => this.props.set(name, value)}/> */}
      <Selector items={[]} name="dataset" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="product" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="depth" updateValue={(name, value) => this.props.set(name, value)}/>
      <Selector items={[]} name="stat" updateValue={(name, value) => this.props.set(name, value)}/>
      <Button onClick={() => props.clear()}>Clear</Button>
    </div>
  );
}