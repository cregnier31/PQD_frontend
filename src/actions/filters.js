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

export function setCurrentUniverse(value){
  return {
    type: "SET_CURRENT_UNIVERSE",
    value
  }
}

export function forceFilters(values){
  return {
    type: "FORCE_FILTERS",
    values
  }
}