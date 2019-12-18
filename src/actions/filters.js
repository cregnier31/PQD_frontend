export function setUniversFilter(id, name, value){
  return {
    type: "SET_UNIVERS_FILTER",
    id,
    name,
    value
  }
}

export function clearUniversFilter(id){
  return {
    type: "CLEAR_UNIVERS_FILTER",
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