export function setPlot(universe, data){
  return {
    type: "SET_UNIVERSE_PLOT",
    universe,
    data
  }
}

export function setKpis(universe, data){
  return {
    type: "SET_UNIVERSE_KPIS",
    universe,
    data
  }
}