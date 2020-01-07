const empty_obj = {
  kpis: {
    '2a': [],
    '2b': []
  },
  plot: ""
}

const default_results_values = {
  universes: {
    BLUE: empty_obj,
    GREEN: empty_obj,
    WHITE: empty_obj
  }
}

export const resultsReducer = (state = default_results_values, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERSE_PLOT":
      newState['universes'][action.universe]['plot'] = action.data
      break;
    case "SET_UNIVERSE_KPI":
      newState['universes'][action.universe]['kpis'][action.what] = action.data
      break;
    default:
      break;
  }
  return newState;
};