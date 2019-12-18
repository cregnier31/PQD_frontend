const defaultFiltersValuesState = {
  zone: {
    area: 1,
    subarea: 2,
  },
  univers: {
    6: {
      variable: 4,
      dataset: 5,
      product: 6,
      depth: 7,
      stat: 8,
      plot_type: 9,
    },
    7: {
      variable: 4,
      dataset: 5,
      product: 6,
      depth: 7,
      stat: 8,
      plot_type: 9,
    },
    8: {
      variable: 4,
      dataset: 5,
      product: 6,
      depth: 7,
      stat: 8,
      plot_type: 9,
    }
  }
  
};

export const filtersReducer = (state = defaultFiltersValuesState, action, data) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERS_FILTER":
      newState["univers"][action.id][action.name] = action.value
      break;
    case "CLEAR_UNIVERS_FILTER":
      const temp = Object.keys(newState["univers"][action.id]).map(key => null);
      newState["univers"][action.id] = temp
      break;
    case "SET_ZONE_FILTER":
      newState["zone"][action.what][action.name] = action.value
      break;
    default:
      break;
  }
  return newState;
};