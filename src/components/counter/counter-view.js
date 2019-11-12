import React from "react";
import Button from "./counter-styles";

export function CounterView(props){
  return (
    <div>
      <div>Count => {props.value}</div>
      <div>
        <Button onClick={() => props.increment()}>+1</Button>
        <Button onClick={() => props.decrement()}>-1</Button>
        <Button onClick={() => props.onReset()}>Reset</Button>
      </div>
    </div>
  );
}