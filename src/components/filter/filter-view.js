import React from "react";
import Filter from "./filter-styles";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export function FilterView(props){
  return (
    <div>
      <h3>Filters (3)</h3>
      <InputLabel id="filter1">Filter 1</InputLabel>
      <Filter
          labelId="filter1"
          id="filter1"
          value="filter1"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Filter>
      <InputLabel id="filter2">Filter 2</InputLabel>
      <Filter
        labelId="filter2"
        id="filter2"
        value="filter2"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Filter>
      <InputLabel id="filter3">Filter 3</InputLabel>
      <Filter
        labelId="filter3"
        id="filter3"
        value="filter3"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Filter>
    </div>
  );
}