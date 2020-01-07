export function setPlot(universe, data){
  return {
    type: "SET_UNIVERSE_PLOT",
    universe,
    data
  }
}

export function setKpi(universe, what, data){
  return {
    type: "SET_UNIVERSE_KPI",
    what,
    universe,
    data
  }
}