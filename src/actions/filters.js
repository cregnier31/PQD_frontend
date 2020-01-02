export function setUniverseFilter(id, name, value){
  return {
    type: "SET_UNIVERSE_FILTER",
    id,
    name,
    value
  }
}

export function setZoneFilter(what, value){
  return {
    type: "SET_ZONE_FILTER",
    what,
    value
  }
}