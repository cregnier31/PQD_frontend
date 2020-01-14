const default_filters_values = {
  area: "global",
  BLUE: {
    variable: 56,
    dataset: 436,
    product: 36,
    subarea: 326,
    depth: 64,
    stat: 8,
    plot_type: 3,
  },
  GREEN: {
    variable: "",
    dataset: "",
    product: "",
    subarea: "",
    depth: "",
    stat: "",
    plot_type: "",
  },
  WHITE: {
    variable: "",
    dataset: "",
    product: "",
    subarea: "",
    depth: "",
    stat: "",
    plot_type: "",
  }
};

const filtersOrder = ['variable', 'dataset', 'product', 'subarea', 'depth', 'stat', 'plot_type']

export const filtersReducer = (state = default_filters_values, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERSE_FILTER":
      newState[action.universe][action.name] = action.value
      var clearNext = false
      for(var i=0; i<filtersOrder.length; i++){
        if(clearNext){
          newState[action.universe][filtersOrder[i]] = ""
        }
        if(action.name === filtersOrder[i]){
          clearNext = true
        }
      }
      break;
    case "SET_AREA_FILTER":
      newState["area"] = action.value
      const emptyObj = {
        variable: "",
        dataset: "",
        product: "",
        subarea: "",
        depth: "",
        stat: "",
        plot_type: "",
      }
      newState["BLUE"] = emptyObj
      newState["GREEN"] = emptyObj
      newState["WHITE"] = emptyObj
      break;
    default:
      break;
  }
  return newState;
};
