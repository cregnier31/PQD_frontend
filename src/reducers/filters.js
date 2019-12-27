const defaultValues = {
  variable: 15,
  dataset: 92,
  product: 308,
  depth: 455,
  stat: 540,
  plot_type: 507,
}

const defaultFiltersValuesState = {
  zone: {
    area: 14,
    subarea: 135,
  },
  univers: {
    BLUE: defaultValues,
    GREEN: defaultValues,
    WHITE: defaultValues
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
          newState["univers"][action.id][filtersOrder[i]] = ""
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
      newState["zone"][action.what] = action.value
      break;
    default:
      break;
  }
  return newState;
};