const empty_obj = {
  plot: ""
}

const default_results_values = {
  BLUE: empty_obj,
  GREEN: empty_obj,
  WHITE: empty_obj
}

export const resultsReducer = (state = default_results_values, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERSE_PLOT":
      newState[action.universe]['plot'] = action.data
      break;
    default:
      break;
  }
  return newState;
};