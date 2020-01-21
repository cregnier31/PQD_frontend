import React from "react";
import {Selector} from './selector';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  title: {
    margin: '8px',
  }
}));

function get_selector(name, items, props){
  return (
    <Selector 
      key={name + "_selector"}
      items={items} 
      name={name}
      value={props.filters[name]} 
      updateValue={(n, v) => props.set(n, v)}
      filters={props.filters}
    />
  );
}

function filter_is_set_and_data_exists(filters, name, data){
  return data.filter(item => item.name === filters[name]).length
}

const SelectorList = ({props}) => {
  const filters = props.filters
  if(typeof(props.data) !== "undefined" && typeof(props.data.variables) !== "undefined"){
    var list = []
    // Select Variable
    const variables = props.data.variables
    list.push(get_selector("variable", variables, props))
    // Select Dataset
    if(filter_is_set_and_data_exists(filters, "variable", variables)){
      list.push(<p key="p">Validation expert metrics filters</p>)
      const datasets = variables.filter(item => item.name === filters['variable'])[0].datasets
      list.push(get_selector("dataset", datasets, props))
      // Select Product
      if(filter_is_set_and_data_exists(filters, "dataset", datasets)){
        const products = datasets.filter(item => item.name === filters['dataset'])[0].products
        list.push(get_selector("product", products, props))
        // Select Subarea
        if(filter_is_set_and_data_exists(filters, "product", products)){
          // Add filters category title
          list.push(<Divider key="divider" />)
          const subareas = products.filter(item => item.name === filters['product'])[0].subareas
          list.push(get_selector("subarea", subareas, props))
          // Select Depth
          if(filter_is_set_and_data_exists(filters, "subarea", subareas)){
            const depths = subareas.filter(item => item.name === filters['subarea'])[0].depths
            list.push(get_selector("depth", depths, props))
            // Select Stat
            if(filter_is_set_and_data_exists(filters, "depth", depths)){
              const stats = depths.filter(item => item.name === filters['depth'])[0].stats
              list.push(get_selector("stat", stats, props))
            }
          }
        }
      }
    }
    return list
  }
  return null
}

function get_validation_button(props){
  // If no data exists for this area/universe
  if(typeof(props.data) === "undefined"){
    return (<div>No Data for this Area/Universe</div>)
  }
  // If some filters are not selected yet
  var displayButton = true
  Object.keys(props.filters).map(key => {
    if(props.filters[key] === ""){
      displayButton = false
    }
    return null
  })
  if(displayButton){
    return (<Button onClick={() => props.apply()}>Apply</Button>)
  }
}

export function FiltersView(props){
  const classes = useStyles();

  return (
    <div>
      <h4 className={classes.title}>Criteria</h4>
      <Divider />
      <p>Generic quality information filters</p>
      <SelectorList props={props}/>
      {get_validation_button(props)}
    </div>
  );
}