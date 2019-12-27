import React from "react";
import FormControl from '@material-ui/core/FormControl';

export const SelectorView = props => (
  <div>
    <FormControl>
      <label>{props.name}
        <select value={props.value} onChange={ event => {props.updateValue(event.target.value)}}>
          <option default value="">Choose one</option>
          {props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </label>
    </FormControl>
  </div>
)