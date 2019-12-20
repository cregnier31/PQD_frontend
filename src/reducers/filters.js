const nullValues = {
  variable: null,
  dataset: null,
  product: null,
  depth: null,
  stat: null,
  plot_type: null,
}

const defaultFiltersValuesState = {
  zone: {
    area: 1,
    subarea: 2,
  },
  univers: {
    BLUE: nullValues,
    GREEN: nullValues,
    WHITE: nullValues
  }
};

const filtersOrder = ['variable', 'dataset', 'product', 'depth', 'stat', 'plot_type']

export const filtersReducer = (state = defaultFiltersValuesState, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERS_FILTER":
      newState["univers"][action.id][action.name] = action.value
      var clearNext = false
      for(var i=0; i<filtersOrder.length; i++){
        if(clearNext){
          newState["univers"][action.id][filtersOrder[i]] = null
        }
        if(action.name === filtersOrder[i]){
          clearNext = true
        }
      }
      break;
    case "APPLY_UNIVERS_FILTER":
      // TODO get corresponding plot and save its name somewhere in store or not
      // and think about plot type which is constant and not displayed through selectors
      break;
    case "SET_ZONE_FILTER":
      newState["zone"][action.what][action.name] = action.value
      break;
    default:
      break;
  }
  return newState;
};