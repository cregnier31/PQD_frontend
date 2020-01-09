export function setUniverseFilter(universe, name, value){
  return {
    type: "SET_UNIVERSE_FILTER",
    universe,
    name,
    value
  }
}

export function setAreaFilter(value){
  return {
    type: "SET_AREA_FILTER",
    value
  }
}