export function defineActiveFilter(name, value){
  return {
    type: "DEFINE_ACTIVE_FILTER",
    name,
    value
  }
}