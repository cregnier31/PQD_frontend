import React from "react";
import Select from "./selector-styles";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export const SelectorView = props => (
  <div>
    <FormControl>
      <InputLabel id={props.name}>{props.name}</InputLabel>
      <Select
        value={ props.value }
        onChange={ event => props.setValue(event.target.value) }
      >
        {props.items.map((item) =>
          <MenuItem value={item.value}>{item.name}</MenuItem>
        )}
      </Select>
    </FormControl>
  </div>
)