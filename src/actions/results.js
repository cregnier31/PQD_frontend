export function setPlot(universe, data){
  return {
    type: "SET_UNIVERSE_PLOT",
    universe,
    data
  }
}