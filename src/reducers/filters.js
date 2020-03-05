const default_filters_values = {
  area: "global",
  universe: "BLUE",
  BLUE: {
    variable: "Temperature",
    dataset: "temperature",
    product: "global-analysis-forecast-phy-001-024",
    subarea: "full-domain",
    depth: "2000-5000m",
    stat: "anomaly-correlation",
    plot_type: "timeseries",
  },
  GREEN: {
    variable: "",
    dataset: "",
    product: "",
    subarea: "",
    depth: "",
    stat: "",
    plot_type: "timeseries",
  },
  WHITE: {
    variable: "",
    dataset: "",
    product: "",
    subarea: "",
    depth: "",
    stat: "",
    plot_type: "timeseries",
  }
};

// plot_type isn't in list above because its value is fix for now
const filtersOrder = ['variable', 'dataset', 'product', 'subarea', 'depth', 'stat']

export const filtersReducer = (state = default_filters_values, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_UNIVERSE_FILTER":
      newState[action.universe][action.name] = action.value
      var clearNext = false
      for (var i = 0; i < filtersOrder.length; i++) {
        if (clearNext) {
          newState[action.universe][filtersOrder[i]] = ""
        }
        if (action.name === filtersOrder[i]) {
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
        plot_type: "timeseries",
      }
      newState["BLUE"] = emptyObj
      newState["GREEN"] = emptyObj
      newState["WHITE"] = emptyObj
      break;
    case "SET_CURRENT_UNIVERSE":
      newState["universe"] = action.value
      break;
    case "FORCE_FILTERS":
      const values = action.values
      newState["area"] = values.area
      newState["universe"] = values.universe
      newState[values.universe] = {
        variable: values.variable,
        dataset: values.dataset,
        product: values.product,
        subarea: values.subarea,
        depth: values.depth,
        stat: values.stat,
        plot_type: "timeseries",
      }
    default:
      break;
  }
  return newState;
};
