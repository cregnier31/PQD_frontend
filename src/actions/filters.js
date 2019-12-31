export function setUniverseFilter(id, name, value){
  return {
    type: "SET_UNIVERSE_FILTER",
    id,
    name,
    value
  }
}

export function applyUniverseFilters(id){
  return {
    type: "APPLY_UNIVERSE_FILTER",
    id
  }
}

export function setZoneFilter(what, value){
  return {
    type: "SET_ZONE_FILTER",
    what,
    value
  }
}