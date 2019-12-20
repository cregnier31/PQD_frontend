import React from "react";
import {Selector} from './selector';
import Button from "@material-ui/core/Button";

const SelectorElement = ({name, items, value, set}) => {
  return (
    <Selector 
      items={items} 
      name={name}
      value={value}
      updateValue={(what, value) => set(what, value)}
    />
  );
}

const SelectorList = ({props}) => {
  const data = props.data
  const filters = props.filters
  if(data.variables){
    console.log("data :")
    console.log(data)
    console.log("filters :")
    console.log(filters)
    var list = []
    // Select Variable
    list.push(<Selector key="variable_selector" items={data.variables} name="variable" value={filters['variable']} updateValue={(n, v) => props.set(n, v)}/>)
    // Select Dataset
    if(filters['variable'] != null && data.variables.filter(item => item.id === filters['variable'])){
      const variable_tree = data.variables.filter(item => item.id === filters['variable'])[0]
      list.push(
        <Selector 
          key="dataset_selector" 
          items={variable_tree.datasets} 
          name="dataset" 
          value={filters['dataset']} 
          updateValue={(n, v) => props.set(n, v)}
        />
      )
      // Select Product
      if(filters['dataset'] != null && variable_tree.datasets.filter(item => item.id === filters['dataset'])){
        const dataset_tree = variable_tree.datasets.filter(item => item.id === filters['dataset'])[0]
        list.push(
          <Selector 
            key="product_selector" 
            items={dataset_tree.products} 
            name="product" 
            value={filters['product']} 
            updateValue={(n, v) => props.set(n, v)}
          />
        )
        // Select Depth
        if(filters['product'] != null && dataset_tree.products.filter(item => item.id === filters['product'])){
          const product_tree = dataset_tree.products.filter(item => item.id === filters['product'])[0]
          list.push(
            <Selector 
              key="depth_selector" 
              items={product_tree.depths} 
              name="depth" 
              value={filters['depth']} 
              updateValue={(n, v) => props.set(n, v)}
            />
          )
          // Select Stat
          if(filters['depth'] != null && dataset_tree.products.filter(item => item.id === filters['depth'])){
            const depth_tree = product_tree.depths.filter(item => item.id === filters['depth'])[0]
            list.push(
              <Selector 
                key="stat_selector" 
                items={depth_tree.stats} 
                name="stat" 
                value={filters['stat']} 
                updateValue={(n, v) => props.set(n, v)}
              />
            )
          }
        }
      }
    }
    return list
  }else{
    return null
  }
}

export function FiltersView(props){
  return (
    <div>
      <h3>Criteria</h3>
      <SelectorList props={props}/>
      <Button onClick={() => props.apply()}>Apply</Button>
    </div>
  );
}