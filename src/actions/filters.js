export function setUniversFilter(id, name, value){
  return {
    type: "SET_UNIVERS_FILTER",
    id,
    name,
    value
  }
}

export function applyUniversFilters(id){
  return {
    type: "APPLY_UNIVERS_FILTER",
    id
  }
}

export function setZoneFilter(what, name, value){
  return {
    type: "SET_ZONE_FILTER",
    what,
    name,
    value
  }
}