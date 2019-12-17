import {getActiveFiltersTree} from '../utils'

const defaultFiltersValuesState = {
  area: 1,
  subarea: 2,
  univers: 3,
  variable: 4,
  dataset: 5,
  product: 6,
  depth: 7,
  stat: 8,
  plot_type: 9,
};

export const selectorsReducer = (state = defaultFiltersValuesState, action, data) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "DEFINE_ACTIVE_FILTER":
      newState[action.name] = action.value
      break;
    default:
      break;
  }
  return newState;
};