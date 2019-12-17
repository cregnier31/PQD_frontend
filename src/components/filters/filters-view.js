import React from "react";
import {Selector} from './selector';

export function FilterView(props){
  return (
    <div>
      <h3>Criteria</h3>
      <Selector name="variable" parent="univers"/>
      <Selector name="dataset" parent="variable"/>
      <Selector name="product" parent="dataset"/>
      <Selector name="depth" parent="product"/>
      <Selector name="stat" parent="depth"/>
    </div>
  );
}