import React from "react";
import {Selector} from './selector';
import Button from "@material-ui/core/Button";

function get_selector(name, items, props){
  return (
    <Selector 
      key={name + "_selector"}
      items={items} 
      name={name}
      value={props.filters[name]} 
      updateValue={(n, v) => props.set(n, v)}
    />
  );
}

function filter_is_set_and_data_exists(filters, name, data){
  return (typeof(filters[name]) == "number" && data.filter(item => item.id === filters[name]))
}

const SelectorList = ({props}) => {
  const filters = props.filters
  if(props.data.variables){
    var list = []
    // Select Variable
    const variables = props.data.variables
    list.push(get_selector("variable", variables, props))
    // Select Dataset
    if(filter_is_set_and_data_exists(filters, "variable", variables)){
      const datasets = variables.filter(item => item.id === filters['variable'])[0].datasets
      list.push(get_selector("dataset", datasets, props))
      // Select Product
      if(filter_is_set_and_data_exists(filters, "dataset", datasets)){
        const products = datasets.filter(item => item.id === filters['dataset'])[0].products
        list.push(get_selector("product", products, props))
        // Select Depth
        if(filter_is_set_and_data_exists(filters, "product", products)){
          const depths = products.filter(item => item.id === filters['product'])[0].depths
          list.push(get_selector("depth", depths, props))
          // Select Stat
          if(filter_is_set_and_data_exists(filters, "depth", depths)){
            const stats = depths.filter(item => item.id === filters['depth'])[0].stats
            list.push(get_selector("stat", stats, props))
            // Select PlotType
            if(filter_is_set_and_data_exists(filters, "stat", stats)){
              const plot_types = stats.filter(item => item.id === filters['stat'])[0].plot_types
              list.push(get_selector("plot_type", plot_types, props))
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
  var displayButton = true
  Object.keys(props.filters).map(key => {
    if(props.filters[key] === ""){
      displayButton = false
    }
  })
  if(displayButton){
    return (<Button onClick={() => props.apply()}>Apply</Button>)
  }
}

export function FiltersView(props){
  return (
    <div>
      <h3>Criteria</h3>
      <SelectorList props={props}/>
      {get_validation_button(props)}
    </div>
  );
}