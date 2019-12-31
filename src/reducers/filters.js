const defaultFiltersValuesState = {
  zone: {
    area: 14,
    subarea: 135,
  },
  universe: {
    BLUE: {
      variable: "",
      dataset: "",
      product: "",
      depth: "",
      stat: "",
      plot_type: "",
    },
    GREEN: {
      variable: "",
      dataset: "",
      product: "",
      depth: "",
      stat: "",
      plot_type: "",
    },
    WHITE: {
      variable: "",
      dataset: "",
      product: "",
      depth: "",
      stat: "",
      plot_type: "",
    }
  }
};

const filtersOrder = ['variable', 'dataset', 'product', 'depth', 'stat', 'plot_type']

export const filtersReducer = (state = defaultFiltersValuesState, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERSE_FILTER":
      newState["universe"][action.id][action.name] = action.value
      var clearNext = false
      for(var i=0; i<filtersOrder.length; i++){
        if(clearNext){
          newState["universe"][action.id][filtersOrder[i]] = ""
        }
        if(action.name === filtersOrder[i]){
          clearNext = true
        }
      }
      break;
    case "APPLY_UNIVERSE_FILTER":
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
