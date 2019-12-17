import {getActiveFiltersTree} from '../utils'
export const filtersReducer = (state = {}, action, data) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_ALL_FILTERS":
      newState["filters"] = action.data
      break;
    default:
      break;
  }
  return newState;
};